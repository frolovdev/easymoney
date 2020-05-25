---
id: compare
title: compare
hide_title: true
sidebar_label: compare
---

# compare(money)

#### Description

Compares two Money objects.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`1 | 0 | -1`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.compare(money2);
// => 0


```
