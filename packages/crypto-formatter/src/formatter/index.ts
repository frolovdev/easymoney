import { createMoneyCryptoFormatterUnit } from "./createMoneyCryptoFormatter";
import {
  cryptoCurrenciesMap,
  covertCurrencyMapToArray
} from "@easymoney/currencies";

const cryptoCurrencies = covertCurrencyMapToArray(cryptoCurrenciesMap);
const createMoneyCryptoFormatter = createMoneyCryptoFormatterUnit(
  cryptoCurrencies
);
export { createMoneyCryptoFormatter };
