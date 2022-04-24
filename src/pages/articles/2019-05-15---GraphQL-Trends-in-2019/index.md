---
title: "GraphQL Trends in 2019"
date: "2019-05-15T02:14:16.000Z"
layout: post
draft: false
path: "/posts/graphql-trends-in-2019/"
category: "Software"
tags:
description: "This article gives an overview of the current state of GraphQL, recent trends and a prediction for the most relevant topics in GraphQL in 2019 and the near future."
---

![Outlook](outlook.jpg)

> [Photo](https://unsplash.com/photos/YhdEgF-qWlI) by Sven Scheuermeier on Unsplash

The [GraphQL Foundation](https://medium.com/@leeb/introducing-the-graphql-foundation-3235d8186d6d) announcement last year was another reassurance that GraphQL is here to stay, after [Facebook granted full patent rights to all GraphQL users](https://blog.apollographql.com/facebook-grants-full-patent-rights-to-all-graphql-users-2c41abc6df66) two years ago.

While the legal situation around GraphQL is in the clear now, 4 years after [its open-source release](https://graphql.org/blog/graphql-a-query-language/), the best practices and developments surrounding the still-emerging technology are still rapidly evolving.

This article gives an overview of the current state of GraphQL, recent trends and a prediction for the most relevant topics in GraphQL in 2019 and the near future.

## The GraphQL Community is Thriving

The GraphQL community is bigger and more active than ever. Honestly, it's almost impossible to keep up with all of the events, initiatives and resources the community is creating on a regular basis.

### Conferences All Over the World

Yesterday, the videos from [GraphQL Asia](https://www.graphql-asia.org/) 2019 [were published](https://www.youtube.com/playlist?list=PLYLxE0c1nvDDB2O8K2a2m9I8u9KW9HxFG).

<!-- TODO: You can read about the [Highlights of GraphQL Asia 2019](/posts/highlights-from-graphql-asia-2019) here. -->

GraphQL Asia is not the _only_ GraphQL conference. The Call For Papers for the fourth edition of [GraphQL Summit](https://summit.graphql.com/) is open for [another two weeks](https://blog.apollographql.com/graphql-summit-2019-call-for-proposals-1d4df757fc0f), the third edition of [GraphQL Conf](https://www.graphqlconf.org/) (formerly GraphQL Europe) in Berlin is around the corner. There is no lack of great GraphQL conferences all over the world!

### Meetups, One Day Conferences and More

According to [Meetup](https://www.meetup.com/topics/graphql/), there are over 120 GraphQL meetups with over 60,000 members all over the world. 

Let me catch my breath - [Apollo Day](https://blog.apollographql.com/join-us-for-apollo-day-in-nyc-and-san-francisco-in-may-8b43150f6fd4) is happening twice this year (once yesterday in New York as well as next week in San Francisco). Next month, [Prisma Day](https://www.prisma.io/day/) provides a nice excuse to enjoy sunny Berlin an extra day before GraphQL Conf.

Later this year, [GraphQL Day](https://www.graphqlday.org/) goes into round three, this time at [Lake Constance](https://www.papercall.io/graphql-day-bodensee). Today, This Dot Labs is hosting [another edition](https://www.thisdot.co/events/graphql-contributordays-enterpriseedition) of the [GraphQL Contributor Day](https://blog.hasura.io/contributor-days/).

### Community-Driven Learning Resources and Content

Resources like [How to GraphQL](https://howtographql.com), [Learn Hasura](https://learn.hasura.io/), and [Open GraphQL](https://medium.com/open-graphql) are the result of a community-driven effort to provide top quality learning material.

Additionally, there is the occasional [panel discussion](https://twitter.com/dlschafer/status/1124380277717909504), [tutorial](https://www.youtube.com/watch?v=5ydCPvrWRmg), [case study](https://developers.facebook.com/videos/2019/building-the-new-facebookcom-with-react-graphql-and-relay/) or [developer tool](https://www.novvum.io/post/introducing-graphql-birdseye). And soon there is even going to be a [GraphQL documentary](https://twitter.com/honeypotio/status/1128698561733058560)!

There is already the [GraphQL Weekly](https://www.graphqlweekly.com/) newsletter. How long until we get The Daily GraphQL™? I think you got the message. The GraphQL community is thriving, that much is clear.

## The Big Topics for GraphQL in 2019

With all of this buzz, **what are the most important topics in GraphQL this year?**

### Schema Stitching and Distributed GraphQL Schemas

Let's start our tour by going back in time by about two years. As GraphQL adoption around this time was quickly growing, so did the average size of organizations that adopted it. This meant that a big wave of almost-GraphQL-adopters were encountering similar issues that occur when working at multiple GraphQL schemas in a distributed way.

Many of those developers started to look into different approaches to build a "GraphQL Gateway" to solve the new challenges they were facing. The idea was to combine multiple GraphQL schemas into a unified API, which brought its own set of challenges with it.

What followed was an effort spear-headed by [Mikhail Novikov](https://twitter.com/freiksenet), [Apollo](https://www.apollographql.com/) and [Prisma](https://www.prisma.io/) to develop techniques and approaches to solve these challenges, commonly referred to as **schema stitching** or **schema delegation**. Schema stitching quickly grew from a [demo](https://github.com/stubailo/schema-stitching-demo) and [proof of concept](https://www.slideshare.net/sashko1/modular-graphql-with-schema-stitching) into _the_ [hot topic](https://blog.apollographql.com/graphql-schema-stitching-8af23354ac37) for GraphQL in 2017.

---

The whispers and cautious optimism around schema stitching exploded into sheer celebration at GraphQL Summit 2017, with schema stitching being [the central theme](https://blog.apollographql.com/key-takeaways-from-graphql-summit-2017-b292d6fa121b) to stand out at the conference.

Several projects like [GrAMPS](https://github.com/gramps-graphql/gramps), [GraphQL schema bindings](https://www.prisma.io/blog/graphql-schema-stitching-explained-schema-delegation-4c6caf468405) and [GraphQL-tools](https://blog.apollographql.com/graphql-tools-2-0-with-schema-stitching-8944064904a5) were revealed and talked about at the conference. A big part of the excitement was that all projects were united by similar observations independently from each other. They looked at different use cases and angles on the same underlying problem.

A clearer vision of schema stitching emerged, promising to be the cure-all when working with multiple GraphQL schemas.
2018 saw [multiple resources](https://blog.hasura.io/the-ultimate-guide-to-schema-stitching-in-graphql-f30178ac0072/) that offered further developments for the [collective understanding of schema stitching](https://blog.apollographql.com/the-next-generation-of-schema-stitching-2716b3b259c0).

---

How did this excitement carry over to 2019?

More teams encountered the same problems around distributed GraphQL schema, but schema stitching didn't turn out to be the unified approach it once promised to be. In fact, the approach of schema stitching opens up its own set of [problems and shortcomings](https://spectrum.chat/prisma/graphql/common-issues-with-schema-stitching~4908a1c0-a007-4b73-91e9-3fda5e7e4bd8). Instead, teams are developing specialized approaches that make sense for their unique situation, especially in bigger organizations.

In 2019, a new approach termed **schema federation** [is emerging](https://medium.com/@aaivazis/beyond-schema-delegation-e3430a942fdd), that can be seen as the evolution of schema stitching. With [James Baxley's](https://twitter.com/jbaxleyiii) upcoming talk on [Apollo Schema Federation at GraphQL Conf](https://medium.com/graphqlconf/what-to-expect-at-graphql-conf-2019-4de4e6ce4ef5), it's exciting to see how schema federation is going to tackle the problem of collaborating on multiple GraphQL schemas in huge and distributed teams.

Will it deliver to the hype of schema stitching of the recent years?

### A More Diverse Landscape of GraphQL Services

As a continuation of a trend over the last few years, more and more options are available today to set up a GraphQL server environment, either in the cloud or locally, that we can categorize them along the spectrum from **fully integrated solution** to **a single component in your stack**.

The [Hasura DIY BaaS](https://hasura.io/diy-graphql-baas) offering, the serverless GraphQL Backend [8base](https://www.8base.com/), the headless GraphQL CMS [GraphCMS](https://graphcms.com/) and the library [AWS Amplify](https://aws-amplify.github.io/) in combination with the BaaS [AWS AppSync](https://aws.amazon.com/appsync/) are all viable options to set up a GraphQL server environment today. These options lean further towards the **integrated serverless backend services** end of the spectrum.

There is also a lot of movement and competition on the other end of the spectrum. [Postgraphile](https://www.graphile.org/postgraphile/), [Prisma](https://www.prisma.io/blog/prisma-and-graphql-mfl5y2r7t49c/) and [Hasura](https://hasura.io/) can all be used to generate a GraphQL API on top of a database, offering much more flexibility as the above services, but also come with a higher required effort in terms of additional tooling, infrastructure or implementation.

By now, a big and diverse landscape of such services has accrued. Therefore, it will become increasingly important to have an in-depth understanding of all the different tools and their respective best use case, to be able to deliver the best experience with the least resources.

### GraphQL Tooling

When GraphQL was released to the public, it shipped with GraphiQL - one of the first in a long range of tools that enable a totally new developer experience. At GraphQL Summit 2016, the first GraphQL conference, Lee Byron closed his brilliant talk [Lessons from 4 Years of GraphQL](https://www.youtube.com/watch?v=zVNrqo9XGOs) with the words:

> Where we definitely still need focus is in building and improving the tools for using GraphQL in lots of different environments. [...] I really think that great tools are what will make GraphQL ubiquitous and that's where we need all of your help.

And the community is doing a lot of work to fulfill that aspiration, whether that's in client- or server-side tooling, tools that improve the developer experience and workflows or tools that improve processes spanning across teams.

At GraphQL Asia, Uri Goldshtein showcased a range of super useful tools in [Practical tools to use GraphQL in the harshest environments](https://www.youtube.com/watch?v=wE_XgLmdJDQ), and Ivan Goncharov showed that [GraphQL Tools are easy or how to write one in less than 100 lines](https://www.youtube.com/watch?v=rzdweyxkemc).

---

There are way too many tools to mention them all, but let's highlight a few.

* Whether you're working code-first or schema-first (the latter sometimes also being called SDL-first), there are always going to be **schema-related workflows**. [GraphQL Nexus](https://nexus.js.org/) and [GraphQL Modules](https://graphql-modules.com/) are two examples that are gaining popularity this year.

* There is also a range of **IDE integrations**. [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo), [Prisma GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql) and [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode) are the three most popular ones for VS Code.

* Additionally, there is a rich ecosystem of **highly specialized tools** in GraphQL: [SOFA](https://github.com/Urigo/sofa) provides a way to generate REST APIs from a GraphQL server, while [`graphql-shield`](https://github.com/maticzav/graphql-shield) can be used to easily implement a permission layer into your GraphQL resolvers.

* Last but not least, one of the oldest **visual tools for GraphQL**, [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager), has been joined by [GraphQL Birdseye](https://github.com/Novvum/graphql-birdseye) and [GraphQL Editor](https://graphqleditor.com/) this year. Both tools offer an graphical interface to gain insights into your GraphQL schema or interact with it.

---

A big part of the attraction of GraphQL is the aspect of developer-centric and powerful tooling. And while a lot of tools have been built in the past few years, there is still a lot of potential for more use cases, and more polished experiences.

### Classical API Concepts

As an API technology, GraphQL sits at a crucial location in the stack. As such, potential users of GraphQL have to carefully consider how GraphQL plays out for them and their use case with regards to a lot of responsibilities and concepts related to APIs.

While there are many valid approaches for concepts like offline-first, realtime queries and subscriptions, schema migrations, error handling, backwards compatibility, microservice architecture, and security, the lack of commonly agreed best-practices has severly hindered GraphQL adoption.

In 2019, we will continue to see more case studies, tutorials, libraries and discussions about these very concepts.

### GraphQL vs. REST or Beating a Dead Horse

Ever since GraphQL gained popularity, there have been large debates, discussions and flame wars about which technology is better - GraphQL or REST? Following the sentiment of Robert Zhu's talk on [Why you should use REST instead of GraphQL](https://www.youtube.com/watch?v=djKPtyXhaNE) at GraphQL Asia 2019 we can hopefully observe an increasing quality of such conversations.

In software development, there is an old saying that probably also applies to the matter of "Which is better, REST or GrapgQL?": **It depends**.
What's for sure is that GraphQL has brought a lot of value and momentum to the table of API development and software development processes in general.

### Code-First vs. Schema-First, Code Generation and Type Safety

The debate around **code-first vs. schema-first GraphQL** [that recently sparked]((https://www.prisma.io/blog/the-problems-of-schema-first-graphql-development-x1mn4cb0tyl3)) is a big contender for the most discussed GraphQL topic in 2019.

As Tim Griesser describes [in his recent talk at GraphQL Asia 2019](https://www.youtube.com/watch?v=_CAq7mnPqro), the JavaScript GraphQL ecosystem has actually been one of the few to start out with a schema-first approach. Most other communities like Sangria, GraphQL Ruby and Graphene have relied on code-first GraphQL from the start.

---

The trend of code-first vs. schema-first GraphQL development is also connected to two other big trends: **code-generation** and **end-to-end type safety**. These topics have gained a lot of traction in the GraphQL community recently.

Tools like [graphqlgen](https://www.prisma.io/blog/graphqlgen-fj3s0ssc1jsx) and [GraphQL Code Generator](https://graphql-code-generator.com/) set out to automatically generate type-safe GraphQL code based on a GraphQL Schema (_schema-first_). When using the [AWS Amplify](https://aws-amplify.github.io/docs/) framework, you can integrate with AWS AppSync in a _schema-first_ manner. Again, the native client code can be [automatically generated]((https://aws-amplify.github.io/docs/cli/codegen?sdk=js)).

[GraphQL Nexus](https://nexus.js.org) actually flips this workflow around. Following a _code-first_ approach, you can write code that describes your data structure and let GraphQL Nexus automatically generate the GraphQL schema for you, in a type-safe way.

While these concepts are not novel by themselves, the new terminology and combination helps to have new conversations and perspectives. It's going to be exciting to see further developments in this area of GraphQL unfold.

## We're In For a Treat

No matter which trends the remainder of 2019 holds in store for the GraphQL community, one thing's for sure. With the upcoming [Prisma Day](https://www.prisma.io/day/) and [GraphQL Conf](https://www.graphqlconf.org/) in June and [GraphQL Summit](https://summit.graphql.com/) in October, we're in for a treat.

What are your thoughts on current GraphQL trends? Which topic are you most excited about?
Come talk to me at Prisma Day and GraphQL Conf, I'm looking forward to meeting you!

> Note: There is an excellent article by my former colleague Etel on [What to expect at GraphQL Conf 2019](https://medium.com/graphqlconf/what-to-expect-at-graphql-conf-2019-4de4e6ce4ef5) specifically. Check it out for another perspective on GraphQL trends!

---

## Saying Good Bye

This article is dedicated to [Oleg Ilyenko](https://twitter.com/easyangel), author of Sangria and one of the earliest and most valiant GraphQL adopters. He passed away last week.

I met Oleg just over 3 years ago in Berlin at the first [GraphQL Berlin meetup](https://www.meetup.com/Honeypot/events/230681985/). Just like GraphQL, my life has changed completely in the last three years.

Thanks for being a part of it, Oleg, and thanks for making my first experiences with GraphQL and Berlin sweeter, funnier and easier. I will miss you dearly.