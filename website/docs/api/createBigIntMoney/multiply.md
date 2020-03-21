---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---

# multiply

**Example**

```js

import { createBigIntMoney } from 'easy-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => 600n

```