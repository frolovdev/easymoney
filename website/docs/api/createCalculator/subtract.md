---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---


# `subtract(amount, divisor)`

#### Arguments

1. `amount (string)` 
2. `subtrahend (string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.subtract('1', '1');
// => "0"

const result1 = calculator.subtract('10', '5');
// => "5"

```