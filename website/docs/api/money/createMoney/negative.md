---
id: negative
title: negative
hide_title: true
sidebar_label: negative
---


# `negative()`

#### Returns

`money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const result = money.negative();
// => "-100"

```