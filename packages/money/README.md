<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>


# @easymoney/money

[![npm-money]][pack-money] ![npm type definitions]  [![deps-money]][david-money]  [![size-money]][pho-money] ![GitHub]


[npm-money]: https://img.shields.io/npm/v/@easymoney/money?color=blue
[pack-money]: https://www.npmjs.com/package/@easymoney/money
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/money?color=blue
[deps-money]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/money
[david-money]: https://david-dm.org/frolovdev/easymoney?path=packages/money
[size-money]: https://img.shields.io/bundlephobia/minzip/@easymoney/money
[pho-money]: https://bundlephobia.com/result?p=@easymoney/money
[GitHub]: https://img.shields.io/npm/l/@easymoney/money


[Open in docs](https://easymoney.now.sh/docs/api/money/createMoney/Description)

## Install

```
npm install @easymoney/money
```

or

```
yarn add @easymoney/money
```

or

**CDN**
 - [@easymoney/money](https://unpkg.com/@easymoney/money)
 
## Usage

```js

import { createMoney } from '@easymoney/money';

const money = createMoney({ amount: 100, currency: 'USD' });

const money2 = createMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => 200
```

```js
import { createMoney } from '@easymoney/money';

const money1 = createMoney({ amount: 100, currentcy: 'USD' });

const result = money1.multiply(6);

result.getAmount();
// => "600"
```