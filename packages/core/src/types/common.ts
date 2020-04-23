export type Currency = string | AnyCurrency;

export type Money<CT, Amount = string> = {
  amount: Amount;
  currency: CT extends string ? CT : CT extends AnyCurrency ? CT : never;
};

export interface CurrencyUnit {
  code: string;
  minorUnit: number;
}

export interface AnyCurrency extends CurrencyUnit {
  [key: string]: any;
}

export type CurrencyUnitISO = CurrencyUnit & {
  numericCode: number;
  currency: string;
};
