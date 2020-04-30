---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---

# `divide(amount,divisor,roundingMode)`

#### Arguments

1. `amount (bigint)` 
2. `divisor`
3. `roundingMode` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`number`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result2 = calculator.divide(11n, -6n, 'HALF_EVEN');
// => -2n

const result7 = calculator.divide(10n, -4n, 'HALF_UP');
// => -3n

const result21 = calculator.divide(14n, -5n, 'UP');
// => -3n

```