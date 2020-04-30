---
id: mod
title: mod
hide_title: true
sidebar_label: mod
---


# `mod(amount, divisor)`

#### Arguments

1. `amount (string)` 
2. `divisor (number | string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.mod('11', 5);
// => "1"

const result1 = calculator.mod('1006', 10);
// => "6"

const result2 = calculator.mod('-13', -5);
// => "-3"

const result3 = calculator.mod('9', 3);
// => "0"

```