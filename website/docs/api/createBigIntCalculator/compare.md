---
id: compare
title: API Reference
hide_title: true
sidebar_label: compare
---

# compare

**Example**

```js

import { createBigIntCalculator } from 'easy-money';

const calculator = createBigIntCalculator();

const result = calculator.compare(0n, 1n);
// => -1

const result1 = calculator.compare(1n, 0n);
// => 1

const result2 = calculator.compare(1n, 1n);
// => 0

```