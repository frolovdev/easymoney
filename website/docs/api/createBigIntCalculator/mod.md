---
id: mod
title: mod
hide_title: true
sidebar_label: mod
---

# mod

**Example**

```js

import { createBigIntCalculator } from 'easy-money';

const calculator = createBigIntCalculator();

const result = calculator.mod(3n, 2n);
// => 1n

const result1 = calculator.mod(9n, 3n);
// => 0n

```