---
id: absolute
title: absolute
hide_title: true
sidebar_label: absolute
---


# `absolute(number)`

#### Arguments

1. `number (string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.absolute('2');
// => "2"

const result1 = calculator.absolute('-2');
// => "2"

```