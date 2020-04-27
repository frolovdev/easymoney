import { CurrencyMap } from "./types";

export function covertCurrencyMapToArray<T>(currencyMap: CurrencyMap<T>) {
  return Object.keys(currencyMap).map(code => currencyMap[code]);
}
