
<div align="center" text-align="center">
  <img src="https://easymoney.now.sh/img/logo.png" align="center"
     alt="easy money logo" width="300" height="159"></img>     
     <br></br>
</div>



library for operating with monetary values in **JavaScript** and **TypeScript**

- **Modular.** It's written with modular and composable architecture, so that your final **bundle** will be as **small** as possible.
- **Statically typed.** First-class support of **Typescript**.
- **Immutable**: It has chainable API, but without mutations.
- **Support big numbers.** support values greater than MAX_SAFE_INTEGER with [Bignumber.js](https://github.com/MikeMcl/bignumber.js/)
- **Crypto currencies.** It's have support of custom currencies and formatting them.
- **Big int support.** It's have package for support new standart of big int out of the box in separate pacakge.
- **Custom calculators.** you can override functionality with your own custom calculator.

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

# Important Note ⚠️

We currently hard work on prerelease and last refactorings, now we do not adhere to the semantic release, cause API (types) of packages might be changed.

With release we are going to commit our public API (publish 1.0.0) and support back-compatibility and semantic versioning. Please do not blame us for this decision; this allows us to move more iteratively 🚀.

High-level roadmap described on [a separate page](https://github.com/frolovdev/easymoney/projects/2).

## Quick start

For main functionality you need just 2 packages (if you are not working with bigint)

```sh
npm i @easymoney/money
```

or

```sh
yarn add @easymoney/money
```

## Why

Javascript developers attempt to use just numbers or strings (i.g. https://github.com/MikeMcl/bignumber.js) to operate with monetary values. I think this is a wrong way, and strings or numbers are not well suited for financial applications for those main reasons:

- tricky rounding (described [here](https://dev.to/frolovdev/why-rounding-is-more-important-than-you-think-134j))
- conversion
- allocating (dividing money between )
- formatting
- working with cents (minor units of currency)

The solution to these problems is the [Martin Fowler's Money Type](https://martinfowler.com/eaaCatalog/money.html) from ["Patterns of Enterprise Application Architecture"](https://www.amazon.ca/gp/product/0321127420/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=evertpot-20&creative=330641&linkCode=as2&creativeASIN=0321127420&linkId=3e43f20d3b2dd7e325a3feecdd2eaecd).

It's an old pattern that is implemented in many other languages i.g.:

- Java [Moneta](https://github.com/JavaMoney/jsr354-ri)
- PHP [moneyphp](https://github.com/moneyphp/money)
- Go [go-money](https://github.com/Rhymond/go-money)

Further reading

[Why rounding is more important than you think](https://dev.to/frolovdev/why-rounding-is-more-important-than-you-think-134j)

## Packages

|           Package           |                 Version                  |                Dependencies                |                   Size                   |
| :-------------------------: | :--------------------------------------: | :----------------------------------------: | :--------------------------------------: |
| [`@easymoney/bigint-money`] | [![npm-bigint-money]][pack-bigint-money] | [![deps-bigint-money]][david-bigint-money] | [![size-bigint-money]][pho-bigint-money] |
|     [`@easymoney/core`]     |         [![npm-core]][pack-core]         |         [![deps-core]][david-core]         |         [![size-core]][pho-core]         |
|  [`@easymoney/currencies`]  |   [![npm-currencies]][pack-currencies]   |   [![deps-currencies]][david-currencies]   |   [![size-currencies]][pho-currencies]   |
|    [`@easymoney/money`]     |        [![npm-money]][pack-money]        |        [![deps-money]][david-money]        |        [![size-money]][pho-money]        |
|  [`@easymoney/formatter`]   |    [![npm-formatter]][pack-formatter]    |    [![deps-formatter]][david-formatter]    |    [![size-formatter]][pho-formatter]    |

[`@easymoney/bigint-money`]: https://github.com/frolovdev/easymoney/tree/master/packages/bigint-money
[npm-bigint-money]: https://img.shields.io/npm/v/@easymoney/bigint-money?color=blue
[pack-bigint-money]: https://www.npmjs.com/package/@easymoney/bigint-money
[deps-bigint-money]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/bigint-money
[david-bigint-money]: https://david-dm.org/frolovdev/easymoney?path=packages/bigint-money
[size-bigint-money]: https://img.shields.io/bundlephobia/minzip/@easymoney/bigint-money
[pho-bigint-money]: https://bundlephobia.com/result?p=@easymoney/bigint-money

[`@easymoney/core`]: https://github.com/frolovdev/easymoney/tree/master/packages/core
[npm-core]: https://img.shields.io/npm/v/@easymoney/core?color=blue
[pack-core]: https://www.npmjs.com/package/@easymoney/core
[deps-core]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/core
[david-core]: https://david-dm.org/frolovdev/easymoney?path=packages/core
[size-core]: https://img.shields.io/bundlephobia/minzip/@easymoney/core
[pho-core]: https://bundlephobia.com/result?p=@easymoney/core

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

## Comunity

- [Spectrum](https://spectrum.chat/easymoney)
- [Ask question in twitter](https://twitter.com/frolovdev)

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
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!