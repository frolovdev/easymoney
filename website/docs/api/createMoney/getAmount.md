---
id: getAmount
title: API Reference
hide_title: true
sidebar_label: getAmount
---

# getAmount

**Example**

```js

import { createMoney } from 'easy-money';

const result1 = createMoney({ amount: 100, currency: 'USD' });

result1.getAmount();
// => "100"

```