---
title: What is a good reproduction?
date: "2018-06-16T15:50:00.000Z"
layout: post
draft: true
path: "/posts/what-is-a-good-reproduction/"
category: "Tech"
tags:
  - "Reproduction"
  - "Feedback"
description: "Can you reproduce it?"
---

## What is a reproduction?

A reproduction is a description that provides sufficient information to replicate a certain behaviour in one system on a completely separate system.

No previous knowledge about the first system is required. General knowledge about software systems and relevant tools can be assumed.

## Share relevant information

**Share relevant information** about your situation, your setup and your code. Try to include all relevant information, such as files, code snippets, versions and error messages.

<!--
**Examples**

Your first post by itself doesn't draw a holistic picture for someone that doesn't know your project. Someone unfamiliar is not able to understand your setup and the context you are in.

It sounds like you are importing types from one `.graphql` file to another. How do they look like?

-->

## Don't share irrelevant information

**Don't share irrelevant information** about your situation, your setup and your code. Sharing all information about your entire setup makes it difficult to narrow down the error. An unfamiliar person needs to get familiar with your entire setup first, before focusing on the error at hand.

<!--
**Examples**

You shared a GitHub repository with your entire project. I don't know your project, or the individual files. I lack your context. Which are the files of particular interest for this conversation?

-->


## Be explicit

Software systems are complex. Many terms are ambiguous and there are often multiple ways to achieve the same goal. Therefore, when describing your situation, your environment, or a certain step or command you are running, **be explicit**.

This helps to narrow down the problem, prevents misunderstandings and simplifies communication.

<!--

**Example**

> I uploaded it to Github with the issue - https://github.com/OGNeutron/Prisma_main_hub, if you run it, you’ll see the issue with it.

I don't know what you mean by saying "if you run it". How do I run what? What exactly does "run" mean in this context?

Some more explicit descriptions that could apply to your situation:
* Run `npm start`, and execute a query against the GraphQL Server that is running on `localhost:4000`.
* Run `prisma deploy`, which triggers post deployment hooks.
* Execute the binary `./import`.
* Install python and run `python setup.py`.

-->
