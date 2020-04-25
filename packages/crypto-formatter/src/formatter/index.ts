import { createMoneyCryptoFormatterUnit } from "./createMoneyCryptoFormatter";
import { cryptoCurrencies } from "@easymoney/currencies";

const createMoneyCryptoFormatter = createMoneyCryptoFormatterUnit(
  cryptoCurrencies
);
export { createMoneyCryptoFormatter };
