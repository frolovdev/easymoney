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

`Array` <([MoneyBase](Description.md#moneybase))>


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'RUB' });
const money1 = createMoney({ amount: 101, currency: 'USD' });
const money2 = createMoney({ amount: 1, currency: 'USD' });

const allocated = money.allocate([1, 1, 1]);
const allocated1 = money1.allocate([1, 1, 1]);
const allocated2 = money2.allocate([0.33, 0.66]);

allocated.map((result) => result.getAmount());
// => "34", "33", "33"

allocated1.map((result) => result.getAmount());
// => "34", "34", "33"

allocated2.map((result) => result.getAmount());
// => "0", "1"

//if allocate for negative values
const moneyNegative = createMoney({ amount: -5, currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([3, 7]);

allocatedNegative.map((result) => result.getAmount());
// => "-2", "-3"

```