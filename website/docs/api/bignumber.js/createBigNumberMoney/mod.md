---
id: mod
title: mod
hide_title: true
sidebar_label: mod
---

# mod

**Example**

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ 
                amount: "111122223333444455556666777788889999", 
                currency: 'USD' });

const money2 = createBigNumberMoney({ 
                amount: "222299991111133334444", 
                currency: 'USD' });

const money3 = createBigNumberMoney({ 
                amount: "70856833948128988399", 
                currency: 'USD' });

const result = money.mod(money2);

const result1 = money.mod(money2).mod(money3);

result.getAmount();
// => "70856833948128988399"

result1.getAmount();
// => "0"

```