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

`money` ([MoneyBase](Description.md#money))


**Example**

```js

import { createMoney } from '@easymoney/money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getCurrency();
// -> "USD"

```
