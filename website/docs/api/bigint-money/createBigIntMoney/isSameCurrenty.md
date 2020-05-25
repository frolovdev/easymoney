---
id: isSameCurrency
title: isSameCurrency
hide_title: true
sidebar_label: isSameCurrency
---


# `isSameCurrency(money)`

#### Description

Compares whether two Money objects have the same currency.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if currencies are same
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 200n, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 200n, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false

```
