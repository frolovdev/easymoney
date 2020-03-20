---
id: greaterThan
title: greaterThan
hide_title: true
sidebar_label: greaterThan
---

# greaterThan

**Example**

```js

import { createBigIntMoney } from 'easy-money';

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