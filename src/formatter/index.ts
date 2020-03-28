import { currencies } from "../currencies";
import { createMoneyIntlFormatterUnit } from "./createMoneyIntlFormatter";

const createMoneyIntlFormatter = createMoneyIntlFormatterUnit(currencies);
export { createMoneyIntlFormatter };
