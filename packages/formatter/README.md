<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>


# @easymoney/formatter

[![npm-formatter]][pack-formatter] ![npm type definitions]  [![deps-formatter]][david-formatter]  [![size-formatter]][pho-formatter] ![GitHub]


[npm-formatter]: https://img.shields.io/npm/v/@easymoney/formatter?color=blue
[pack-formatter]: https://www.npmjs.com/package/@easymoney/formatter
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/formatter?color=blue
[deps-formatter]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/formatter
[david-formatter]: https://david-dm.org/frolovdev/easymoney?path=packages/formatter
[size-formatter]: https://img.shields.io/bundlephobia/minzip/@easymoney/formatter
[pho-formatter]: https://bundlephobia.com/result?p=@easymoney/formatter
[GitHub]: https://img.shields.io/npm/l/@easymoney/formatter


[Open in docs](https://easymoney.now.sh/docs/api/formatter/createMoneyIntlFormatter/Description)

## Install

```
npm install @easymoney/formatter
```

or

```
yarn add @easymoney/formatter
```

or

**CDN**
 - [@easymoney/formatter](https://unpkg.com/@easymoney/formatter)
 
## Usage

```js

import {createMoneyIntlFormatter} from "@easymoney/formatter"
import { createMoney } from '@easymoney/money';

const money = createMoney({amount: 5, currency: "USD"});
const money1 = createMoney({amount: 50, currency: "USD"});

const formatted = createMoneyIntlFormatter().format(money);
// => "$0.05"

const formatted1 = createMoneyIntlFormatter()
                    .format(money,
                            "en-US", 
                            {minimumFractionDigits: 1, maximumFractionDigits: 1});
// => "$0.5"
```