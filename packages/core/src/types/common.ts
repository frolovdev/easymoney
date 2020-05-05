export type Currency = string | AnyCurrencyUnit;

export type Money<CT, Amount = string> = {
  amount: Amount;
  currency: CT extends string ? CT : CT extends AnyCurrencyUnit ? CT : never;
};

export interface CurrencyUnit {
  code: string;
  minorUnit: number;
}

export interface AnyCurrencyUnit extends CurrencyUnit {
  [key: string]: any;
}

export type CurrencyUnitISO = CurrencyUnit & {
  numericCode: number;
  currency: string;
};
