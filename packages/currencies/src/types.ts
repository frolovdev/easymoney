import { Currency, CurrencyUnitISO, CurrencyUnit } from "@easymoney/core";

export type CurrencyUnitCrypto = CurrencyUnit & { symbol: string } & {
  [key: string]: any;
};

export interface CurrencyList<C> {
  contains: (currency: Currency) => boolean;
  getCurrencies(): CurrencyMap<C>;
  subUnitFor(currency: Currency): number;
}

export type CurrencyListISO = CurrencyList<CurrencyUnitISO>;

export type CurrencyMap<C> = {
  [code: string]: C;
};
