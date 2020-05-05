<div align="center" style="width: 225px;height: 120px">
<br/>

<img src="https://easymoney.now.sh/img/logo.png" align="right"
     alt="easy money logo" width="225" height="120"></img>  

</div>


# @easymoney/bignumber.js

[![npm-bignumber]][pack-bignumber] ![npm type definitions]  [![deps-bignumber]][david-bignumber]  [![size-bignumber]][pho-bignumber] ![GitHub]


[npm-bignumber]: https://img.shields.io/npm/v/@easymoney/bignumber.js?color=blue
[pack-bignumber]: https://www.npmjs.com/package/@easymoney/bignumber.js
[npm type definitions]: https://img.shields.io/npm/types/@easymoney/bignumber.js?color=blue
[deps-bignumber]: https://david-dm.org/frolovdev/easymoney/status.svg?path=packages/bignumber.js
[david-bignumber]: https://david-dm.org/frolovdev/easymoney?path=packages%2Fbignumber.js
[size-bignumber]: https://img.shields.io/bundlephobia/minzip/@easymoney/bignumber.js
[pho-bignumber]: https://bundlephobia.com/result?p=@easymoney/bignumber.js
[GitHub]: https://img.shields.io/npm/l/@easymoney/bignumber.js


[Open in docs](https://easymoney.now.sh/docs/api/bignumber.js/createBigNumberMoney/Description)

## Install

```
npm install @easymoney/bignumber.js
```

or

```
yarn add @easymoney/bignumber.js
```

or

**CDN**
 - [@easymoney/bignumber.js](https://unpkg.com/@easymoney/bignumber.js)

## Usage

```js
import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "111222333344445566677889999", currency: 'USD' });

const money2 = createBigNumberMoney({ amount: 100, currency: 'USD' });

const result = money.add(money2);

result.getAmount();
// => "111122223333444455556666777788890099"
```

```js

import { createBigNumberMoney } from '@easymoney/bignumber.js';

const money = createBigNumberMoney({ amount: "-222333444111155666677788899", currency: 'USD' });

const money1 = createBigNumberMoney({ amount: -100, currency: 'USD' });

const result = money.absolute();
// => "222333444111155666677788899"

const result1 = money1.absolute();
// => "100"

```