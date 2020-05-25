---
id: lessThan
title: lessThan
hide_title: true
sidebar_label: lessThan
---

# `lessThan(money)`

#### Description

Compares whether the first Money object is less than the second.

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

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 150, currency: 'USD' });

money3.lessThan(money4);
// => true

```
