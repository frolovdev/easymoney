---
id: allocate
title: allocate
hide_title: true
sidebar_label: allocate
---

# allocate

#### Description

Allocate by Ratios

My company made a whopping profit of 5 cents, which has to be divided amongst myself (70%) and my investor (30%). Cents can’t be divided, so I can’t give 3.5 and 1.5 cents. If I round up, I get 4 cents, the investor gets 2, which means I need to conjure up an additional cent. Rounding down to 3 and 1 cent leaves me 1 cent. Apart from re-investing that cent in the company, the best solution is to keep handing out the remainder until all money is spent.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: 150, currency: 'RUB' });
const money1 = createBigNumberMoney({ amount: "123456789123456789123456788", currency: 'USD' });
const money2 = createBigNumberMoney({ amount: 1, currency: 'USD' });

const allocated = money.allocate([3, 4, 3]);
const allocated1 = money1.allocate([1, 1, 1]);
const allocated2 = money2.allocate([0.33, 0.66]);

allocated.map((result) => result.getAmount());
// => "45", "60", "45"

allocated1.map((result) => result.getAmount());
// => "41152263041152263041152264", "41152263041152263041152262","41152263041152263041152262"    

allocated2.map((result) => result.getAmount());
// => "0", "1"

//if allocate for negative values
const moneyNegative = createBigNumberMoney({ amount: "-8831487109640372124", currency: 'RUB' });

const allocatedNegative = moneyNegative.allocate([2, 7]);

allocatedNegative.map((result) => result.getAmount());
// => "-1962552691031193805", "-6868934418609178319"

```
