import { currencies } from "@easymoney/currencies";
import { createMoneyIntlFormatterUnit } from "./createMoneyIntlFormatter";
import { MoneyIntlFormatter } from "./types";

const createMoneyIntlFormatter = createMoneyIntlFormatterUnit(currencies);
export { createMoneyIntlFormatter, MoneyIntlFormatter };
