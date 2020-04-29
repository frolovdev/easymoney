---
id: equals
title: equals
hide_title: true
sidebar_label: equals
---

# equals

**Example**

```js

import { createBigNumberMoney } from '@easymoney/money';

//if money objects are equal
const money = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'USD' });

const money4 = createBigNumberMoney({ amount: "11112222333344445556667778888", currency: 'RUB' });

money3.equals(money4);
// => false

```