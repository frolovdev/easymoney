<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>


# @easymoney/currencies

[![npm-currencies]][pack-currencies] ![npm type definitions]  [![deps-currencies]][david-currencies]  [![size-currencies]][pho-currencies] ![GitHub]


[npm-currencies]: https://img.shields.io/npm/v/@easymoney/currencies?color=blue
[pack-currencies]: https://www.npmjs.com/package/@easymoney/currencies
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/currencies?color=blue
[deps-currencies]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/currencies
[david-currencies]: https://david-dm.org/frolovdev/easymoney?path=packages/currencies
[size-currencies]: https://img.shields.io/bundlephobia/minzip/@easymoney/currencies
[pho-currencies]: https://bundlephobia.com/result?p=@easymoney/currencies
[GitHub]: https://img.shields.io/npm/l/@easymoney/currencies


[Open in docs](https://easymoney.now.sh/docs/api/currencies/createCurrencyList/Description)

## Install

```
npm install @easymoney/currencies
```

or

```
yarn add @easymoney/currencies
```

or

**CDN**
 - [@easymoney/currencies](https://unpkg.com/@easymoney/currencies)
 
## Usage

```js
import { createCurrencyList } from '@easymoney/currencies';

const currency = { minorUnit: 2, code: 'XBT' };
const currency1 = { minorUnit: 5, code: 'DXBT' };
const currencyArr = [currency, currency1];

const list = createCurrencyList(currencyArr);

const result = list.getCurrencies();
// =>   { XBT: {minorUnit: 2, code: "XBT"},
//       DXBT: {minorUnit: 5, code: "DXBT"} }

const resultLength = Object.keys(result).length === currencyArr.length ? true : false;
// => true
```

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