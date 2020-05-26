---
id: lessThanOrEqual
title: lessThanOrEqual
hide_title: true
sidebar_label: lessThanOrEqual
---

# `lessThanOrEqual(money)`

#### Description

You can also use lessThanOrEqual() to additionally check for equality.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 150, currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```
