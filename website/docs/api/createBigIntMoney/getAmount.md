---
id: getAmount
title: getAmount
hide_title: true
sidebar_label: getAmount
---

# getAmount

**Example**

```js

import { createBigIntMoney } from 'easy-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getAmount();
// => 100n

```