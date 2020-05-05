<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>



# @easymoney/bigint-money

[![npm-bigint-money]][pack-bigint-money] ![npm type definitions]  [![deps-bigint-money]][david-bigint-money]  [![size-bigint-money]][pho-bigint-money] ![GitHub]


[npm-bigint-money]: https://img.shields.io/npm/v/@easymoney/bigint-money?color=blue
[pack-bigint-money]: https://www.npmjs.com/package/@easymoney/bigint-money
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/bigint-money?color=blue
[deps-bigint-money]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/bigint-money
[david-bigint-money]: https://david-dm.org/frolovdev/easymoney?path=packages/bigint-money
[size-bigint-money]: https://img.shields.io/bundlephobia/minzip/@easymoney/bigint-money
[pho-bigint-money]: https://bundlephobia.com/result?p=@easymoney/bigint-money
[GitHub]: https://img.shields.io/npm/l/@easymoney/bigint-money

[Open in docs](https://easymoney.now.sh/docs/api/bigint-money/createBigIntMoney/Description)

## Install

```
npm install @easymoney/bigint-money
```

or

```
yarn add @easymoney/bigint-money
```
or

**CDN**
 - [@easymoney/bigint-money](https://unpkg.com/@easymoney/bigint-money)

## Usage

```js
import { createBigIntMoney } from "@easymoney/bigint-money";

const money = createBigIntMoney({ amount: 100n, currency: "USD" });

const money2 = createBigIntMoney({ amount: 100n, currency: "USD" });

const result = money.add(money2);

result.getAmount();
// => 200n
```

```js

import { createBigIntMoney } from '@easymoney/bigint-money';

const money1 = createBigIntMoney({ amount: 100n, currency: 'USD' });

const result = money1.divide(5);

const result2 = money1.divide(1 / 2);

result.getAmount();
// ->20n

result2.getAmount();
// ->200n

```