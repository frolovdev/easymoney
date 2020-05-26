---
id: Description
title: description
hide_title: true
sidebar_label: Description
---
# Installation

```
npm install @easymoney/crypto-formatter
```
or
```
yarn add @easymoney/crypto-formatter
```
or

**CDN**
 - [@easymoney/crypto-formatter](https://unpkg.com/@easymoney/crypto-formatter)

# Description
Since Money is not ISO currency specific, you can construct a currency object by using the code XBT or any another. For Bitcoin there is also a formatter and a parser available. The subunit is 8 for a Bitcoin.

# Unit definitions

### CryptoOptions

```ts

type CryptoOptions = {
  fractionDigits?: number;
  currencyPosition?: -1 | 1;
  space?: boolean;
};

```

### MoneyCryptoFormatter


```ts

type MoneyCryptoFormatter = {
  format(money: MoneyBase, options?: CryptoOptions): string;
};

```


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
