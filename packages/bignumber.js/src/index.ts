import { createMoneyUnit } from "@easymoney/money";
import { createBignumberCalculator } from "./bignumberCalculator";

const createBigNumberMoney = createMoneyUnit(createBignumberCalculator());

export { createBigNumberMoney };
