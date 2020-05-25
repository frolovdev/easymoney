---
id: isPositive
title: isPositive
hide_title: true
sidebar_label: isPositive
---

# isPositive

#### Description

Returns true if amount is positive.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt positive
const money1 = createBigNumberMoney({ amount: "-999888777666555444333222111", currency: 'USD' });

money1.isPositive();
// => false

```
