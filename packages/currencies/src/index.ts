import { currencies, currenciesMap, cryptoCurrenciesMap } from "./currencies/";

import { createCurrencyList } from "./createCurrencyList";
const isoCurrencyList = createCurrencyList(currencies);

// exports

export { isoCurrencyList };
export { createAgregatedCurrencyList } from "./createAgregatedCurrencyList";
export {
  CurrencyList,
  CurrencyListISO,
  CurrencyMap,
  CurrencyUnitCrypto
} from "./types";
export { convertCurrencyMapToArray } from "./convertCurrencyMapToArray";
export { CurrencyUnit, CurrencyUnitISO } from "@easymoney/core";
export { currenciesMap, createCurrencyList };
export { cryptoCurrenciesMap };
