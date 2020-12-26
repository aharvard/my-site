---
title: Closures
description: JS reminder about what closuers are
tags:
  - post
  - code
topics:
  - JavaScript
project:
  href: https://svelte-clocks.netlify.app/
---

## Closures

In JavaScript, functions can return values and also other functions.

`Closures` allow a child function to access variables from higher-level scope even after the functions have already been called or "closed" over.

For example, let's make a `counter()` function that helps us keep track of how many `jumps` and `steps` we make:

```jsx
function counter(name) {
  let count = 0;
  return function plusOne() {
    count++;
    return `The ${name} count is now ${count}`;
  };
}

const step = counter('steps');
const jump = counter('jump');

step(); // "The count is now 1"
step(); // "The count is now 2"
step(); // "The count is now 3"

jump(); // "The count is now 1"

step(); // "The count is now 4"
```
