---
id: getCurrency
title: getCurrency
hide_title: true
sidebar_label: getCurrency
---


# `getCurrency()`

#### Description

Returns currency of Money object.

#### Returns

`money` ([Money](Description.md#money))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getCurrency();
// => "USD"

```
