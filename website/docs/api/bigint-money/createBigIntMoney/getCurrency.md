---
id: getCurrency
title: getCurrency
hide_title: true
sidebar_label: getCurrency
---

# getCurrency

**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getCurrency();
// => "USD"

```