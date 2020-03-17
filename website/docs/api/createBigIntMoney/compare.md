---
id: compare
title: API Reference
hide_title: true
sidebar_label: compare
---

# compare

**Example**

```js

import { createBigIntMoney } from 'easy-money';

const money = createBigIntMoney({ amount: 100n, currency: 'USD' });

const money2 = createBigIntMoney({ amount: 100n, currency: 'USD' });

money.compare(money2);
// => 0


```