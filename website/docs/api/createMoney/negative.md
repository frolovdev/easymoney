---
id: negative
title: negative
hide_title: true
sidebar_label: negative
---

# negative

**Example**

```js

import { createMoney } from 'easy-money';

const money = createMoney({ amount: 100, currency: 'USD' });

const result = money.negative();
// => "-100"

```