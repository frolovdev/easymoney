---
id: greaterThan
title: greaterThan
hide_title: true
sidebar_label: greaterThan
---

# greaterThan

#### Description

Compares whether the first Money object is larger than the second.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

money.greaterThan(money2);
// => false

//if first value greater then second
const money3 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "100100100100100100100100", currency: 'USD' });

money3.greaterThan(money4);
// => true

```
