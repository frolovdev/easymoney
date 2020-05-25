---
id: equals
title: equals
hide_title: true
sidebar_label: equals
---

# `equals(money)`

#### Description

Compares whether two Money objects are equal in value and currency.

#### Arguments

1. `money` ([BigIntMoneyBase](Description.md#bigintmoneybase))

#### Returns

`boolean`


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

//if money objects are equal
const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money4 = createBigIntMoney({ amount: 100n, currency: 'RUB' });

money3.equals(money4);
// => false

```
