---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---


# `multiply(money,roundingMode?)`

#### Arguments

1. `money` (number | string | bigint)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([BigIntMoneyBase](Description.md#bigintmoneybase))


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => 600n

```