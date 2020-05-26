---
id: add
title: add
hide_title: true
sidebar_label: add
---

# `add(money)`

#### Description

Additions can be performed using add().

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`money` ([MoneyBase](Description.md#moneybase))

#### Example

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "111222333344445566677889999", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => "111122223333444455556666777788890099"


```
