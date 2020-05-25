---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---

# multiply

#### Description

Multiplications can be performed using multiply().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money1 = createBigNumberMoney({ amount: "77778888111133339999111", currency: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "466673328666800039994666"

```
