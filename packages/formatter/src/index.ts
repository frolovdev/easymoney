import { covertCurrencyMapToArray, currenciesMap } from "@easymoney/currencies";

import { createMoneyIntlFormatterUnit } from "./createMoneyIntlFormatter";
import { MoneyIntlFormatter } from "./types";

const currencies = covertCurrencyMapToArray(currenciesMap);
const createMoneyIntlFormatter = createMoneyIntlFormatterUnit(currencies);
export { createMoneyIntlFormatter, MoneyIntlFormatter };
