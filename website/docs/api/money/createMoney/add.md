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

#### Throws

`TypeError` - throws if currencies aren't identical

`TypeError` - throws if result of arithmetic operation isn't an integer

#### Example

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => 200

```
