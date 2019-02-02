---
template: post
title: Web Components, a Design System's Best Friend
slug: /posts/web-components/
draft: false
date: 2019-02-01T19:30:37.121Z
description: >-
  Web components are ideal candidates for delivering design systems in organizations where tech stacks rely on a variety of frontend frameworks and libraries. They reduce dependance hell by encapsulating styling and functionality. Write once and use them wherever HTML works. However, Web Components may not be great candidates for full blown single page apps due to some temporary accessibility limitation with the shadow DOM spec—fear not, browser support is on the way.
category: Code
tags:
  - Design System
  - Web Components
---

I first heard about Web Components in Aug 2017, was when I was listing to [Shop Talk Show Episode 276](https://shoptalkshow.com/episodes/276-web-components/). The idea sounded amazing but I was confused about browser support and the nuance behind what the tech that makes it all possible. At the time, they were not exactly ready for prime time. However, it's time to take another look and see what problems they can help us solve today.

⏳ **TL;DR**: Web components are ideal candidates for delivering design systems in organizations where tech stacks rely on a variety of frontend frameworks and libraries. They reduce dependance hell by encapsulating styling and functionality. Write once and use them wherever HTML works. However, Web Components may not be great candidates for full blown single page apps due to some temporary accessibility limitation with the shadow DOM spec—fear not, browser support is on the way.

## What are Web Components?

The term "Web Components" represents a collection of browser features that allow developers to create and share custom html tags that can deliver scoped styles and custom functionality. The main specification that make up web components are:

- **Custom Elements**
- **Shadow DOM**: Encapsulates
- **ES Modules**: Modular systems for reusing of JS
- **HTML Templates**

In this [intro article](https://www.webcomponents.org/introduction) webcomponents.org describes them as:

> ... a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps... [web components] work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

## How do Web Components empower designs systems?

### Encapsulated styling and custom behavior

### Inclusive Design Delivery

## More on Web Components

Web Component [Tooling Benchmarks — Aug 2017](https://medium.com/@thangman22/stencil-js-vs-lit-element-vs-vanilla-vs-shadow-dom-vs-vue-js-5d2ade971183)

Andy Bell [documents his journey](https://webcomponents.club/) about learning web components and makes cool demos like [vanilla custom element with shadow DOM](https://codepen.io/andybelldesign/pen/ZREjYg) & [Simple "Done" App](https://codepen.io/hankchizljaw/project/editor/a7eeabf2783faf9dfb447c8652721b2f)

Some tools that make working with web components enjoyable: [Stencil](https://stenciljs.com/), [Skate](https://github.com/skatejs/skatejs), [LitElement](https://github.com/Polymer/lit-element)

[HowTo: Components](https://github.com/GoogleChromeLabs/howto-components) repo provides example web component patterns focused on accessibility, performance, and progressive enhancement

https://wicg.github.io/aom/spec/

https://www.udemy.com/web-components-stenciljs-build-custom-html-elements/learn/v4/questions/

https://www.youtube.com/watch?v=hdSz1EKjK10&feature=youtu.be

https://www.youtube.com/watch?v=UfD-k7aHkQE

https://robdodson.me/the-future-of-accessibility-for-custom-elements/

https://www.webcomponents.org/

https://ionic-team.github.io/stencil-present/

https://lit-html.polymer-project.org/

https://43081j.com/2018/08/future-of-polymer

https://developer.mozilla.org/en-US/docs/Web/Web_Components

https://custom-elements-everywhere.com/
