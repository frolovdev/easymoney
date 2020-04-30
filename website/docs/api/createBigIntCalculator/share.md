---
id: share
title: share
hide_title: true
sidebar_label: share
---


# `share(amount,ratio,total)`

#### Arguments

1. `amount (bigint)` 
2. `divisor (bigint)`
3. `total (bigint)`

#### Returns

`number (bigint)`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.share(100n, 1n, 3n);
// => 33n

```