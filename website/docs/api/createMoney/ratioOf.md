---
id: ratioOf
title: API Reference
hide_title: true
sidebar_label: ratioOf
---

# ratioOf

**Example**

```js

import { createMoney } from 'easy-money';

const money = createMoney({ amount: 100, currency: 'RUB' });

const money1 = createMoney({ amount: 20, currency: 'RUB' });

const result = money.ratioOf(money1);
// => "5"

```