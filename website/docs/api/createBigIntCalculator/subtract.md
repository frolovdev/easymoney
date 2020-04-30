---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---


# `subtract(amount,subtrahend)`

#### Arguments

1. `amount (bigint)` 
2. `subtrahend (bigint)`

#### Returns

`number (bigint)`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.subtract(40n, 5n);
// => 35n

const result1 = calculator.add(1n, 1n);
// => 0n

```