export type Currency = string | AnyCurrency;

export type Money<Amount = string> = {
  amount: Amount;
  currency: Currency;
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
