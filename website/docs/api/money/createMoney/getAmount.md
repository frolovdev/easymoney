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

import { createMoney } from '@easymoney/money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getAmount();
// => "100"

```
