---
id: Description
title: description
hide_title: true
sidebar_label: Description
---
# Installation

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

# Description

The Money object only supports integer(ish) values on instantiation. The following is (not) supported. When a non-supported value is passed a Error will be thrown.

```js

import { createBigNumberMoney } from "@easymoney/bignumber.js"

// int is accepted
createBigNumberMoney(500, "USD");

// string is accepted if integer
createBigNumberMoney('500', "USD");

// string is accepted if fractional part is zero
createBigNumberMoney('500.00', "USD");

// leading zero's are not accepted
createBigNumberMoney('00500', "USD");

// multiple zero's are not accepted
createBigNumberMoney('000', "USD");

// plus sign is not accepted
createBigNumberMoney('+500', "USD");
```

# Unit definitions

### MoneyBase

```ts

interface MoneyBase {
  getAmount: () => Money["amount"];
  getCurrency: () => Money["currency"];
  add(money: MoneyBase): MoneyBase;
  subtract(money: MoneyBase): MoneyBase;
  isSameCurrency(money: MoneyBase): boolean;
  equals(money: MoneyBase): boolean;
  compare(money: MoneyBase): 1 | 0 | -1;
  greaterThan(money: MoneyBase): boolean;
  greaterThanOrEqual(money: MoneyBase): boolean;
  lessThan(money: MoneyBase): boolean;
  lessThanOrEqual(money: MoneyBase): boolean;
  multiply(number: number | string, roundingMode?: RoundingModesType): MoneyBase;
  divide(number: number | string, roundingMode?: RoundingModesType): MoneyBase;
  mod(number: MoneyBase): MoneyBase;
  allocate(ratios: number[]): MoneyBase[];
  allocateTo(number: number): MoneyBase[];
  ratioOf(ratioOf: MoneyBase): string;
  absolute(): MoneyBase;
  negative(): MoneyBase;
  isZero(): boolean;
  isPositive(): boolean;
  isNegative(): boolean;
}

```


### Money

```ts

type Money = {
  amount: string;
  currency: string | Currency
};

```
