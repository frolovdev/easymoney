import { createMoneyUnit } from "./money";
import { createCalculator } from "../calculator";

const createMoney = createMoneyUnit(createCalculator());

export { createMoneyUnit, createMoney };
