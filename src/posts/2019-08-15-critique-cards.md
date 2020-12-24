---
title: Critique Cards
cta: Check it out!
href: https://critique-cards.netlify.app/
description: Design critiques can be challenging. Next time you're not sure how to ask for feedback or need help guiding a design review, draw a card and start a discussion!
minHeight: 70vh
tags:
  - post
  - project
topics:
  - svelte
---

Design critiques can be challenging. Next time you're unsure how to ask for design feedback or need help providing constructive criticism in a design review, draw a card, and start a discussion — heck, you can even use these cards to critique your own work.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I got inspired by <a href="https://twitter.com/mhjallan?ref_src=twsrc%5Etfw">@mhjallan</a>&#39;s Critique Cards and made a digital version using <a href="https://twitter.com/sveltejs?ref_src=twsrc%5Etfw">@sveltejs</a>, <a href="https://twitter.com/Netlify?ref_src=twsrc%5Etfw">@Netlify</a>, and <a href="https://twitter.com/hashtag/StreamLineIcons?src=hash&amp;ref_src=twsrc%5Etfw">#StreamLineIcons</a> 🚀<a href="https://t.co/Cbv0xL3g3e">https://t.co/Cbv0xL3g3e</a></p>&mdash; Andrew Harvard (@aharvard) <a href="https://twitter.com/aharvard/status/1167238583847182336?ref_src=twsrc%5Etfw">August 30, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Critique Cards as a Website

I learned about Critique Cards from a coworker when she brought a couple of card decks to an in-person planning event at work. She explained how Mikey provides a PDF online and allows anyone to take the file and print a card deck of their own.

I immediately thought that these cards looked great and could be an excellent tool for design crits. However, as a distributed and remote team, having a shared experience around a physical deck of cards would be challenging.

To solve the remote collaboration issue, I thought it would be a lot of fun to make a website.

## The Tech

[critique-cards.netlify.app/](https://critique-cards.netlify.app/) is a static site built with Svelte and hosted on Netlify.

Svelte is a framework that builds optimized JavaScript which affords fast load times and highly reactive experiences.

The card content is provided with an array of objects, and the deck state is tracked with two arrays: `undrawnCards` & `drawnCards`.

On load, and whenever shuffled, the objects/cards are randomly sorted and dumped into the `undrawnCards` array.

Each time a card is drawn, a property on the card object is modified. That value is then used to determine if the object/card should exist in the `undrawnCards` or `drawnCards` array. Whenever these two arrays are modified, magic happens thanks to Svelte:

- `undrawnCards` keeps track of when the deck is spent and will alter the experience when the last card is drawn.

- Whenever an object/card is added to the `drawnCards` array, Svelte injects that new card into the DOM.

All animations are done with CSS. When new elements with the proper classes are injected into the DOM, the keyframe-based animations immediately play.

The flip effect is achieved by "unwinding" the card's transformed state. When a card is drawn, the card that's about to be flipped shows up on top of the deck's undrawn pile, facing backward and translated to its start location. The animation then rotates and slides the card to the drawn pile while, at the same time, z-index is manipulated to help with multiple rapid-fire draws.
