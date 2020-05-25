---
id: allocateTo
title: allocateTo
hide_title: true
sidebar_label: allocateTo
---


# `allocateTo(number)`

#### Description

Allocate to N targets
An amount of money can be allocated to N targets using allocateTo().

#### Arguments

1. `number (number)`

#### Returns

`Array` <([BigIntMoneyBase](Description.md#bigintmoneybase))>


**Example**

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money = createBigIntMoney({ amount: 15n, currency: 'RUB' });
const money1 = createBigIntMoney({ amount: 10n, currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => 8n, 7n

money1.allocateTo(3).map((result) => result.getAmount());
// => 4n, 3n, 3n

```
