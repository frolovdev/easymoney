---
id: Description
title: description
hide_title: true
sidebar_label: Description
---

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