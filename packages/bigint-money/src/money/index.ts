import { createBigIntMoneyUnit } from "./bigIntMoney";
import { createBigIntCalculator } from "../calculator/";

const createBigIntMoney = createBigIntMoneyUnit(createBigIntCalculator());

export { BigIntMoneyBase } from "./types";
export { createBigIntMoney, createBigIntMoneyUnit };
