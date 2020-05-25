---
id: allocate
title: allocate
hide_title: true
sidebar_label: allocate
---

# `allocate(ratios)`

#### Description

Allocate by Ratios

My company made a whopping profit of 5 cents, which has to be divided amongst myself (70%) and my investor (30%). Cents can’t be divided, so I can’t give 3.5 and 1.5 cents. If I round up, I get 4 cents, the investor gets 2, which means I need to conjure up an additional cent. Rounding down to 3 and 1 cent leaves me 1 cent. Apart from re-investing that cent in the company, the best solution is to keep handing out the remainder until all money is spent.

#### Arguments

1. `ratios (Array<number>)`

#### Returns

`Array` <([BigIntMoneyBase](Description.md#bigintmoneybase))>


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
