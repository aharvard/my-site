---
title: Critique Cards
cta: Check it out!
href: https://critique-cards.netlify.app/
description: I got inspired to make a digital tool that helps with design critiques for distributed teams. This project gave me a great excuse to learn Svelte and practice JavaScript fundamentals.

minHeight: 70vh
tags:
  - post
  - project
topics:
  - svelte
---

I got inspired to make a digital tool that helps with design critiques for distributed teams. This project gave me a great excuse to learn Svelte and practice JavaScript fundamentals.

Check out [Critique Cards](https://critique-cards.netlify.app/)!

## Background

I was looking for an opportunity to build a simple web app with [Svelte](/) when inspiration struck.

I work on a remote UX team at Regions, distributed across multiple states and timezones in the US. A few times a year, we travel to Birmingham, AL, for in-person planning events. While at one of these events, a coworker handed me a deck of Critique Cards. Instead of a traditional deck of playing cards, each card had a specific question to help facilitate design critique, designed by [Mikey Allan](/).

I thought these cards were excellent and that they would be a lot of fun to use in future crits. However, it would be challenging to have a shared experience around a physical deck of cards as a fully remote team. To solve this issue, I wanted to make a digital version of this deck of cards.

This was the perfect opportunity to learn Svelte and practice JavaScript fundamentals. I set out to replicate the card deck with the following functionality:

- Users can draw one card at a time
- Users can shuffle all cards at any point in time
- Users must be able to draw all cards from the deck multiple times

## Technical

The [Critque Cards website](critique-cards.netlify.app/) is built with [Svelte](/) and hosted on Netlify.

Svelte is a framework that builds optimized JavaScript, which affords fast load times and highly reactive experiences.

The card content is provided with an array of objects, and the deck state is tracked with two arrays: `undrawnCards` & `drawnCards`.

On load, and whenever shuffled, the objects/cards are randomly sorted and dumped into the `undrawnCards` array.

Each time a card is drawn, a property on the card object is modified. That value is then used to determine if the object/card should exist in the `undrawnCards` or `drawnCards` array. Whenever these two arrays are modified, magic happens thanks to Svelte:

- `undrawnCards` keeps track of when the deck is spent and will alter the experience when the last card is drawn.

- Whenever an object/card is added to the `drawnCards` array, Svelte injects that new card into the DOM.

All animations are done with CSS. When new elements with the proper classes are injected into the DOM, the keyframe-based animations immediately play.

The flip effect is achieved by "unwinding" the card's transformed state. When a card is drawn, the card that's about to be flipped shows up on top of the deck's undrawn pile, facing backward and translated to its start location. The animation then rotates and slides the card to the drawn pile while, at the same time, z-index is manipulated to help with multiple rapid-fire draws.

If you want to see more, you can view [the source code](/).

## Conclusion

I had a lot of fun with this project and learned some new tricks. For example, I learned about the difference between referencing versus copying an existing array in JavaScript.

Initially, I could only draw each card from the deck once. I was unable to shuffle and start over. It was like every time I was drawing a card, I was throwing it into the trash. I discovered that I was mutating, or changing, the original card data array each time I drew a card.

To fix the problem, I discovered that I was making reference to the original card data array instead of copying, or cloning, the original array's values. Fixing this issue enabled all cards to be drawn from a deck once and redrawn multiple times.

So, next time you're unsure how to ask for design feedback or need help providing constructive criticism in a design review, draw a card, and start a discussion — heck, you can even use these cards to critique your own work.
