---
id: lessThanOrEqual
title: lessThanOrEqual
hide_title: true
sidebar_label: lessThanOrEqual
---

# lessThanOrEqual

**Example**

```js

import { createMoney } from 'easy-money';

//if first value equals second
const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

money.lessThanOrEqual(money2);
// => true

//if first value less then second
const money3 = createMoney({ amount: 150, currency: 'USD' });

const money4 = createMoney({ amount: 100, currency: 'USD' });

money3.lessThanOrEqual(money4);
// => true

```