---
id: compare
title: compare
hide_title: true
sidebar_label: compare
---

# `compare(a,b)`

#### Arguments

1. `a (number)`
2. `b (number)`

#### Returns

`-1 | 1 | 0`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.compare(0n, 1n);
// => -1

const result1 = calculator.compare(1n, 0n);
// => 1

const result2 = calculator.compare(1n, 1n);
// => 0

```