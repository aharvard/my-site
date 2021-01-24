---
title: Critique Cards
description: I got inspired to make a digital tool that helps with design critiques for distributed teams. This project gave me a great excuse to learn Svelte and practice JavaScript fundamentals.
tags:
  - post
  - project
topics:
  - svelte
project:
  cta: Check it out!
  href: https://critique-cards.netlify.app/
---

I got inspired to make a digital version of a physical tool that helps with design critiques, geared towards distributed design teams. This project gave me a great excuse to learn [Svelte](https://svelte.dev/) and practice JavaScript fundamentals.

Check out [Critique Cards]({{project.href}})!

<iframe class="project-iframe" src="https://critique-cards.netlify.app/" title="Critique cards website" width="100%" height="800px"></iframe>

## Background

I work on a remote UX team at Regions, distributed across multiple states and timezones in the US. A few times a year, we travel to Birmingham, AL, for in-person planning events.

While at one of these events, a coworker handed me a deck of “Critique Cards.” Each card had a specific question to help facilitate design critique.

She had printed her deck from a file provided by the designer of Critique Cards, Mikey Allan. You can read about [his background and project approach](https://mikeyallan.com/work/critique-cards) on his website. Really great work!

I thought the cards were excellent and that they would be a lot of fun to use in future crits. However, it would be challenging to have a shared experience around a physical deck of cards as a fully remote team.

To solve this issue, I wanted to make a digital version of this deck of cards. I set out to replicate the card deck with the following functionality:

- Users can draw one card at a time
- Users can shuffle all cards at any point in time
- Users must be able to draw all cards from the deck and reset/shuffle as many times as they want

Making this physical experience digital was the perfect opportunity to learn Svelte and practice JavaScript fundamentals.

## Technical Approach

The [Critique Cards website](critique-cards.netlify.app/) is built with [Svelte](https://svelte.dev/) and hosted on [Netlify](https://www.netlify.com/).

Svelte is a JavaScript framework that compiles optimized code at build time, which affords fast load times and highly reactive experiences.

Each card’s content is stored in an array of objects, and the deck state is tracked with the `undrawnCards` and `drawnCards` arrays.

On load, and whenever shuffled, the card objects are randomly sorted and dumped into the `undrawnCards` array. Disclaimer: the sort is not entirely random, but good enough for a deck of cards!

Each time a card is drawn, a property on the card object is modified. That value is used to determine if the card should exist in the `undrawnCards` or `drawnCards` array.

Whenever a card is added to the `drawnCards` array, Svelte injects that new card into the DOM, and the animations begin.

All animations are done with CSS. When new elements are injected into the DOM, the keyframe-based animations immediately play.

The flip effect is achieved by “unwinding” the card’s transformed state. When a card is drawn, the card that’s about to be flipped shows up on top of the deck’s undrawn pile, facing backward and transformed to its face-down location. The animation then rotates and slides the card to the drawn pile. During that transition, the z-index is manipulated to keep the flipping card on top, which helps with multiple rapid-fire draws.

If you want to see more behind the scenes, you can view [the source code](https://github.com/aharvard/crit-cards).

## Conclusion

I had a lot of fun with this project, and it cemented some fundamental JavaScript programming concepts.

For example, I learned about the difference between making reference to an existing array versus making a clone or copying that array.

Initially, I could only draw a card from the deck once, and I was unable to shuffle and start over with a full deck of cards. It was like every time I drew a card; I threw it into the trash.

I realized that I was mutating, or changing, the original card data array each time I drew a card. To fix the problem, I updated the code to make a new array by cloning the data from the original array instead of making reference to it. This new approach enabled all cards to be drawn from a deck once and redrawn multiple times.

So, next time you’re unsure how to ask for design feedback or need help providing constructive criticism in a design review, draw a card, and start a discussion — heck, you can even use these cards to critique your own work!

Draw a card at [Critique Cards]({{project.href}})!
