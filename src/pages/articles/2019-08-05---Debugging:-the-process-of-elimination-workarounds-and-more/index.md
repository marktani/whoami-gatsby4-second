---
title: "Debugging: the process of elimination, workarounds and more"
date: "2019-08-05T15:29:16.000Z"
layout: post
draft: false
path: "/posts/debugging-process/"
category: "Software"
tags:
description: "In this article I explore the topic of debugging including process of elimination, finding workarounds and collecting clues. I describe how I debugged the error 'TypeError: Network request failed' when trying to connect to a local server from an Android or iOS device. Finally, I explain the reason and solution for this specific error."
---

![Maze](maze.jpg)

> [Photo](https://unsplash.com/photos/_qXjdWm8YEo) by Victor Garcia on Unsplash

I am currently building a small app to track my daily intentions every morning. I use GraphQL in the backend and [Expo](https://expo.io/) in the frontend. Pretty early on in my development, I came across a very common error that took me quite a while to understand and fix.

In the following I describe my process of debugging this error, my learnings along the way and finally a solution.

## The situation

I built a minimal GraphQL server using [`apollo-server`](https://github.com/apollographql/apollo-server), running on my laptop at `http://localhost:4000`.

For my React Native client, I adjusted the [fetch example](https://facebook.github.io/react-native/docs/network) to send a GraphQL query to `http://localhost:4000`. I run this client on my Android phone (not an Android emulator or a iOS simulator on my laptop).

When I run the client code, Expo reports this error message:

```
[Unhandled promise rejection: TypeError: Network request failed]
- node_modules/react-native/Libraries/vendor/core/whatwg-fetch.js:504:29 in onerror
- node_modules/event-target-shim/lib/event-target.js:172:43 in dispatchEvent
- ... 8 more stack frames from framework internals
```

I found many issues and discussions on this error in particular:

* [Network request failed (device and emulator)](https://github.com/expo/expo/issues/1606)
* [network request failed when running expo app on android device](https://forums.expo.io/t/network-request-failed-when-running-expo-app-on-android-device/10388)
* [React-Native fetch, Network request failed. On android](https://github.com/facebook/react-native/issues/10404)

I eventually found the solution spread across those posts. In the following I describe my general approach when debugging a problem using this specific error as an example.

You can also [scroll down to the solution](#the-solution).

## Debugging or Why does this error occur?

We've found ourselves a bug here - time to debug it! 
Bugs often occur because we made an assumption that is not true, and that we're often not aware of.

Let's first try to understand why the error occurs, which will help us to identify this assumption!

### Process of elimination - find out why the error does NOT occur!

One of the aspects of debugging I enjoy the most is the _process of elimination_.

Basically, it works like this:

* Think of potential causes for the problem
* Divide them into subclasses
* Eliminate subclasses of problems one by one, starting with the easiest
* Finally, test the few remaining possibilities manually

What's cool about this approach is that it is quite efficient, and it allows you to gain more confidence in your system and to get a better understanding of the potential causes of the problem as you go.

Generally speaking, we want to approach this similar to [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm). This means that we strive to divide the space of potential causes into a small number of subclasses of equal size (ideally into two big subclasses), and then try to eliminate one of them.

Whether or not the error still occurs, this ideally allows us to **eliminate one half** of the problem space in one step! Then we proceed with the remaining cases that we still believe to be potentially problematic.

In our case, the error message `Network request failed` let's us know that there is a connection problem between the Android device and the server running on my laptop. Is this error caused by the server, by the client or something network related?

### Start with components that are easy to validate

In our case, we have three components - server, client, network. This is also the order in which we will validate them! 

**Given a number of components to be tested, I validate them from easiest to hardest!**

In my experience, that is the fastest/most efficient/best approach, as it allows me to gain confidence "gradually" in the system and in my understanding of the system over time. 

Following this approach, if I find a problem early on and I believe to have fixed it, I can quickly confirm that it works again.

If on the other hand, I am finding the problem in a component I check towards the end, I have gained a better understanding of the overall system, because I validated many components before are working as intended already.

This approach is very useful if dealing with new or unknown code. However, once you are more familiar with your code base and its different components, you might have a better hunch where to start looking and you can dive right into that component. Also, make sure to build unit tests and integration tests over time to make validation easier for all components!

### Tools for validation

When debugging the interaction between multiple components, always look out for opportunities to use simple/fundamental tools to test your components. This helps you to quickly eliminate entire components as the cause of the problem!

In my case, the first step was to validate the server, because it's quite easy to do. To that end, I ran the following [curl](https://curl.haxx.se/) request from my laptop. Curl is handy whenever you want to run a HTTP request but you don't want to write your own (potentially problematic) code for it.

Here, I ran a minimal GraphQL query on the server:

```
curl 'http://localhost:4000/' -H 'content-type: application/json' --data-binary '{"query":"{intentions { id } }"}'
```

This query returned the intentions on my server correctly - **the server worked as expected**! Because I ran the query from my laptop, neither the client nor the network was involved.

The client code was fairly minimal, so I expected the network to be the culprit. Still, I wanted to validate the client next to confirm my assumption.

To focus on the client and rule out any shenanigans between the client and server interaction, I mocked the server side to isolate the client code. This was a bit more difficult as I had to find a quick way to mock my server. I found [mocky](https://www.mocky.io/) where I mocked the following response to mimick the expected server response:

```json
{
  "data": {
    "intentions": [{
      "id":"1",
      "date":"2019-07-30",
      "text":"Win."
    },{
      "id":"2",
      "date":"2019-07-31",
      "text":"Relax."
    }]
  }
}
```

When I changed the URL in my client code to `http://www.mocky.io/v2/5d4833e533000083b5a3edee` (for example), everything was displayed correctly - **the client worked as expected**!

> Note: Don't shy away of writing your own scripts and tools to validate your code! This can include test suites, mocked components or even small scripts that run specific code. For example, [this HTML page](https://gist.github.com/marktani/5df524523693c88be425bfb623ca8b8a) is the best tool I know to validate GraphQL subscriptions using websockets, and I wrote it myself. I have used it a few hundred times I guess, so it saved me a ton of time!

### A word on workarounds

The process of elimination often reveals workarounds in a straightforward manner.

Above, I found out that my client is able to send remote network requests - a workaround that follows directly from this is to deploy the server remotely, and then query the remote URL in the client.

I do not like this solution, as I prefer the fast feedback loop of local development. However, having a fallback option that works even if nothing else goes my way is quite relaxing.

Oftentimes, going for workarounds means we can move along and get the project forward, instead of being stuck and putting our progress to a halt.

After finding a workaround, you are also in the position of making a trade-off call. How much time/effort do I want to invest into finding a better or cleaner solution vs. taking the workaround approach?

In my case, I was willing to spend a lot of time to fix this issue, as it is quite fundamental and I wanted to learn more about the situation. An alternative is to set yourself a time-lock (of say 2 hours), making sure that you don't spend more time to find a solution. If you can't find a solution in this time, move on with the workaround.

### Collecting clues

Great, so together we have:

* When I query the server from my laptop, the server works as expected
* When I query the mock server from my client, the client works as expected

Ok cool, now we have very strong evidence pointing at the local network as the area of trouble, with the knowledge that network requests work in general. This means that the problem is likely related to something specific about the connection to my local server. It could be a typo in the URL (it happens more often than one would think...) or something else related to my local network.

There is a theme I noticed in the links and online discussions that I was reading: this particular error seemed to only appear on actual Android and iOS devices and the Android emulator, but not on the iOS simulator.

Together with my knowledge that remote requests work but local requests fail, it finally clicked for me!

The address `http://localhost:4000` inside of an emulator or an actual device points to port 4000 of the emulator or device itself and **not** to `localhost` of my laptop. Pretty clear, once you think about it! But I did not think of this at all while setting up my server and client!

So, instead of referring to `localhost`, we have to choose another address to point from my client on my Android phone to the server on my laptop.

## The solution

With the new understanding of the problem, we are able to devise a solution:

* find out the local IP address of my laptop and use it to replace `localhost` in the client code
* open the port of my laptop that the server runs on to the local network

To get my local IP address, I ran 

```sh
ifconfig
```

on my Mac (also works for Linux - use `ipconfig` on Windows instead!). In my case the address was `192.168.178.22`. It probably looks similar in your situation depending on your local network and router configurations.

Then, I searched for the port forwarding option of my router. This is specific to the router brand/model, so refer to the official documentation. I also made sure that my Mac Firewall was turned off, which it already was.

Finally, I updated the URL in my client code to `http://192.168.178.22:4000`, and it worked! 🎉

## Summary

When faced with a bug, take your time to investigate the situation thoroughly. Move forward strategically, confirm your assumptions in small steps, try to learn more about the system and narrow down the problem. Then, plan and execute your solution!

* Use the _process of elimination_ to narrow down potential problems and gain confidence in your system.
* Where possible, replace or isolate components with tools like mocking. The more fundamental and simple the tool, the better!
* Keep collecting clues to find potential workarounds and piece together a solution.
* If you don't find a clean solution, make a trade-off call between using a workaround and continuing your search for a solution.

I hope this post helps you with your debugging efforts, good luck with that! 🙌