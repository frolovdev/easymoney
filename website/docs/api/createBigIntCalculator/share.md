---
id: share
title: share
hide_title: true
sidebar_label: share
---

# share

**Example**

```js

import { createBigIntCalculator } from '@easymoney/bigint-money';

const calculator = createBigIntCalculator();

const result = calculator.share(100n, 1n, 3n);
// => 33n

```