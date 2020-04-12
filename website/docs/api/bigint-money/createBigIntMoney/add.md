---
id: add
title: add
hide_title: true
sidebar_label: add
---

# add

**Example**

```js

import { createBigIntMoney } from "@easymoney/bigint-money";

const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

const result = money.add(money2);

result.getAmount();
// => 200n

```