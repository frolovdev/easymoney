---
id: isNegative
title: isNegative
hide_title: true
sidebar_label: isNegative
---


# `isNegative()`

#### Description

Returns true if amount is negative.

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isNegative();
// => false

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isNegative();
// => true

```
