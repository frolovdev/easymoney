---
id: getAmount
title: getAmount
hide_title: true
sidebar_label: getAmount
---

# getAmount

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ 
                    amount: "198237645546732891182567982244", 
                    currency: 'USD' });

result1.getAmount();
// => "198237645546732891182567982244"

```