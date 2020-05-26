---
id: absolute
title: absolute
hide_title: true
sidebar_label: absolute
---


# `absolute()`

#### Description

Provides the absolute value of a Money object.

#### Returns

1. `money` ([MoneyBase](Description.md#moneybase))


**Example**

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "100"

```
