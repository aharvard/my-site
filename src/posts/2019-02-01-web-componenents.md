---
title: Web Components in 2019
description: Web Components represent a collection of browser specifications that allow designers and developers to create and reuse custom HTML tags that can deliver scoped styles and custom behaviors.
tags:
  - post
topics:
  - design systems
  - web components
---

Web components are ideal candidates for delivering design systems in organizations where tech stacks rely on various front-end JavaScript frameworks and libraries.

They mitigate framework lock-in by delivering encapsulated vanilla styling and behavior.

They may not be great candidates for full-fledged single-page apps (at the time of this post) due to some accessibility limitations with the shadow DOM and[Accessibility Object Model (AOM)](http://wicg.github.io/aom/explainer.html) specs.

## What are Web Components?

“Web Components” represent a collection of browser specifications that allow designers and developers to create and reuse custom HTML tags that can deliver scoped styles and custom behaviors—the specs are:

- [**Custom Elements**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements): create your own HTML tags—B.Y.O.T(ag).
- [**Shadow DOM**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM): provide scoped styles and behaviors by isolating DOM nodes (sounds spooky)
- [**HTML Templates**](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots): define element structure and expose "entry-points" (slots) to pass in children elements
- [**JavaScript Modules**](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/): export and import reusable code

### As Defined by Webcomponents.org:

<figure>
  <blockquote>... a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps... [web components] work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.</blockquote>
  <figcaption>Read more in their <a href="https://www.webcomponents.org/introduction" target="_blank">introduction article</a> at webcomponents.org</figcaption>
</figure>

## How do you make Web Components?

You can create Web components with vanilla JavaScript, CSS, and HTML, and you can find some in-depth resources on MDN's [Concepts and Usage](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

If you need to support older browsers, you will need to use polyfills. Also, be sure to take extra care to ensure accessibility.

### Stencil

I find the ergonomics of writing vanilla JS for Web Components to be complicated, and [Stencil](https://stenciljs.com/) simplifies things.

I like to think of Stencil as somewhat of a Babel- or Sass-like tool for web components.

Stencil is a compiler that outputs optimized vanilla JS while also taking care of polyfills.

As they say on their website: "Stencil combines the best concepts of the most popular front-end frameworks and generates 100% standards-based Web Components that run in any modern browser."

**Note: Stencil is not Ionic!** While the Ionic team is behind Stencil, it's a stand-alone tool that does not depend on the Ionic framework.

### Stencil announced at 2017 Polymer Summit

I've cued up the video to the point where they announce Stencil. If you want more of the backstory, I recommend watching from the beginning.

<div class="video__wrapper">
<iframe width="100%" src="https://www.youtube.com/embed/UfD-k7aHkQE?start=566" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Leveling Up ++

If you want to learn more about how to build web components with (or without) Stencil, I highly recommend this [Udemy course](https://www.udemy.com/web-components-stenciljs-build-custom-html-elements/) by [Maximilian](https://twitter.com/maxedapps):

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Such a great course about Web Components by <a href="https://twitter.com/maxedapps?ref_src=twsrc%5Etfw">@maxedapps</a> . Thanks for making it so streamlined!<a href="https://t.co/uXmmmk6rrT">https://t.co/uXmmmk6rrT</a></p>&mdash; Andrew Harvard (@aharvard) <a href="https://twitter.com/aharvard/status/1091746414718271489?ref_src=twsrc%5Etfw">February 2, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Related Resources

- [WebComponents.org](https://www.webcomponents.org/)
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Making sure frameworks and custom elements can be BFFs](https://custom-elements-everywhere.com/), by [Rob Dodson](https://twitter.com/rob_dodson)
- [Web Component Tooling Benchmarks](https://medium.com/@thangman22/stencil-js-vs-lit-element-vs-vanilla-vs-shadow-dom-vs-vue-js-5d2ade971183) (as of Aug 2017)
- Andy Bell [documents his journey](https://webcomponents.club/) about learning web components and makes cool demos like [vanilla custom element with shadow DOM](https://codepen.io/andybelldesign/pen/ZREjYg) & [Simple "Done" App](https://codepen.io/hankchizljaw/project/editor/a7eeabf2783faf9dfb447c8652721b2f)
- Some tools that make working with web components enjoyable: [Stencil](https://stenciljs.com/), [Skate](https://github.com/skatejs/skatejs), [LitElement](https://github.com/Polymer/lit-element)
- [HowTo: Components](https://github.com/GoogleChromeLabs/howto-components) repo provides example web component patterns focused on accessibility, performance, and progressive enhancement
- [Ana Cidre](https://twitter.com/AnaCidre_) and [Sherry List](https://twitter.com/sherrrylst) talk about [Web Component Architecture and Patterns](https://www.youtube.com/watch?v=hdSz1EKjK10&feature=youtu.be) at the 2018 WeAreDevelopers conference.
- [Rob Dodson](https://twitter.com/rob_dodson) talks about [The Future of Accessibility for Custom Elements](https://robdodson.me/the-future-of-accessibility-for-custom-elements/).
- Want to impress your friends at a meetup? The Ionic team is sharing their [stencil elevator pitch deck](https://ionic-team.github.io/stencil-present/)!
- [lit-html](https://lit-html.polymer-project.org/)
- [The Future of Polymer](https://43081j.com/2018/08/future-of-polymer)
