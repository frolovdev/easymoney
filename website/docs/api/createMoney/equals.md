---
id: equals
title: API Reference
hide_title: true
sidebar_label: equals
---

# equals

**Example**

```js

import { createMoney } from 'easy-money';

//if money objects are equal
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.equals(money2);
// => true

//if money objects arent equal with amount or currency
const money3 = createMoney({ amount: 100, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'RUB' });

money3.equals(money4);
// => false

```