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

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```
