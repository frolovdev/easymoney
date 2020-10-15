<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>     

[![codecov](https://codecov.io/gh/frolovdev/easymoney/branch/master/graph/badge.svg)](https://codecov.io/gh/frolovdev/easymoney)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Library for operating with monetary values in **JavaScript** and **Typescript**

* **Modular.** It's written with modular and composable architecture so
  that your final **bundle** will be as **small** as possible.
* **Statically typed.** First-class support of **Typescript**.
* **Immutable**: It has a chainable API, but without mutations.
* **Supports big numbers.** Support values greater
  than MAX_SAFE_INTEGER with [Bignumber.js](https://github.com/MikeMcl/bignumber.js/)
* **Crypto currencies.** It has support for custom currencies and formatting them.
* **Big int support.** It has a package for supporting 
  new standard of big int out of the box in a separate pacakge.
* **Custom calculators.** You can override functionality with your own custom calculator.

📖 [Read more](https://easymoney.now.sh/docs/introduction/getting-started)

```js
import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 106, currency: 'USD' });

const money3 = money1.add(money2).getAmount();
// => 206
```

```js
import { createMoneyIntlFormatter } from "@easymoney/formatter"
import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 5, currency: "USD" });

const formatted = createMoneyIntlFormatter().format(money);
// => "$0.05"
```

```js
import { createMoneyCryptoFormatter } from "@easymoney/crypto-formatter"
import { createMoney } from '@easymoney/money';
import { cryptoCurrenciesMap } from "@easymoney/currencies"

const money = createMoney({ amount: 5, currency: "LTC" });

const formatted = createMoneyCryptoFormatter().format(money);
// => "0.00000005LTC"
```

```js
const currencies = [{ minorUnit: 2, code: "XBT" }, { minorUnit: 5, code: "DXBT" }];

const list = createCurrencyList(currencies);

list.getCurrencies();
/**
 * => {
  XBT: { minorUnit: 2, code: "XBT" },
  DXBT: { minorUnit: 5, code: "DXBT" },
};
 */

```

## Requirements

* For typescript users TS 3.7+
* If you use @easymoney/bigint-money you need Node Version or Browser Version that supports this [proposal](https://caniuse.com/bigint) 

## Quick start

```sh
npm i @easymoney/money
```

or

```sh
yarn add @easymoney/money
```

## Why

JavaScript developers attempt to use just numbers or strings (i.g. https://github.com/MikeMcl/bignumber.js) to operate with monetary values. I don't think this is the right way, and strings or numbers are not well suited for financial applications for these main reasons:

- tricky rounding (described [here](https://dev.to/frolovdev/why-rounding-is-more-important-than-you-think-134j))
- conversion
- allocating (dividing money between parties)
- formatting
- working with cents (minor units of currency)

The solution to these problems is the [Martin Fowler's Money Type](https://martinfowler.com/eaaCatalog/money.html) from ["Patterns of Enterprise Application Architecture"](https://www.amazon.ca/gp/product/0321127420/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=evertpot-20&creative=330641&linkCode=as2&creativeASIN=0321127420&linkId=3e43f20d3b2dd7e325a3feecdd2eaecd).

It's an old pattern that is implemented in many other languages e.g.:

- Java [Moneta](https://github.com/JavaMoney/jsr354-ri)
- PHP [moneyphp](https://github.com/moneyphp/money)
- Go [go-money](https://github.com/Rhymond/go-money)

Further reading

[How to Operate with Monetary Values in JavaScript](https://dev.to/frolovdev/how-to-operate-with-monetary-values-in-javascript-3fal)

[Main features of easymoney](https://dev.to/frolovdev/introducing-easymoney-41kj)

[Why rounding is more important than you think](https://dev.to/frolovdev/why-rounding-is-more-important-than-you-think-134j)


## Comparison with dinero.js

|                                               | easymoney                                                                                                                    | Dinero.js                                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Typescript                                    | ✅                                                                                                                            | ❌ (only @types/Dinero)                                                                                       |
| Modular                                       | functionality is divided by domains, which allows the library to be divided into separate modules as efficiently as possible | written as a monolith, one big object with a bunch of functions, no way to divide it into packages by design |
| Custom currencies support                     | ✅                                                                                                                            | ❌ (only ISO currencies)                                                                                      |
| Custom calculators support                    | ✅                                                                                                                            | ❌                                                                                                            |
| Monetary values greater than MAX_SAFE_INTEGER | ✅                                                                                                                            | ❌                                                                                                            |
| Bigint support                                | ✅                                                                                                                            | ❌                                                                                                            |

## Packages

|             Package             |                     Version                      |                    Dependencies                    |                       Size                       |
| :-----------------------------: | :----------------------------------------------: | :------------------------------------------------: | :----------------------------------------------: |
|   [`@easymoney/bigint-money`]   |     [![npm-bigint-money]][pack-bigint-money]     |     [![deps-bigint-money]][david-bigint-money]     |     [![size-bigint-money]][pho-bigint-money]     |
|   [`@easymoney/bignumber.js`]   |        [![npm-bignumber]][pack-bignumber]        |        [![deps-bignumber]][david-bignumber]        |        [![size-bignumber]][pho-bignumber]        |
|    [`@easymoney/currencies`]    |       [![npm-currencies]][pack-currencies]       |       [![deps-currencies]][david-currencies]       |       [![size-currencies]][pho-currencies]       |
|      [`@easymoney/money`]       |            [![npm-money]][pack-money]            |            [![deps-money]][david-money]            |            [![size-money]][pho-money]            |
|    [`@easymoney/formatter`]     |        [![npm-formatter]][pack-formatter]        |        [![deps-formatter]][david-formatter]        |        [![size-formatter]][pho-formatter]        |
| [`@easymoney/crypto-formatter`] | [![npm-crypto-formatter]][pack-crypto-formatter] | [![deps-crypto-formatter]][david-crypto-formatter] | [![size-crypto-formatter]][pho-crypto-formatter] |

[`@easymoney/bigint-money`]: https://github.com/frolovdev/easymoney/tree/master/packages/bigint-money
[npm-bigint-money]: https://img.shields.io/npm/v/@easymoney/bigint-money?color=blue
[pack-bigint-money]: https://www.npmjs.com/package/@easymoney/bigint-money
[deps-bigint-money]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/bigint-money
[david-bigint-money]: https://david-dm.org/frolovdev/easymoney?path=packages/bigint-money
[size-bigint-money]: https://img.shields.io/bundlephobia/minzip/@easymoney/bigint-money
[pho-bigint-money]: https://bundlephobia.com/result?p=@easymoney/bigint-money

[`@easymoney/bignumber.js`]: https://github.com/frolovdev/easymoney/tree/master/packages/bignumber.js
[npm-bignumber]: https://img.shields.io/npm/v/@easymoney/bignumber.js?color=blue
[pack-bignumber]: https://www.npmjs.com/package/@easymoney/bignumber.js
[deps-bignumber]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/bignumber.js
[david-bignumber]: https://david-dm.org/frolovdev/easymoney?path=packages%2Fbignumber.js
[size-bignumber]: https://img.shields.io/bundlephobia/minzip/@easymoney/bignumber.js
[pho-bignumber]: https://bundlephobia.com/result?p=@easymoney/bignumber.js

[`@easymoney/currencies`]: https://github.com/frolovdev/easymoney/tree/master/packages/currencies
[npm-currencies]: https://img.shields.io/npm/v/@easymoney/currencies?color=blue
[pack-currencies]: https://www.npmjs.com/package/@easymoney/currencies
[deps-currencies]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/currencies
[david-currencies]: https://david-dm.org/frolovdev/easymoney?path=packages/currencies
[size-currencies]: https://img.shields.io/bundlephobia/minzip/@easymoney/currencies
[pho-currencies]: https://bundlephobia.com/result?p=@easymoney/currencies

[`@easymoney/money`]: https://github.com/frolovdev/easymoney/tree/master/packages/money
[npm-money]: https://img.shields.io/npm/v/@easymoney/money?color=blue
[pack-money]: https://www.npmjs.com/package/@easymoney/money
[deps-money]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/money
[david-money]: https://david-dm.org/frolovdev/easymoney?path=packages/money
[size-money]: https://img.shields.io/bundlephobia/minzip/@easymoney/money
[pho-money]: https://bundlephobia.com/result?p=@easymoney/money

[`@easymoney/formatter`]: https://github.com/frolovdev/easymoney/tree/master/packages/formatter
[npm-formatter]: https://img.shields.io/npm/v/@easymoney/formatter?color=blue
[pack-formatter]: https://www.npmjs.com/package/@easymoney/formatter
[deps-formatter]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/formatter
[david-formatter]: https://david-dm.org/frolovdev/easymoney?path=packages/formatter
[size-formatter]: https://img.shields.io/bundlephobia/minzip/@easymoney/formatter
[pho-formatter]: https://bundlephobia.com/result?p=@easymoney/formatter

[`@easymoney/crypto-formatter`]: https://github.com/frolovdev/easymoney/tree/master/packages/crypto-formatter
[npm-crypto-formatter]: https://img.shields.io/npm/v/@easymoney/crypto-formatter?color=blue
[pack-crypto-formatter]: https://www.npmjs.com/package/@easymoney/crypto-formatter
[deps-crypto-formatter]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/crypto-formatter
[david-crypto-formatter]: https://david-dm.org/frolovdev/easymoney?path=packages/crypto-formatter
[size-crypto-formatter]: https://img.shields.io/bundlephobia/minzip/@easymoney/crypto-formatter
[pho-crypto-formatter]: https://bundlephobia.com/result?p=@easymoney/crypto-formatter

## CDN

 - [@easymoney/money](https://unpkg.com/@easymoney/money)
 - [@easymoney/bigint-money](https://unpkg.com/@easymoney/bigint-money)
 - [@easymoney/currencies](https://unpkg.com/@easymoney/currencies)
 - [@easymoney/bignumber.js](https://unpkg.com/@easymoney/bignumber.js)
 - [@easymoney/formatter](https://unpkg.com/@easymoney/formatter)
 - [@easymoney/crypto-formatter](https://unpkg.com/@easymoney/crypto-formatter)

## Comunity

- [Spectrum](https://spectrum.chat/easymoney)
- [Ask question on twitter](https://twitter.com/frolovdev)

## Learn more

[API Reference](https://easymoney.now.sh/docs/api/api-reference)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/andrey-frolov-3b8579155/"><img src="https://avatars1.githubusercontent.com/u/30667180?v=4" width="100px;" alt=""/><br /><sub><b>Andrey Frolov</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Tests">⚠️</a> <a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Documentation">📖</a> <a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/oneyan1"><img src="https://avatars1.githubusercontent.com/u/45971627?v=4" width="100px;" alt=""/><br /><sub><b>oneyan1</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=oneyan1" title="Tests">⚠️</a> <a href="https://github.com/frolovdev/easymoney/commits?author=oneyan1" title="Documentation">📖</a> <a href="https://github.com/frolovdev/easymoney/commits?author=oneyan1" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Mikchail"><img src="https://avatars1.githubusercontent.com/u/43996756?v=4" width="100px;" alt=""/><br /><sub><b>Mikchail</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=Mikchail" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Melzmr"><img src="https://avatars3.githubusercontent.com/u/38521674?v=4" width="100px;" alt=""/><br /><sub><b>Roman Martynenko</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=Melzmr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Artem676"><img src="https://avatars2.githubusercontent.com/u/43669813?v=4" width="100px;" alt=""/><br /><sub><b>Artem676</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=Artem676" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!