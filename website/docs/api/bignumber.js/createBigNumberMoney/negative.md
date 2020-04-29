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

const money = createBigNumberMoney({ amount: "999888777666555444333222111", currency: 'USD' });

const result = money.negative();
// => "-999888777666555444333222111"

```