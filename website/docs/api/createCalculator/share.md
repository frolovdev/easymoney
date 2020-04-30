---
id: share
title: share
hide_title: true
sidebar_label: share
---


# `share(amount, divisor)`

#### Arguments

1. `amount: (string)`,
2. `ratio: (number | string)`
3. `total: (number | string)`

#### Returns

`string`


**Example**

```js

import { createCalculator } from '@easymoney/money';

const calculator = createCalculator();

const result = calculator.share('10', 2, 4);
// => "5"

```