import {
  currencies,
  currenciesMap,
  cryptoCurrencies,
  cryptoCurrenciesMap
} from "./currencies/";

import { createCurrencyList } from "./createCurrencyList";
const isoCurrencyList = createCurrencyList(currencies);

export { isoCurrencyList };
export { createAgregatedCurrencyList } from "./createAgregatedCurrencyList";
export {
  CurrencyList,
  CurrencyListISO,
  CurrencyMap,
  CurrencyUnitCrypto
} from "./types";
export { CurrencyUnit, CurrencyUnitISO } from "@easymoney/core";
export { currencies, currenciesMap, createCurrencyList };
export { cryptoCurrencies, cryptoCurrenciesMap };
