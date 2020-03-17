---
id: multiply
title: API Reference
hide_title: true
sidebar_label: multiply
---

# multiply

**Example**

```js

import { createBigIntCalculator } from 'easy-money';

const calculator = createBigIntCalculator();

const result = calculator.multiply(10n, 2n, 'HALF_EVEN');
// => 20n

const result5 = calculator.multiply(10n, -0.02, 'HALF_UP');
// => 0n

const result10 = calculator.multiply(10n, -0.55, 'FLOOR');
// => -6n

```