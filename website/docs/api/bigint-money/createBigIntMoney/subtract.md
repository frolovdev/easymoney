---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---

# subtract

**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 101n, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => -1n

```