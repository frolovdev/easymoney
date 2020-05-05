import { createMoneyCryptoFormatterUnit } from "./createMoneyCryptoFormatter";
import {
  cryptoCurrenciesMap,
  convertCurrencyMapToArray
} from "@easymoney/currencies";

const cryptoCurrencies = convertCurrencyMapToArray(cryptoCurrenciesMap);
const createMoneyCryptoFormatter = createMoneyCryptoFormatterUnit(
  cryptoCurrencies
);
export { createMoneyCryptoFormatter };
