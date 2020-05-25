---
id: lessThanOrEqual
title: lessThanOrEqual
hide_title: true
sidebar_label: lessThanOrEqual
---

# lessThanOrEqual

#### Description

You can also use lessThanOrEqual() to additionally check for equality.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createBigNumberMoney({ amount: "111999222888333777444666555", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "9999991119992228883377446655", currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```
