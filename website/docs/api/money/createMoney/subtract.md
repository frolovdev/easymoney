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

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 101, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => "-1"

```
