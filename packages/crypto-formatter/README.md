<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>


# @easymoney/crypto-formatter

[![npm-crypto-formatter]][pack-crypto-formatter] ![npm type definitions]  [![deps-crypto-formatter]][david-crypto-formatter]  [![size-crypto-formatter]][pho-crypto-formatter] ![GitHub]


[npm-crypto-formatter]: https://img.shields.io/npm/v/@easymoney/crypto-formatter?color=blue
[pack-crypto-formatter]: https://www.npmjs.com/package/@easymoney/crypto-formatter
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/crypto-formatter?color=blue
[deps-crypto-formatter]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/crypto-formatter
[david-crypto-formatter]: https://david-dm.org/frolovdev/easymoney?path=packages/crypto-formatter
[size-crypto-formatter]: https://img.shields.io/bundlephobia/minzip/@easymoney/crypto-formatter
[pho-crypto-formatter]: https://bundlephobia.com/result?p=@easymoney/crypto-formatter
[GitHub]: https://img.shields.io/npm/l/@easymoney/crypto-formatter



[Open in docs](https://easymoney.now.sh/docs/api/crypto-formatter/createMoneyCryptoFormatter/Description)

## Install

```
npm install @easymoney/crypto-formatter
```

or

```
yarn add @easymoney/crypto-formatter
```

or

**CDN**
 - [@easymoney/crypto-formatter](https://unpkg.com/@easymoney/crypto-formatter)
 
## Usage

```js
import {createMoneyCryptoFormatter} from "@easymoney/crypto-formatter"
import { createMoney } from '@easymoney/money';
import {cryptoCurrenciesMap} from "@easymoney/currencies"

const money = createMoney({amount: 5, currency: "LTC" });

const formatted = createMoneyCryptoFormatter().format(money);
// => "0.00000005LTC"

const money1 = createMoney({amount: 50, currency: cryptoCurrenciesMap.ETH });

const formatted1 = createMoneyCryptoFormatter().format(money);
// => "0.000000000000000005ETH"

const money = { amount: 5, currency: "ETH" };

const formattedValue = createFormatter().format(createMoney(money), {
        currencyPosition: -1
});

// => ETH0.000000000000000005
```