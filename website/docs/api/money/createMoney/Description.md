---
id: Description
title: description
hide_title: true
sidebar_label: Description
---
# Installation

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

# Description

The Money object only supports integer(ish) values on instantiation. The following is (not) supported. When a non-supported value is passed a Error will be thrown.

```js
import { createMoney } from "@easymoney/money"

// int is accepted
createMoney(500, "USD");

// string is accepted if integer
createMoney('500', "USD");

// string is accepted if fractional part is zero
createMoney('500.00', "USD");

// leading zero's are not accepted
createMoney('00500', "USD");

// multiple zero's are not accepted
createMoney('000', "USD");

// plus sign is not accepted
createMoney('+500', "USD");
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
