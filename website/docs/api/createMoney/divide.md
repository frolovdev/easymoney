---
id: divide
title: API Reference
hide_title: true
sidebar_label: divide
---

# divide

**Example**

```js

import { createMoney } from 'easy-money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// => "20"

result2.getAmount();
// => "200"

```