---
id: methods
title: Methods
hide_title: true
sidebar_label: methods
---

## `contains(currency)`

#### Description

Check if currency exist in the current list.

#### Arguments

1. `currency` ([Currency](Description.md#currency))

#### Returns

`boolean`


**Example**

```js
import { createCurrencyList } from '@easymoney/currencies';

//if currency doesnt exist in list
const currency = { minorUnit: 2, code: 'XBT' };
const currency1 = { minorUnit: 5, code: 'DXBT' };
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);

list.contains(currency);
// => true

//if currency exist in list
const currency2 = { minorUnit: 2, code: 'XBT' };
const currency3 = { minorUnit: 5, code: 'DXBT' };
const currencyArr1 = [currency2, currency3];

const list1 = createCurrencyList(currencyArr);

const currency4 = { minorUnit: 2, code: 'XBTt' };
list1.contains(currency4);
// => false

```

## `getCurrencies()`

#### Description

Returns currency map of current list.

#### Returns

([CurrencyMap](Description.md#currencymap))


**Example**

```js

import { createAgregatedCurrencyList, createCurrencyList } from '@easymoney/currencies';

const currency = { minorUnit: 2, code: 'XBT' };
const currency1 = { minorUnit: 5, code: 'DXBT' };
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);
const agregatedList = createAgregatedCurrencyList([list]);

const result = agregatedList.getCurrencies();
// =>   { XBT: {minorUnit: 2, code: "XBT"},
//       DXBT: {minorUnit: 5, code: "DXBT"} }

//---------------------------------------------------

const currency2 = { minorUnit: 2, code: 'SADXBTA', meta: {} };
const currency3 = { minorUnit: 5, code: 'ASDDXBT', meta: {} };
const currencyArr1 = [currency2, currency3];

const list1 = createCurrencyList(currencyArr1);

const agregatedList1 = createAgregatedCurrencyList([list, list1]);

const result1 = agregatedList1.getCurrencies();

const resultLength = Object.keys(result1).length === currencyArr.length + currencyArr1.length ? true : false;
// => true

```

## `subUnitFor(currency)`

#### Description

Returns subunit (minor unit) for passed currency.

#### Arguments

1. `currency` ([Currency](Description.md#currency))

#### Returns

`boolean`


**Example**

```js

import { createCurrencyList, createAgregatedCurrencyList } from '@easymoney/currencies';

const currency = { minorUnit: 2, code: 'XBT' };
const currency1 = { minorUnit: 5, code: 'DXBT' };
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);
const agregatedList = createAgregatedCurrencyList([list]);

const result = agregatedList.subUnitFor("XBT");
// => 2

```