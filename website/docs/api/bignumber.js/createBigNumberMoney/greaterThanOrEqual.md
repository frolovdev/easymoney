---
id: greaterThanOrEqual
title: greaterThanOrEqual
hide_title: true
sidebar_label: greaterThanOrEqual
---

# greaterThanOrEqual

#### Description

You can also use greaterThanOrEqual() to additionally check for equality.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

money.greaterThanOrEqual(money2);
// => true

//if first value greater then second
const money3 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "100100100100100100100100", currency: 'USD' });

money3.greaterThanOrEqual(money4);
// => true

```
