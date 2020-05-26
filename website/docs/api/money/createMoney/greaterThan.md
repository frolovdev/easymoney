---
id: greaterThan
title: greaterThan
hide_title: true
sidebar_label: greaterThan
---

# `greaterThan(money)`

#### Description

Compares whether the first Money object is larger than the second.

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

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createMoney({ amount: 150, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'USD' });

money3.greaterThan(money4);
// => true

```
