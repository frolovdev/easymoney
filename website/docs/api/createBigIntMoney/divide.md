---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---

# divide

**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// ->20n

result2.getAmount();
// ->200n

```