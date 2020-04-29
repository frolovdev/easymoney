---
id: isPositive
title: isPositive
hide_title: true
sidebar_label: isPositive
---


# `isPositive()`

#### Returns

1. `boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if amount value is zero
const money = createMoney({ amount: 100, currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt zero
const money1 = createMoney({ amount: -100, currency: 'USD' });

money1.isPositive();
// => false

```