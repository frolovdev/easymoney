---
id: getting-started
title: Getting Started
hide_title: true
sidebar_label: Getting Started
---

# Getting Started

easymoney is javascript library for working with monetary values

## Installation

```bash
npm install --save @easymoney/money
```

```bash
yarn add @easymoney/money
```

For more details, see the Installation page.

## Help and Discussion

You can also ask questions on [Stack Overflow](https://stackoverflow.com) using the **[#easymoney](https://stackoverflow.com/questions/tagged/easymoney)** tag.

If you have a bug report or need to leave other feedback, **[please file an issue](https://github.com/frolovdev/easymoney/issues)** on the Github repo

## Basic examples of api

### Math operations

Add

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 106, currency: 'USD' });

const money3 = money1.add(money2).getAmount();
// => 206

```

Multiplication

```js

import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 2, currency: 'USD' });

const money3 = money1.multiply(money2).getAmount();
// => 200

```

### Currencies

```js

import { createCurrencyList, isoCurrencyList, currencies } from '@easymoney/currencies';

/* it's equal already prepared isoCurrencyList, but here just for example */
const handmadeCurrencyList = createCurrencyList(currencies);

// check if list contains XBT
const isXBTExist = isoCurrencyList.contains({ minorUnit: 2, code: 'XBT' });
// => false

// check if list contains USD
const isUSDExist = isoCurrencyList.contains({ minorUnit: 2, code: 'USD' });
// => true

```