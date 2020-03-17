---
id: equals
title: API Reference
hide_title: true
sidebar_label: equals
---

# equals

**Example**

```js

import { createBigIntMoney } from 'easy-money';

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