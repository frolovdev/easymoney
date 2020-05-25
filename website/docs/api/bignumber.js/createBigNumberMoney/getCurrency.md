---
id: getCurrency
title: getCurrency
hide_title: true
sidebar_label: getCurrency
---

# getCurrency

#### Description

Returns currency of Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ amount: "1982376455467328918256798244", currency: 'USD' });

result1.getCurrency();
// -> "USD"

```
