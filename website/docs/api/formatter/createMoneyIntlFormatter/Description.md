---
id: Description
title: description
hide_title: true
sidebar_label: Description
---
# Installation

```
npm install @easymoney/formatter
```
or
```
yarn add @easymoney/formatter
```
or

**CDN**
 - [@easymoney/formatter](https://unpkg.com/@easymoney/formatter)

# Description

As its name says, this formatter requires and uses ```toLocaleString```. In order to provide the correct subunit for the specific currency, you should also provide the specific currency repository.

Please be aware that using the intl extension can give different results in different environments.

# Unit definitions

### MoneyIntlOptions

```ts

type MoneyIntlOptions = {
  currencyDisplay?: "code" | "symbol" | "name";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "currency" | "decimal";
  hideFractionIfZero?: boolean;
};

```

### MoneyIntlFormatter


```ts

type MoneyIntlFormatter = {
  format(money: MoneyBase,locale?: string, options?: MoneyIntlOptions): string;
};

```


### CurrencyUnit


```ts

 interface CurrencyUnit {
  code: string;
  minorUnit: number;
}


```


### CurrencyUnitISO

```ts

type CurrencyUnitISO = CurrencyUnit & {
  numericCode: number;
  currency: string;
};


```

### AnyCurrencyUnit

```ts

interface AnyCurrencyUnit extends CurrencyUnit {
  [key: string]: any;
}

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
