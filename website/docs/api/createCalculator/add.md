---
id: add
title: add
hide_title: true
sidebar_label: add
---

# `add(amount, addend)`

#### Arguments

1. `amount (string)` 
2. `addend (string)` 

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.add('1', '1');
// => "2"

const result1 = calculator.add('10', '5');
// => "15"

```