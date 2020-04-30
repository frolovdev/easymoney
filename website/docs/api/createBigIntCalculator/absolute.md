---
id: absolute
title: absolute
hide_title: true
sidebar_label: absolute
---


# `absolute(value)`

#### Arguments

1. `value (bigint)` 

#### Returns

`number (bigint)`


**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.absolute(10n);
// => 10n

const result1 = calculator.absolute(-10n);
// => 10n

```