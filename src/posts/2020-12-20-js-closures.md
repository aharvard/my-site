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

## What are Closures?

Closures allow a child function to access variables from higher-level scope even after the parent function has already been called or "closed" over.

Another way of thinking about closures is that they encapsulate scope and functionality into a single function call. This keeps the global scope clean and optimizes for reusability.

For example, let's make a `counter()` function that helps us count things:

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

Notice how the `count` variable is not shared between `step()` and `jump()`. Calling `step()` does not affect the `jump()` count.

Since `let count = 0` is contained in the scope of `counter()`, we can declare scope globally, or locally in another function, and it would not conflict.

Further, since `let count = 0` is contained in the `counter()` scope, we could declare a new variable called `count` globally or locally in another function, and it would not conflict.
