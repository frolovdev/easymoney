---
id: Description
title: description
hide_title: true
sidebar_label: Description
---

# Unit definitions



### createBigIntCalculator

```ts

function createBigIntCalculator(): BigIntCalculatorBase {
  const instance = {
    compare,
    add,
    subtract,
    divide,
    multiply,
    absolute,
    mod,
    share
  };

  return instance;
}


```


### BigIntCalculatorBase


```ts

export interface BigIntCalculatorBase {
  compare: (a: bigint, b: bigint) => -1 | 1 | 0;
  add: (amount: bigint, addend: bigint) => bigint;
  subtract: (amount: bigint, subtrahend: bigint) => bigint;
  multiply: (amount: bigint, multiplier: bigint | string | number, roundingMode: RoundingModesType) => bigint;
  divide: (amount: bigint,divisor: bigint,roundingMode: RoundingModesType) => bigint;
  absolute(value: bigint): bigint;
  share: (amount: bigint, ratio: bigint, total: bigint) => bigint;
  mod(amount: bigint, divisor: bigint): bigint;
}


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