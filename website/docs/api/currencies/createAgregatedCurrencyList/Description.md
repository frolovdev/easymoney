---
id: Description
title: description
hide_title: true
sidebar_label: Description
---
# Installation

```
npm install @easymoney/currencies
```
or
```
yarn add @easymoney/currencies
```
or

**CDN**
 - [@easymoney/currencies](https://unpkg.com/@easymoney/currencies)

# Description

This currency list contains, aggregation of currency lists.

# Unit definitions

### CurrencyList

```ts

interface CurrencyList {
  contains: (currency: Currency) => boolean;
  getCurrencies(): CurrencyMap;
  subUnitFor(currency: Currency): number;
}


```


### CurrencyMap


```ts

 type CurrencyMap<C> = {
  [code: string]: C;
};


```


### Currency

```ts

type Currency = string | AnyCurrencyUnit;

```

### AnyCurrencyUnit

```ts

interface AnyCurrencyUnit extends CurrencyUnit {
  [key: string]: any;
}

```

### CurrencyUnit

```ts

interface CurrencyUnit {
  code: string;
  minorUnit: number;
}

```
