---
id: isSameCurrency
title: isSameCurrency
hide_title: true
sidebar_label: isSameCurrency
---

# isSameCurrency

#### Description

Compares whether two Money objects have the same currency.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if currencies are same
const money = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: 200, currency: 'USD' });

money.isSameCurrency(money2);
// => true

//if currencies arent same
const money3 = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: 200, currency: 'RUB' });

money3.isSameCurrency(money4);
// => false

```
