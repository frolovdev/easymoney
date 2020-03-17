---
id: absolute
title: API Reference
hide_title: true
sidebar_label: absolute
---

# absolute

**Example**

```js

import { createBigIntCalculator } from 'easy-money';

const calculator = createBigIntCalculator();

const result = calculator.absolute(10n);
// => 10n

const result1 = calculator.absolute(-10n);
// => 10n

```