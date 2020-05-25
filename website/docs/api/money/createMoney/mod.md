---
id: mod
title: mod
hide_title: true
sidebar_label: mod
---


# `mod(money)`

#### Description

Modulus operations can be performed using mod().


#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 200, currency: 'USD' });

const money3 = createMoney({ amount: 100, currency: 'USD' });

const result = money.mod(money2);

const result1 = money.mod(money2).mod(money3);

result.getAmount();
// => "100"

result1.getAmount();
// => "0"

```
