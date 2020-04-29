---
id: allocateTo
title: allocateTo
hide_title: true
sidebar_label: allocateTo
---

# allocateTo

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';;

const money = createBigNumberMoney({ 
                amount: "12345678912345678901234567890", 
                currency: 'RUB' });
const money1 = createBigNumberMoney({ 
                amount: "9999888877776666555544443333222211110005", 
                currency: 'USD' });

money.allocateTo(2).map((result) => result.getAmount());
//  => "6172839456172839450617283945",
//     "6172839456172839450617283945"

money1.allocateTo(3).map((result) => result.getAmount());
// => "3333296292592222185181481111074070370003",
//    "3333296292592222185181481111074070370001",  
//    "3333296292592222185181481111074070370001"    

```