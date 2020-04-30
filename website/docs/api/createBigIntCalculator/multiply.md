---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---


# `multiply(amount,divisor,roundingMode)`

#### Arguments

1. `amount` (number | string | bigint)
2. `divisor`
3. `roundingMode` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`number (bigint)`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.multiply(10n, 2n, 'HALF_EVEN');
// => 20n

const result5 = calculator.multiply(10n, -0.02, 'HALF_UP');
// => 0n

const result10 = calculator.multiply(10n, -0.55, 'FLOOR');
// => -6n

```