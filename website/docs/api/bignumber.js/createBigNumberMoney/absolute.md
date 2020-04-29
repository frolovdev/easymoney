---
id: absolute
title: absolute
hide_title: true
sidebar_label: absolute
---

# absolute

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ 
                amount: "-222233334444111155556666777788889999", 
                currency: 'USD' });

const money1 = createBigNumberMoney({ 
                amount: -100, 
                currency: 'USD' });

const result = money.absolute();
// => "222233334444111155556666777788889999"

const result1 = money1.absolute();
// => "100"

```