<div align="center" text-align="center">
  <img src="https://easymoney.now.sh/img/logo.png" align="center"
     alt="easy money logo" width="300" height="159"></img>     
     <br></br>
</div>


library for operating with monetary values in JavaScript and TypeScript

📖 [Read the documentation](https://easymoney.now.sh/docs/introduction/getting-started)

## High-level roadmap

| Feature                              | Status     |
| ------------------------------------ | ---------- |
| core functions in math               | ✅          |
| custom calculators support           | ✅          |
| tests on most codebase               | ✅          |
| currencies                           | ✅          |
| bigInt Support                       | ✅          |
| docs base api, positive cases        | ✅          |
| property-based tests on main methods | ✅          |
| intl formatter for createMoney       | ✅          |
| formatting                           | ❌(50%)     |
| supporting crypto currencies         | not stable |

Feel free to ask any questions or just contact, I open to any suggestions or ideas

[Facebook](https://www.facebook.com/andrey.frolov.94617)    
[Spectrum](https://spectrum.chat/easymoney)

### Packages

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

## Main features

- 🎁 **composable and modular api**: easy tree shaking with webpack
- 🛠 **statically typed**: first-class support of typescript
- 💣 **reliable**: great dx and human readable errors
- 🎁 **immutable**: immutable data
- 💡 **big int suport**: support new standart of big int out of the box
- 🧮 **custom calculators**: support custom calculators (for example if u need operating with big values like string) 

## Comparison with other money libraries

|                    | easymoney | Dinero |
| ------------------ | --------- | ------ |
| Custom calculators | ✅         | ❌      |
| Big int support    | ✅         | ❌      |
| Tree Shaking       | ✅         | ❌      |
| Typescript         | ✅         | ❌      |
| Flexible api       | ✅         | ❌      |

## Installation

```sh
npm i @easymoney/core @easymoney/money
```

or

```sh
yarn add @easymoney/core @easymoney/money
```

## Usage


### Money
```js

```
```js

```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/andrey-frolov-3b8579155/"><img src="https://avatars1.githubusercontent.com/u/30667180?v=4" width="100px;" alt=""/><br /><sub><b>Andrey Frolov</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Tests">⚠️</a> <a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Documentation">📖</a> <a href="https://github.com/frolovdev/easymoney/commits?author=frolovdev" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/oneyan1"><img src="https://avatars1.githubusercontent.com/u/45971627?v=4" width="100px;" alt=""/><br /><sub><b>oneyan1</b></sub></a><br /><a href="https://github.com/frolovdev/easymoney/commits?author=oneyan1" title="Tests">⚠️</a> <a href="https://github.com/frolovdev/easymoney/commits?author=oneyan1" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!