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

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if first value equals second
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createBigIntMoney({ amount: 150n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money3.greaterThan(money4);
// => true

```
