---
id: isNegative
title: isNegative
hide_title: true
sidebar_label: isNegative
---

# isNegative

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ 
                amount: "999988887777666655554444333322221111", 
                currency: 'USD' });

money.isNegative();
// => false

//if amount value is negative
const money1 = createBigNumberMoney({ 
                amount: "-999988887777666655554444333322221111", 
                currency: 'USD' });

money1.isNegative();
// => true

```