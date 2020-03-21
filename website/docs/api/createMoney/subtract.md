---
id: subtract
title: subtract
hide_title: true
sidebar_label: subtract
---

# subtract

**Example**

```js

import { createMoney } from 'easy-money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 101, currency: 'USD' });

const result = money.subtract(money2);

result.getAmount();
// => "-1"

```