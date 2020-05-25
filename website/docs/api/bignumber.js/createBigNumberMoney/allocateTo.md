---
id: allocateTo
title: allocateTo
hide_title: true
sidebar_label: allocateTo
---

# allocateTo

#### Description

Allocate to N targets
An amount of money can be allocated to N targets using allocateTo().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';;

const money = createBigNumberMoney({ amount: "12345678912345678901234567890", currency: 'RUB' });
const money1 = createBigNumberMoney({ amount: "999888777666555444333222111005", currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => "6172839456172839450617283945","6172839456172839450617283945"    

money1.allocateTo(3).map((result) => result.getAmount());
// => "3332962592221851481110740370003",
//    "3332962592221851481110740370001",  
//    "3332962592221851481110740370001"    

```
