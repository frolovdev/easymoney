---
id: isPositive
title: isPositive
hide_title: true
sidebar_label: isPositive
---

# isPositive

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if amount value is positive
const money = createBigNumberMoney({ 
                amount: "999988887777666655554444333322221111", 
                currency: 'USD' });

money.isPositive();
// => true

//if amount value isnt positive
const money1 = createBigNumberMoney({ 
                amount: "-999988887777666655554444333322221111", 
                currency: 'USD' });

money1.isPositive();
// => false

```