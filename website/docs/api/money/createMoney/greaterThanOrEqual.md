---
id: greaterThanOrEqual
title: greaterThanOrEqual
hide_title: true
sidebar_label: greaterThanOrEqual
---


# `greaterThanOrEqual(money)`

#### Description

You can also use greaterThanOrEqual() to additionally check for equality.

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

money.greaterThanOrEqual(money2);
// => true

//if first value greater then second
const money3 = createMoney({ amount: 150, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true

```
