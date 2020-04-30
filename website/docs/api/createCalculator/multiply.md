---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---

# `multiply(amount, multiplier)`

#### Arguments

1. `amount (string)` 
2. `multiplier (number | string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.multiply('1', 1.5);
// => "1.5"

const result1 = calculator.multiply('10', 0.029);
// => "0.29"

```