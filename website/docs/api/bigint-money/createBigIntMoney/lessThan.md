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

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less than second
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 150n, currency: 'USD' });

money3.lessThan(money4);
// => true

```
