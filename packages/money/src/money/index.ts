import { createMoneyUnit } from "./money";
import { createCalculator } from "../calculator";
import { MoneyBase } from "./types";

const createMoney = createMoneyUnit(createCalculator());

export { createMoneyUnit, createMoney, MoneyBase };
