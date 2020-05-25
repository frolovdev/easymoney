---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---

# `divide(money,roundingMode?)`

#### Description

Divisions can be performed using divide().

#### Arguments

1. `money` (number | string)
2. `roundingMode?` ([RoundingModesType](Description.md#roundingmodestype))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// => "20"

result2.getAmount();
// => "200"

```
