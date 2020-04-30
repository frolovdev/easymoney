---
id: compare
title: compare
hide_title: true
sidebar_label: compare
---


# `compare(a, b)`

#### Arguments

1. `a (string)` 
2. `b (string)` 

#### Returns

`-1 | 1 | 0`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.compare('0', '1');
// => "-1"

const result1 = calculator.compare('0.005', '1');
// => "-1"

const result2 = calculator.compare('1', '0.000000000005');
// => "1"

const result3 = calculator.compare('1', '1');
// => "0"

const result4 = calculator.compare('1000', '1000');
// => "0"

```