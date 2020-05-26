---
id: methods
title: Methods
hide_title: true
sidebar_label: methods
---

## `format(money,option?)`

#### Description

It is often necessary that you display the money value somewhere, probably in a specific format. This is where formatters help you. You can turn a money object into a human readable string.

#### Arguments

1. `money` ([MoneyBase](Description.md#moneybase))
2. `option?` ([CryptoOptions](Description.md#cryptooptions))

#### Returns

`string`


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