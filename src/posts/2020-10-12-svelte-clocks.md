---
title: Svelte Clocks
description: Lorem ipsum set dolar!
minHeight: 70vh
tags:
  - post
  - project
topics:
  - svelte
  - creative coding
project:
  href: https://svelte-clocks.netlify.app/
---

## Intro

<!-- What are the valuable skills and experience I have to show off? Two sentences. -->

[Svelte Clocks]({{project.href}}) is an ongoing creative coding project, inspired by John Maeda’s [12 o'clocks](https://vimeo.com/198494458). Each clock is unique and developed with various techniques such as SVG, Canvas, and HTML.

Have a look at [Svelte Clocks]({{project.href}})!

## Background

I enjoy watching programming videos on YouTube, and one day, I stumbled across [The Coding Train](https://www.youtube.com/user/shiffman) by [Daniel Shiffman](https://twitter.com/shiffman). In the below video, he uses using P5.js to create a clock.

Daniel explains in the introduction that showing time is a great way to exercise creativity and practice programming graphics and animations.

<div class="video__wrapper">
<iframe width="100%" src="https://www.youtube-nocookie.com/embed/E4RyStef-gY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

While P5.js is excellent and makes working with graphics easy, I wanted to use a slightly different approach that would allow me to work directly with SVG, Canvas, and HTML Elements.

So I used the [SVG Clock example](https://svelte.dev/examples#clock) on the Svelte documentation site as a starting point and started making clocks!

## Tech Approach

<!-- Explain in detail: subject, object, verb. -->

Each clock uses time data that is imported from a Svelte store. My thinking here is defining a single source of truth for all clocks to count from. This data is the only thing shared across the clocks. All other aspects are local to each clock.

I have used a variety of graphics and animation techniques.

- DOM traversal and manipulation, like adding and removing classes on HTML Elements
- SVG animation via CSS custom properties
- Drawing and animating complex graphics with Canvas
- Making reactive text with Svelte

For any clock that relies on a circle shape, I had to perform a lot of geometry to calculate angles based on time.

For one clock, I am calling a weather API to get the sunrise and sunset time data. Then once I have those values, I can plot those times on a circle. The result looks like a pie chart.

## Conclusion

<!-- What was the outcome? Why did it matter? -->

While this project is still ongoing, I have learned a lot about data manipulation and programming visualizations.

Every time I start a new clock, I find exciting challenges. For example, my next clock will be a "flip" clock where each number appears based on the flipper elements' rotation. This clock is already taking me deep into the 3D world of CSS, and I am really looking forward to sharing!
