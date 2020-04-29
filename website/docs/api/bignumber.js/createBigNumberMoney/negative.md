---
id: negative
title: negative
hide_title: true
sidebar_label: negative
---

# negative

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ 
                amount: "999988887777666655554444333322221111", 
                currency: 'USD' });

const result = money.negative();
// => "-999988887777666655554444333322221111"

```