---
id: ceil
title: ceil
hide_title: true
sidebar_label: ceil
---

# `ceil(number)`

#### Arguments

1. `number (string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.ceil('1.2');
// => "2"

const result1 = calculator.ceil('-1.2');
// => "-1"

const result2 = calculator.ceil('2.0');
// => "2"

```