---
title: Closures
description: Closures allow a child function to access variables from higher-level scope even after the parent function has already been called or "closed" over.

tags:
  - post
  - code
topics:
  - tip
  - JavaScript
project:
  href: https://svelte-clocks.netlify.app/
---

## What is a Closure?

A closure is a programming concept where a child function has access to variables from higher-level scope even after the parent function has already been called or "closed" over.

Another way of thinking about closures is that they encapsulate scope and functionality into a single function call. This keeps the global scope clean and makes the function reusable.

To illustrate the concept, let's make a `counter()` function:

```jsx
function counter(name) {
  let count = 0;
  return function () {
    count++;
    return `The ${name} count is ${count}`;
  };
}
```

Next, let's use `counter()` to help us count steps and jumps:

```jsx
const step = counter('steps');
const jump = counter('jumps');
```

Each time we call `step()` and `jump()`, their respective `count` increments by one:

```jsx
step();
// The steps count is 1

step();
// The steps count is 2

jump();
// The jumps count is 1

step();
// The steps count is 3

jump();
// The jumps count is 2
```

Notice that calling `step()` doesn't affect the `jump()` count and that `jump()` doesn't affect the `step()` count.

Additionally, because `count` is bound to the lexical scope of `counter()`, we can declare `count` as a variable globally or locally without conflicts.
