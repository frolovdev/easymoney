---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---

# divide

#### Description

Divisions can be performed using divide().

**Example**

```js

import { createBigNumberMoney } from '@easymoney/money';

const money1 = createBigNumberMoney({ amount: "99118822773366445591283991122", currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// => "19823764554673289118256798224"

result2.getAmount();
// => "198237645546732891182567982244"

```
