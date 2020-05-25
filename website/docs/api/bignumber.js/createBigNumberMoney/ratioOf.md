---
id: ratioOf
title: ratioOf
hide_title: true
sidebar_label: ratioOf
---

# ratioOf

#### Description

ratioOf() provides the ratio of a Money object in comparison to another Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "10000000000000000000000000000", currency: 'RUB' });

const money1 = createBigNumberMoney({ amount: "200000000000000", currency: 'RUB' });

const result = money.ratioOf(money1);
// => "50000000000000"

```
