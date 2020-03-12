import { createMoneyUnit } from "./money";
import { createCalculator } from "../calculator";
import { createBigIntCalculator } from "../calculator";
import { createBigIntMoneyUnit } from "./bigIntMoney";
import { MoneyBase, BigIntMoneyBase } from "./types";

// TODO: rounding mode?
const createBigIntMoney = createBigIntMoneyUnit(createBigIntCalculator());
const createMoney = createMoneyUnit(createCalculator());

export {
  createMoneyUnit,
  createMoney,
  createBigIntMoney,
  MoneyBase,
  BigIntMoneyBase
};
