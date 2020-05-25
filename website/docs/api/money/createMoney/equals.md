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

1. `money` ([MoneyBase](Description.md#moneybase))

#### Returns

`boolean`


**Example**

```js

import { createMoney } from '@easymoney/money';

//if money objects are equal
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'RUB' });

money3.equals(money4);
// => false

```
