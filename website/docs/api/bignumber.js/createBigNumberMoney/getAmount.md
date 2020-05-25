---
id: getAmount
title: getAmount
hide_title: true
sidebar_label: getAmount
---

# getAmount

#### Description

Returns amount of Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const result1 = createBigNumberMoney({ amount: "1982376455467328918256798244", currency: 'USD' });

result1.getAmount();
// => "1982376455467328918256798244"

```
