---
id: absolute
title: absolute
hide_title: true
sidebar_label: absolute
---

# absolute

#### Description

Provides the absolute value of a Money object.

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "-222333444111155666677788899", currency: 'USD' });

const money1 = createBigNumberMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "222333444111155666677788899"

const result1 = money1.absolute();
// => "100"

```
