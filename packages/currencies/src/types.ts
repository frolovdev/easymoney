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

export interface CurrencyList<C> {
  contains: (currency: AnyCurrency | string) => boolean;
  getCurrencies(): CurrencyMap<C>;
  subUnitFor(currency: AnyCurrency | string): number;
}

export type CurrencyListISO = CurrencyList<CurrencyUnitISO>;

export type CurrencyMap<C> = {
  [code: string]: C;
};
