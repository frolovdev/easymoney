---
id: Description
title: description
hide_title: true
sidebar_label: Description
---

# Installation

If you using this package check your Node JS version, it must be greater than v10.4.0. For compiling TypeScript specify ECMAScript target version are ES2020 or greater

```
npm install @easymoney/bigint-money
```
or
```
yarn add @easymoney/bigint-money
```
or

**CDN**
 - [@easymoney/bigint-money](https://unpkg.com/@easymoney/bigint-money)

# Description

The Money object only supports integer(ish) values on instantiation. The following is (not) supported. When a non-supported value is passed a Error will be thrown.

 ```js
 import { createBigIntMoney} from "@easymoney/bigint-money"

 // int is accepted
 createBigIntMoney(500, "USD");

 // string is accepted if integer
 createBigIntMoney('500', "USD");

 // string is accepted if fractional part is zero
 createBigIntMoney('500.00', "USD");

 // leading zero's are not accepted
 createBigIntMoney('00500', "USD");

 // multiple zero's are not accepted
 createBigIntMoney('000', "USD");

 // plus sign is not accepted
 createBigIntMoney('+500', "USD");
 ```

# Unit definitions

### BigIntMoneyBase


```ts

interface BigIntMoneyBase {
  getAmount: () => Money["amount"];
  getCurrency: () => Money["currency"];
  add(money: BigIntMoneyBase): BigIntMoneyBase;
  subtract(money: BigIntMoneyBase): BigIntMoneyBase;
  isSameCurrency(money: BigIntMoneyBase): boolean;
  equals(money: BigIntMoneyBase): boolean;
  compare(money: BigIntMoneyBase): 1 | 0 | -1;
  greaterThan(money: BigIntMoneyBase): boolean;
  greaterThanOrEqual(money: BigIntMoneyBase): boolean;
  lessThan(money: BigIntMoneyBase): boolean;
  lessThanOrEqual(money: BigIntMoneyBase): boolean;
  multiply(number: number | string | bigint,roundingMode?: RoundingModesType): BigIntMoneyBase;
  divide(number: number | string | bigint,roundingMode?: RoundingModesType): BigIntMoneyBase;
  allocate(ratios: number[]): BigIntMoneyBase[];
  allocateTo(number: number): BigIntMoneyBase[];
  getSource: () => bigint;
}

```


### Money

```ts

type Money = {
  amount: string;
  currency: string | Currency
};

```


### RoundingModesType

```ts

const RoundingModes = {
  HALF_EVEN: "HALF_EVEN",
  HALF_UP: "HALF_UP",
  HALF_DOWN: "HALF_DOWN",
  FLOOR: "FLOOR",
  CEILING: "CEILING",
  DOWN: "DOWN",
  UP: "UP"
};

type RoundingModesType = keyof typeof RoundingModes;

```
