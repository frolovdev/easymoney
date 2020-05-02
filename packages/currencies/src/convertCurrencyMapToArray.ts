import { CurrencyMap } from "./types";

export function convertCurrencyMapToArray<T>(currencyMap: CurrencyMap<T>) {
  return Object.keys(currencyMap).map(code => currencyMap[code]);
}
