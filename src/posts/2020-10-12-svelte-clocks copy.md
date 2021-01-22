---
title: Svelte Clocks
description: An ongoing creative coding project, inspired by John Maeda’s 12 o’clocks. Each clock is unique and developed with various techniques such as SVG, Canvas, and HTML.
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

[Svelte Clocks]({{project.href}}) is an ongoing creative coding project, inspired by John Maeda’s [12 o’clocks](https://vimeo.com/198494458). Each clock is unique and developed with various techniques such as SVG, Canvas, and HTML.

Got a second? Check the time at [Svelte Clocks]({{project.href}})!

## Background

I enjoy watching programming videos on YouTube, and one day, I stumbled across [The Coding Train](https://www.youtube.com/user/shiffman) by [Daniel Shiffman](https://twitter.com/shiffman), where he uses P5.js to create a clock.

<div class="video__wrapper">
<iframe width="100%" src="https://www.youtube-nocookie.com/embed/E4RyStef-gY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Daniel explains in the introduction that showing time is a great way to exercise creativity and practice programming graphics and animations.

While P5.js is an excellent tool and makes working with graphics easy, I wanted to use a slightly different approach that would allow me to work directly with SVG, Canvas, and HTML Elements.

So I used the [SVG Clock example](https://svelte.dev/examples#clock) on the Svelte documentation site as a starting point and started making clocks!

## Tech Approach

<!-- Explain in detail: subject, object, verb. -->

Each clock uses time data that I’ve imported from a Svelte store. This data is the only thing shared across the clocks, and all other features are local to each clock.

Since most clock designs are circular, I’ve had to rely on what I learned in high school geometry to calculate angles.

For one clock that shows sunrise and sunset data, I’m calling a weather API and plotting those values in such a way that results in a pie-chart-like presentation.

Lastly, I developed animations with the following techniques:

- DOM traversal and class toggling on HTML Elements
- SVG animation via CSS custom properties
- drawing with Canvas
- making reactive text with Svelte

## Conclusion

<!-- What was the outcome? Why did it matter? -->

I’ve learned a lot about data manipulation, time, and programming visualizations. Every time I start a new clock, I find exciting challenges and opportunities to learn more!

My next clock will be a “flip” clock where each number appears based on the flipper elements’ rotation. This clock is already taking me deep into the 3D world of CSS, and I’m looking forward to sharing!

Got some time? Have a look at [Svelte Clocks]({{project.href}})!
