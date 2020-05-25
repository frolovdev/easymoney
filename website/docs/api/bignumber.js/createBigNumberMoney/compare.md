---
id: compare
title: compare
hide_title: true
sidebar_label: compare
---

# compare

#### Description

Compares two Money objects.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "1119992228883337774444666555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "1119992228883337774444666555", currency: 'USD' });

money.compare(money2);
// => 0

```
