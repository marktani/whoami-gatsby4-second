---
title: "Learning how to learn: Programming"
date: "2020-04-02T01:10:16.000Z"
layout: post
draft: false
path: "/posts/learning-how-to-learn-programming/"
category: "Software"
tags:
description: "In this article I explore the topic of learning how to learn programming."
---

![Maze](maze.jpg)

> [Photo](https://unsplash.com/photos/_qXjdWm8YEo) by Victor Garcia on Unsplash

## Introduction

There are many resources on programming out there. Here I'm sharing my perspective on how to go about **learning to learn to program**.

Unlike other industries, software engineering still lacks in commonly agreed upon standard practices, processes and norms. The simple fact is that we do not understand the practice of software engineering really at all and we're still in an early exploration phase.

This does not need to be disencouraging. In fact, isn't it exciting to be able to shape a field in its early days? There are many opportunities to explore unseen ideas, and study to increase our understanding of software development.

One of my biggest challenges in my own software development journey has been a lack of content about _how_ to approach learning to code!
So in this article I am sharing a variety of ideas and concepts you can think about and use as a guide for improving your software development skills!

After going over an aspect generally, I will try to illustrate the points using **Python** as an example.

## Your Toolbox - your bread and butter

The programming language and the tools surrounding your daily programming practice are often compared to the toolbox of a handyman.
Like in a toolbox, in your daily coding practice you will encounter a wide range of different tools. Some are better for certain use cases than others.

Let's take **Python** as an example. Python is a high-level and general-purpose programming language.

I suggest that you set developing it a high priority to develop a deep and fundamental understanding of the tools you use to code.

## Research - 

## Theory and Practice

When working with a programming language, it is important to have a firm theoretical understanding.

Many programs share functionality that is going to be needed over and over again. This is why typically, a programming language comes with a _standard library_ that offers solutions for those use cases. 

Get familiar with the standard library of the language of your choice, as it is one way to quickly grow your theoretical knowledge! For Python, [this is the Python standard library](https://docs.python.org/3/library/). Whenever you're writing code, make it a habit to check what capabilities and approaches are present in the standard library that can aid you. Over time, get more familiar with the common data structures and approaches available in your language. That way you increase your baseline proficiency and you have more tools available when being thrown into solving a new problem. 

For Python, being proficient with [strings](https://docs.python.org/3/library/string.html), [lists](https://docs.python.org/3/library/stdtypes.html#list) and [dictionaries](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict) can get you a long way, for example.

---

Apart from increasing your theoretical knowledge of the language, you can also increase your intuition and practical knowledge. A technique that is highly underused in my experience is to simply run code and try out different things!

Python offers an interactive prompt that allows you to execute Python code without any hurdles. Simply type some Python code and it gets executed immediately. Typically you can open the prompt by running `python` or `python3` in your terminal. So, let's say you are not sure what a certain line in your program does exactly - simply type it in the prompt and see what it outputs!

For JavaScript, the Console in Google Chrome acts as a similar prompt. Python and JavaScript are interpreted languages which makes it easy to run code quickly like that.

If you are working with a compiled language like Java or C++, this workflow can be a little more involved, so it is even more important to set up your environment for this use case! My recommendation is to have a dedicated test file that you can use to quickly run code to see how it behaves exactly.

## Practice, practice, practice

Regular and deliberate practice is an important aspect of any craft, sports and the like. I have found it fun and fulfilling to keep training both my problem solving skills and improving my coding proficiency by solving different challenges. You can find challenges with varying difficulties on [Project Euler](https://projecteuler.net/), [Codeforces](https://codeforces.com/problemset) and other such portals.

Another way, and indeed a very effective one at that, to improve your coding skills in general requires a change of perspective. It is captured in the following 'quote':

> If you want to build a ship, don’t drum up the men and women to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.
>
> (This is not a quote by Antoine de Saint Exupery, but [something like that](https://quoteinvestigator.com/2015/08/25/sea/))

Like building a ship, coding is not the end, it is a means to an end. With this perspective in mind, ask yourself "where do I want to go?" and then use coding as a way to get there, whether that is a small side project or the next unicorn startup!

## Understand the details to understand the whole



## Summary

* research
  * when and how to ask questions
    * how to answer your own questions
    * tradeoff between getting answers and finding answers
  * where to find basic information
    * standard library documentation
    * NOT Google / Stack Overflow
* theoretical knowledge
  * Standard library
  * knowing the atomic elemtents of the code
  * knowing syntax and semantics
  * primitive types etc.
* practical explorations
  * need to understand every single line to understand the whole program
  * if one function is new or not sure about the structure of data that is passed through the code, MINIMIZE the code to the barest minimum context that you don't understand
  * with this MC, explore how things behave in a practical example



* "hello".split()
  * compare debug output to expected output -> difference with the .
  * why does this happen? -> not sure, let's refer to documentation
  * documentation is rather technical and not that easy to understand, but at least we know that split() splits at any whitespace character. we want to add splitting at . -> now try it out practically
  * in practical example, we found out that split(".,/!") does not work. Why? -> refer back to documentation again - ah, this is only one string of separation
* treat a problem as an opportunity to increase your knowledge
* ask curious questions
* IDENTIFY WHICH ASSUMPTION IS WRONG

MIX OF THEORETICAL AND PRACTICAL APPROACH IS VERY IMPORTANT

Also, KNOW YOUR TOOLS AND ECOSYSTEM. Ask around in the community what people use, and start forming your own opinions.