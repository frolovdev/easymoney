---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---

# subtract

#### Description

Subtractions can be performed using subtract().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "222888833337777444466665555", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "222888833337777444466665556", currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => "-1"

```
