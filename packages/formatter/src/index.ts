import {
  convertCurrencyMapToArray,
  currenciesMap
} from "@easymoney/currencies";

import { createMoneyIntlFormatterUnit } from "./createMoneyIntlFormatter";
import { MoneyIntlFormatter } from "./types";

const currencies = convertCurrencyMapToArray(currenciesMap);
const createMoneyIntlFormatter = createMoneyIntlFormatterUnit(currencies);
export { createMoneyIntlFormatter, MoneyIntlFormatter };
