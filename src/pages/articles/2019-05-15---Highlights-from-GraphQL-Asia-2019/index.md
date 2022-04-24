---
title: "Highlights From GraphQL Asia 2019"
date: "2019-05-15T05:52:55.000Z"
layout: post
draft: true
path: "/posts/highlights-from-graphql-asia-2019/"
category: "Software"
tags:
description: "A look at the highlights from GraphQL Asia 2019."
---

![Spotlight](spotlight.jpg)

> [Photo](https://unsplash.com/photos/mln2ExJIkfc) by Paul Green on Unsplash

## Highlights from GraphQL Asia 2019

-> [Videos were just released!](https://www.youtube.com/playlist?list=PLYLxE0c1nvDDB2O8K2a2m9I8u9KW9HxFG)

### Keynote
by Lee Byron

Lee Byron with his keynote at GraphQL Asia taking a journey over the last 20 years of web development on how new tools and frameworks have evolved using the same patterns and concepts of the past. Also sharing the journey on how GraphQL has emerged in Facebook towards its success and future ubiquity.

* Abstraction -> Syntax -> Mental Model -> Abstraction
* The GraphQL Foundation

Watch the [video here](https://www.youtube.com/watch?v=CWZqgOAYLc8)!

### Why you should use REST instead of GraphQL
by Robert Zhu

The talk is to equip you with steel man arguments for using REST instead of GraphQL so that you are prepared for common counter-arguments to GraphQL adoption. Robert discusses REST fundamentals and how it compares to GraphQL on multiple dimension with hands-on examples.

* Principle of Charity
* Listen, understand, expose yourself to the best coutnerarguments to GraphQL
* Three categories of criticism
  * Novelty
    * Learning: the whole team need to get onboard and learn about GraphQL
    * Maturity: novel technology need time to mature
    * Cargo cult: only using GraphQL because some big company uses it
  * New Problems
    * Control: different GraphQL queries can cause hugely different costs in the backend
    * Centralization: a lot of types
      * vs. Federation: duplicate types, needs resolution logic
    * Graphs: not everything is a graph;
      * vs. Resources
      * ORMs
  * Broken Promises
    * Type-safety
      * Descriptive vs. Prescriptive
      * Custom Scalars
      * Impedance Mismatch
    * Performance
      * Caching
      * Overfetching
    * Simplicity

* TODO: mention https://2018.stateofjs.com/data-layer/graphql/

Watch the [video here](https://www.youtube.com/watch?v=djKPtyXhaNE)!

### GraphQL where it hurts the most - Practical tools to use GraphQL in the harshest environments
by Uri Goldshtein

Uri is sharing insights on where GraphQL hurts the most and how to go about these challenges using tools built by the community and The Guild to survive in harshest environments.

* Harshest environments
  * Very large corporations
  * Large traffic or large software development process complexity
* Super practical and insightful talk about everyday GraphQL, including tools

Watch the [video here](https://www.youtube.com/watch?v=wE_XgLmdJDQ)!

### GraphQL design patterns for realtime and offline app architecture
by Richard Threlkeld

A deep dive into native mobile and web app development with GraphQL, specifically on learnings from the past 2 years of working with customers who are building these apps. Richard details tradeoffs in application design across JS, iOS, and Android as well as subscription and offline programming scenarios with how this relates to GraphQL. Finally the talk is about the architecture patterns that you can use on the backend to make the applications simpler and what is scalable in different scenarios.

* Working backwards from use cases/customer needs
  * Two frequent use cases: offline and low latency messages

Watch the [video here](https://www.youtube.com/watch?v=v7HsQRx0e2A)!

### Paving a New Path for GraphQL Schemas
by Tim Griesser

Schema-first (SDL) development is common in the JS ecosystem, yet isn’t in most other languages. Why? What if we challenged this “best practice” with something even better - a library with a declarative API and full type safety out of the box - without needing manual type-annotation (even in JS)!

* SDL-first (graphql-tools)
* graphene
* graphql-ruby
* "SDL first seems to be unique to JS community"
* -> code first schema

### Serverless GraphQL
by Shawn Wang

GraphQL is often synonymous with the return of Monolithic architecture. Does this mean the benefits of Serverless are irrelevant? In this talk we explore how Serverless and GraphQL work together, explore ways to stitch individual function schemas, and get hard numbers to fight performance concerns.

* Hard Problems
  * "Minilith" approach
    * Persisted Queries?
    * Caching across multiple hierarchical endpoints
    * graphql-compose
  * Compiler approach
    * Split schema from resolver
  * Modularizing Schemas
    * `graphql-modules`
    * `graphql-import`
  * End-to-end typing
    * `typegraphql`
    * `graphql-nexus`
    * "Triple declaration problem"
  * Simplify writing Fat Gateways

### Gatsby and GraphQL: Today and the Future
by Sidhartha Chatterjee

Gatsby uses GraphQL in a pretty unique way — type inference, automatic filter and connection generation. This talk will be a deep dive in we use GraphQL to support querying data from hundreds of different source plugins. We’ll also look at the future of GraphQL at Gatsby and exciting new features.

* (This blog is built with Gatsby!)
* Pull data instead of push (CMS for blogging)
* (my point) Gatsby is one of the more unique use cases of GraphQL
  * schema is automatically generated, barely used by humans
  * super tooling heavy
* `graphql-compose`

## TODOs

* TODO: compare with https://blog.apollographql.com/highlights-from-graphql-summit-2018-30a766291691
* TODO: do a second pass over talk summaries
* TODO: watch Gatsby talk(s), Netlify
* TODO: shout out to Oleg, rest in peace; met him May 11th 2016, so just above 3 years ago. Things have changed a lot!
* TODO: check out `graphql-compose`
* TODO: compile list of interesting tools mentioned at GraphQL Asia
  * `graphql-compose`
  * `graphql-nexus`
  * `graphql-prisma-nexus`
  * `graphql-code-generator`
  * `graphql-modules`
  * `graphql-import`
  * `typegraphql`
  * Torilla tutorials honorary mention
* TODO: mention workshops

## Further talks

// TODO: mention a few and link to video again

### End-to-end Type-Safe GraphQL Apps
by Carlos Rufo

Discover all the steps & benefits for adding End-to-end Type-Safety to your GraphQL Apps with this demo-based lightning talk. At the end of such, you’ll want to refactor your codebase in order to take all the advantages of GraphQL, TypeScript & React working together on a SpaceX demo 🚀

* Using `graphql-code-generator`
* Live demo for building end-to-end type-safe GraphQL apps

Watch the [video here](https://www.youtube.com/watch?v=To97JeIAbmI)!


## Promotion

* https://www.linkedin.com/in/rbzhu/ (he shared his talk)
* TODO: include Twitter links to GraphQL Asia speakers/organizers
  * -> mention to them that I wrote it, ask them if they come to GraphQL Conf and (potentially) ask for RT etc.
* TODO: reach out to Prisma Day/GraphQL Conf organizers
* Ask Tobias for promotions
* https://spectrum.chat/prisma/general/announcing-prisma-day~007152a0-278f-4b24-9956-a522a593c36f

### Running Intuit Quickbooks for 4M customers on GraphQL!
by Rajat Khare

### Rewriting Wiki in Teams with Apollo+GraphQL at Microsoft's scale

Tanay Pratap

### BrikL - A GraphQL native
by Tobias Meixner

### GraphQL and State Management
by Shruti Kapoor

### The Cost of GraphQL
by Akanksha Choudhary

### Cleartrip reactive journey from 3 to 0.2s using Apollo GraphQL - a Case Study
by Eesh Tyagi

### GraphQL Tools are easy or how to write one in less than 100 lines
by Ivan Goncharov

### 200 OK! Error Handling in GraphQL
by Sasha Salomon

### How GraphQL adds strategic value at every stage of the digital transformation process - stories from Philips Healthcare
by Madhu Jahagirdar

### GraphQL execution in-depth
by Andreas Marek

### GraphQL @ Tokopedia
by Manoj Awasthi

### Building a high-performance realtime GraphQL API on existing databases and data sources
by Tanmai Gopal

### Re-architecture of a decade-old app with BFF/GraphQL
by Kenju Wagatsuma

### Subscriptions - A roller coaster ride!
by Kamlesh Chandnani & Peri Nikhil

### A glimpse of GraphQL: Front end developers’ life is easy now!
by Navya Agarwal

### GraphQL Test-Automation with Karate
by Peter Thomas

### How to Implement an extension aiming to track and monitor the performance of the GraphQL API
by Jonathan Jalouzot

### Live Queries implementation with Apollo & GraphQL
by Kiran Kumar Abburi

### Scaling Myntra API Gateway to 30kqps built on Go lang with GraphQL
by Amit Rana

### Adopting GraphQL @ Airbnb
by Adam Miskiewicz