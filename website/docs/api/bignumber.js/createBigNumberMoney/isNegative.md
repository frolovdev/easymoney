---
id: isNegative
title: isNegative
hide_title: true
sidebar_label: isNegative
---

# isNegative

#### Description

Returns true if amount is negative.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

money.isNegative();
// => false

//if amount value is negative
const money1 = createBigNumberMoney({ amount: "-999888777666555444333222111", currency: 'USD' });

money1.isNegative();
// => true

```
