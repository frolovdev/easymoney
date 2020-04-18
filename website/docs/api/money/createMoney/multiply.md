---
id: multiply
title: multiply
hide_title: true
sidebar_label: multiply
---

# multiply

**Example**

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currentcy: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "600"

```