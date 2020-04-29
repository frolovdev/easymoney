---
id: lessThan
title: lessThan
hide_title: true
sidebar_label: lessThan
---

# lessThan

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

//if first value equals second
const money = createBigNumberMoney({ 
                amount: "111199992222888833337777444466665555", 
                currency: 'USD' });

const money2 = createBigNumberMoney({ 
                amount: "111199992222888833337777444466665555", 
                currency: 'USD' });

money.lessThan(money2);
// => false

//if first value less then second
const money3 = createBigNumberMoney({ 
                amount: "111199992222888833337777444466665555", 
                currency: 'USD' });

const money4 = createBigNumberMoney({ 
                amount: "999999111199992222888833337777444466665555", 
                currency: 'USD' });

money3.lessThan(money4);
// => true

```