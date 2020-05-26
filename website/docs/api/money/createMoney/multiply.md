---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---

# `multiply(money,roundingMode?)`

#### Description

Multiplications can be performed using multiply().

#### Arguments

1. `money` (number | string)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([BigIntMoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currentcy: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "600"

```
