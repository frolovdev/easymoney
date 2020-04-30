---
id: Description
title: description
hide_title: true
sidebar_label: Description
---

# Unit definitions



### MoneyIntlOptions

```ts

type MoneyIntlOptions = {
  currencyDisplay?: "code" | "symbol" | "name";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "currency" | "decimal";
};

```

### MoneyIntlFormatter


```ts

type MoneyIntlFormatter = {
  format(
    money: MoneyBase,
    locale?: string,
    options?: MoneyIntlOptions
  ): string;
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

### AnyCurrency

```ts

interface AnyCurrency extends CurrencyUnit {
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





