export type Currency = string | AnyCurrency;

export type Money<CurrencyT, Amount = string> = {
  amount: Amount;
  currency: CurrencyT extends string
    ? CurrencyT
    : CurrencyT extends AnyCurrency
    ? CurrencyT
    : never;
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
