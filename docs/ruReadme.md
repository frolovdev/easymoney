<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>     

[![codecov](https://codecov.io/gh/frolovdev/easymoney/branch/master/graph/badge.svg)](https://codecov.io/gh/frolovdev/easymoney)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Библиотека для работы с денежными значениями в **JavaScript** и **Typescript**

* **Модульная.** Библиотека разбита по функциональности на пакеты, чтобы итоговый **бандл**
   был настолько **маленьким** насколько это возможно.
* **Статически типизированная.** Первоклассная поддержка **Typescript**.
* **Иммутабельная**: В основе лежат иммтубальные структуры данных.
* **Поддерживает большие числовые значения.** Поддерживает значения больше чем MAX_SAFE_INTEGER с помощью библиотеки [Bignumber.js](https://github.com/MikeMcl/bignumber.js/)
* **Криптовалюты.** Поддерживает пользовательские валюты в том числе и криптовалюты.
* **Поддержка Big int.** Содержит отдельный пакет для поддержки нового стандарта bigint.
* **Пользовательские калькуляторы.** Есть возможность переопределить поведения математики и округлений с помощью передачи пользовательского калькулятора.

📖 [Подробнее](https://easymoney.now.sh/docs/introduction/getting-started)

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

## Быстрый старт

```sh
npm i @easymoney/money
```

или

```sh
yarn add @easymoney/money
```

## Мотивация

JavaScript разработчики часто используют числа или строки для работы с денежными значениями. Кажется, что это не совсем верный путь, и данный подход не очень хорошо подходит для многих приложений из-за следующих проблем:

- Проблемы округлений (описана [здесь](https://dev.to/frolovdev/why-rounding-is-more-important-than-you-think-134j))
- Конвертации из одной валюты в другую
- Распределние (разделение денег между участниками)
- Форматирование
- Работа с центами/копейками (так называемые minor units)

Решением данной проблемы может послужить паттерн [Martin Fowler's Money Type](https://martinfowler.com/eaaCatalog/money.html), описанный в ["Patterns of Enterprise Application Architecture"](https://www.amazon.ca/gp/product/0321127420/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=evertpot-20&creative=330641&linkCode=as2&creativeASIN=0321127420&linkId=3e43f20d3b2dd7e325a3feecdd2eaecd).

Это довольно старый паттерн, который имплементирован и успешно используется во многих других языках, например:

- Java [Moneta](https://github.com/JavaMoney/jsr354-ri)
- PHP [moneyphp](https://github.com/moneyphp/money)
- Go [go-money](https://github.com/Rhymond/go-money)

## Сравнение с Dinero.js

|                                                                     | easymoney                                                                                                           | Dinero.js                                                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Поддержка Typescript                                                | ✅                                                                                                                   | ❌ (Только как сторонний пакет, что не позволяет максимально раскрыть потенциал Typescript)              |
| Модульность                                                         | функциональность разделена по доменам, что позволяет максимально эффективно разделить библиотеку на отдельные модули | написана как монолит, один большой объект с кучей функций, нет возможности поделить на пакеты by design |
| Поддержка пользовательских валют                                    | ✅                                                                                                                   | ❌ (только ISO валюты)                                                                                   |
| Поддержка пользовательских калькуляторов                            | ✅                                                                                                                   | ❌                                                                                                       |
| Возможность работать с денежными значениями больше MAX_SAFE_INTEGER | ✅                                                                                                                   | ❌                                                                                                       |
| Поддержка bigint                                                    | ✅                                                                                                                   | ❌                                                                                                       |

## Список пакетов

|              Пакет              |                      Версия                      |                    Зависимости                     |                      Размер                      |
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

## Сообщество

- [Spectrum](https://spectrum.chat/easymoney)
- [Задать вопрос в твитере](https://twitter.com/frolovdev)

## Узнать подробнее

[Описание API](https://easymoney.now.sh/docs/api/api-reference)
