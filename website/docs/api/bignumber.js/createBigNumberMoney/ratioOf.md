---
id: ratioOf
title: ratioOf
hide_title: true
sidebar_label: ratioOf
---

# ratioOf

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "10000000000000000000000000000", currency: 'RUB' });

const money1 = createBigNumberMoney({ amount: "200000000000000", currency: 'RUB' });

const result = money.ratioOf(money1);
// => "50000000000000"

```