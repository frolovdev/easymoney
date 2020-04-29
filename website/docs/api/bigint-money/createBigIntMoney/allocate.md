---
id: allocate
title: allocate
hide_title: true
sidebar_label: allocate
---

# `allocate(ratios)`

#### Arguments

1. `ratios (Array<number>)`

#### Returns

`Array` ([BigIntMoneyBase](Description.md#bigintmoneybase))

**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 100n, currency: 'RUB' });
const money1 = createBigIntMoney({ amount: 101n, currency: 'USD' });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);

allocated.map((result) => result.getAmount());
// => 34n, 33n, 33n

allocated1.map((result) => result.getAmount());
// => 34n, 34n, 33n

//if allocate for negative values
const moneyNegative = createBigIntMoney({ amount: -5n, currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([7, 3]);

allocatedNegative.map((result) => result.getAmount());
// => -3n, -2n

```