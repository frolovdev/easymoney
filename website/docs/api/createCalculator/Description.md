---
id: Description
title: description
hide_title: true
sidebar_label: Description
---

# Unit definitions



### CryptoOptions

```ts

type CryptoOptions = {
  fractionDigits?: number;
  currencyPosition?: -1 | 1;
  space?: boolean;
};

```

### createCalculator


```ts

function createCalculator(): CalculatorBase {
  const instance = {
    compare,
    add,
    subtract,
    multiply,
    divide,
    ceil,
    absolute,
    floor,
    share,
    round,
    mod
  };

  return instance;
}

```


### CalculatorBase

```ts

export interface CalculatorBase {
  compare: (a: string, b: string) => -1 | 1 | 0;
  add: (amount: string, addend: string) => string;
  subtract: (amount: string, subtrahend: string) => string;
  multiply: (amount: string, multiplier: number | string) => string;
  divide: (amount: string, divisor: number | string) => string;
  ceil: (number: string) => string;
  absolute: (number: string) => string;
  floor: (number: string) => string;
  share: (amount: string,ratio: number | string, total: number | string) => string;
  round: (number: number | string, roundingMode: RoundingModesType) => string;
  mod: (amount: string, divisor: number | string) => string;
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


