---
id: format
title: format
hide_title: true
sidebar_label: format
---

# format

**Example**

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