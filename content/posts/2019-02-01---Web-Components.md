---
template: post
title: Web Components in 2019
slug: /posts/web-components-2019/
draft: true
date: 2019-01-31T19:30:37.121Z
description: >-
  Web Components represent a collection of browser specifications that allow designers and developers to create and reuse custom HTML tags that can deliver scoped styles and custom behaviors

category: Code
tags:
  - Design Systems
  - Web Components
---

The first time I heard about Web Components was in August '17, on [Shop Talk Show (episode 276)](https://shoptalkshow.com/episodes/276-web-components/). The idea sounded amazing, but when [Dave](https://twitter.com/davatron5000) & [Chris](https://twitter.com/chriscoyier) talked about browser support and the end to the HTML Imports spec, I kinda got bummed out.

The progress of the web moves incredibly fast, a lot of things have happened over the past 17 months: browser support has improved, new specs have landed, and some pretty great tooling has emerged. I think it's time to take another look.

**Spoiler alert, things are looking pretty great!**

## ⏳ TL;DR

Web components are ideal candidates for delivering design systems in organizations where tech stacks rely on a variety of front-end frameworks and libraries. They can reduce dependency-hell and spaghetti-code by encapsulating styling and functionality—write once and use them wherever HTML works (polyfills required).

_Note: Web Components may not be great candidates for full-fledged single page apps (as of today) due to some temporary accessibility limitations with the shadow DOM and AOM specs. Fear not, browsers support is on the way!_

## What are Web Components?

"Web Components" represent a collection of browser specifications that allow designers and developers to create and reuse custom HTML tags that can deliver scoped styles and custom behaviors—the specs are:

- [**Custom Elements**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements): create your own HTML tags—B.Y.O.T(ag).
- [**Shadow DOM**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM): provide scoped styles and behavior by isolating DOM nodes
- [**HTML Templates**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots): define element structure and expose "entry-points" (slots) to pass in children
- [**JavaScript Modules**](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/): export and import of reusable code

### As Defined by Webcomponents.org:

<figure>
  <blockquote>...a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps... [web components] work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.</blockquote>
  <figcaption>Read more in their <a href="https://www.webcomponents.org/introduction" target="_blank">introduction article</a> at webcomponents.org</figcaption>
</figure>

### How do you make Web Components?

Web components can be made with vanilla JavaScript, CSS, and HTML (don't forget, you'll need to manage browser-support by installing polyfills). You can find some in-depth resources on MDN's [Concepts and Usage](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

Personally, I find the ergonomics of writing vanilla JS classes to be a little uncomfortable. If that's your jam, you rock!

Lucky for me there are some tools out there that take the pain out of building web components. I'm a big fan of [Stencil](https://stenciljs.com/). As they say on their website: "Stencil combines the best concepts of the most popular frontend frameworks and generates 100% standards-based Web Components that run in any modern browser".

I like to think of Stencil as somewhat of a Sass-like tool for web components. It's a complier that outputs optimzed vanilla JS while also taking care of polyfills (reminds me of Autoprefixer for CSS).

If you want to learn more about how to build web components with (or without) Stencil, I highly recommend this [Udemy course](https://www.udemy.com/web-components-stenciljs-build-custom-html-elements/) by [Maximilian](https://twitter.com/maxedapps):

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Such a great course about Web Components by <a href="https://twitter.com/maxedapps?ref_src=twsrc%5Etfw">@maxedapps</a> . Thanks for making it so streamlined!<a href="https://t.co/uXmmmk6rrT">https://t.co/uXmmmk6rrT</a></p>&mdash; Andrew Harvard (@aharvard) <a href="https://twitter.com/aharvard/status/1091746414718271489?ref_src=twsrc%5Etfw">February 2, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Related Resources

Web Component [Tooling Benchmarks — Aug 2017](https://medium.com/@thangman22/stencil-js-vs-lit-element-vs-vanilla-vs-shadow-dom-vs-vue-js-5d2ade971183)

Andy Bell [documents his journey](https://webcomponents.club/) about learning web components and makes cool demos like [vanilla custom element with shadow DOM](https://codepen.io/andybelldesign/pen/ZREjYg) & [Simple "Done" App](https://codepen.io/hankchizljaw/project/editor/a7eeabf2783faf9dfb447c8652721b2f)

Some tools that make working with web components enjoyable: [Stencil](https://stenciljs.com/), [Skate](https://github.com/skatejs/skatejs), [LitElement](https://github.com/Polymer/lit-element)

[HowTo: Components](https://github.com/GoogleChromeLabs/howto-components) repo provides example web component patterns focused on accessibility, performance, and progressive enhancement

https://wicg.github.io/aom/spec/

https://www.youtube.com/watch?v=hdSz1EKjK10&feature=youtu.be

https://www.youtube.com/watch?v=UfD-k7aHkQE

https://robdodson.me/the-future-of-accessibility-for-custom-elements/

https://www.webcomponents.org/

https://ionic-team.github.io/stencil-present/

https://lit-html.polymer-project.org/

https://43081j.com/2018/08/future-of-polymer

https://developer.mozilla.org/en-US/docs/Web/Web_Components

https://custom-elements-everywhere.com/
