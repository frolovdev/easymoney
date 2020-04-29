---
id: getCurrency
title: getCurrency
hide_title: true
sidebar_label: getCurrency
---

# getCurrency

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ 
                    amount: "198237645546732891182567982244", 
                    currency: 'USD' });

result1.getCurrency();
// -> "USD"

```