---
id: isZero
title: isZero
hide_title: true
sidebar_label: isZero
---

# isZero

#### Description

Returns true if amount is equals zero.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is zero
const money = createBigNumberMoney({ amount: "0", currency: 'USD' });

money.isZero();
// => true

//if amount value isnt zero
const money1 = createBigNumberMoney({ amount: "1111222233334444555566667777", currency: 'USD' });

money1.isZero();
// => false

```
