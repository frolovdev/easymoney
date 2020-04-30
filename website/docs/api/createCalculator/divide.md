---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---


# `divide(amount, divisor)`

#### Arguments

1. `amount (string)` 
2. `divisor (number | string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.divide('100', 25);
// => "4"

const result1 = calculator.divide('2', 4);
// => "0.5"

const result2 = calculator.divide('98', 25);
// => "3.92"

const result3 = calculator.divide('181', 17);
// => "10.64705882352941"

```