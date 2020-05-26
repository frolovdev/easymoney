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

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`1 | 0 | -1`


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.compare(money2);
// => 0

```
