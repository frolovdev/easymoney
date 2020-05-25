---
id: mod
title: mod
hide_title: true
sidebar_label: mod
---

# mod

#### Description

Modulus operations can be performed using mod().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "111222333444555666777888999", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "222299991111133334444", currency: 'USD' });

const money3 = createBigNumberMoney({ amount: "90391877881222194699", currency: 'USD' });

const result = money.mod(money2);

const result1 = money.mod(money2).mod(money3);

result.getAmount();
// => "90391877881222194699"

result1.getAmount();
// => "0"

```
