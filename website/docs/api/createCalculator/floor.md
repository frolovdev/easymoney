---
id: floor
title: floor
hide_title: true
sidebar_label: floor
---

# `floor(number)`

#### Arguments

1. `number (string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.floor('2.7');
// => "2"

const result1 = calculator.floor('-2.7');
// => "-3"

const result2 = calculator.floor('2.0');
// => "2"

```