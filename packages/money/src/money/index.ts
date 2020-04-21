import { createMoneyUnit } from "./money";
import { createCalculator } from "../calculator";
import { MoneyBase, CreateMoney } from "./types";

const createMoney = createMoneyUnit(createCalculator());

export { createMoneyUnit, createMoney, MoneyBase, CreateMoney };
