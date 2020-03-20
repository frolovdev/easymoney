---
id: divide
title: divide
hide_title: true
sidebar_label: divide
---

# compare

**Example**

```js

import { createCalculator } from 'easy-money';

const calculator = createCalculator();

const result = calculator.divide('100', 25);
// => "4"

const result1 = calculator.divide('2', 4);
// => "0.5"

const result2 = calculator.divide('98', 25);
// => "3.92"

const result3 = calculator.divide('181', 17);
// => "10.64705882352941"

```