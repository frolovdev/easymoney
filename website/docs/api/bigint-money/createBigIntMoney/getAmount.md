---
id: getAmount
title: getAmount
hide_title: true
sidebar_label: getAmount
---


# `getAmount()`

#### Description

Returns amount of Money object.

#### Returns

`money` ([Money](Description.md#money))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getAmount();
// => 100n

```
