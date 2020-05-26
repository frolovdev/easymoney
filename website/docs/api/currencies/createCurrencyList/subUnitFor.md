---
id: subUnitFor
title: subUnitFor
hide_title: true
sidebar_label: subUnitFor
---


# `subUnitFor(currency)`

#### Description

Returns subunit (minor unit) for passed currency.

#### Arguments

1. `currency` ([Currency](Description.md#currency))

#### Returns

`boolean`


**Example**

```js

import { createCurrencyList } from '@easymoney/currencies';

const currency = { minorUnit: 2, code: 'XBT' };
const currency1 = { minorUnit: 5, code: 'DXBT' };
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);

const result = list.subUnitFor("XBT");
// => 2

```
