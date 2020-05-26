---
id: ratioOf
title: ratioOf
hide_title: true
sidebar_label: ratioOf
---


# `ratioOf(money)`

#### Description

ratioOf() provides the ratio of a Money object in comparison to another Money object.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`string`


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'RUB' });

const money1 = createMoney({ amount: 20, currency: 'RUB' });

const result = money.ratioOf(money1);
// => "5"

```
