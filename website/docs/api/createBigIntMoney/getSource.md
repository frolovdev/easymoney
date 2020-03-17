---
id: getSource
title: API Reference
hide_title: true
sidebar_label: getSource
---

# getSource

**Example**

```js

import { createBigIntMoney } from 'easy-money';

const result1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

result1.getSource();
// => 100n

```