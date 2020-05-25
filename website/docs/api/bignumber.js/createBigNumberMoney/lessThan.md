---
id: lessThan
title: lessThan
hide_title: true
sidebar_label: lessThan
---

# lessThan

#### Description

Compares whether the first Money object is less than the second.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "99999111999222888333444666555", currency: 'USD' });

money3.lessThan(money4);
// => true

```
