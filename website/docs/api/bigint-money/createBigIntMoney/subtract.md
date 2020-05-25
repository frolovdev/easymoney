---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---


# `subtract(money)`

#### Description

Subtractions can be performed using subtract().

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 101n, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => -1n

```
