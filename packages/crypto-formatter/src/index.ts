import { cryptoCurrencies } from "@easymoney/currencies";
import { createMoneyCryptoFormatterUnit } from "./createMoneyCryptoFormatter";
import { MoneyCryptoFormatter } from "./types";

const createMoneyIntlFormatter = createMoneyCryptoFormatterUnit(
  cryptoCurrencies
);
export { createMoneyIntlFormatter, MoneyCryptoFormatter };
