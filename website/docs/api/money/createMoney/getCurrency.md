---
id: getCurrency
title: getCurrency
hide_title: true
sidebar_label: getCurrency
---

# getCurrency

**Example**

```js

import { createMoney } from '@easymoney/money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getCurrency();
// -> "USD"

```