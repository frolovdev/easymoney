import { CalculatorBase } from "@easymoney/money";
import BigNumber from "bignumber.js";
import { customRound } from "./round";

export function createBignumberCalculator(): CalculatorBase {
  const instance = {
    compare,
    add,
    subtract,
    multiply,
    divide,
    ceil,
    absolute,
    floor,
    share,
    round,
    mod
  };
  return instance;
}

const compare: CalculatorBase["compare"] = function(a, b) {
  const result = new BigNumber(a).comparedTo(new BigNumber(b));
  return result === -1 ? -1 : result === 1 ? 1 : 0;
};

const add: CalculatorBase["add"] = function(amount, addend) {
  const sum = new BigNumber(amount).plus(new BigNumber(addend));
  const result = sum.toString(10);
  return result;
};

const subtract: CalculatorBase["subtract"] = function(amount, subtrahend) {
  const sub = new BigNumber(amount).minus(new BigNumber(subtrahend));
  const result = sub.toString(10);
  return result;
};

const multiply: CalculatorBase["multiply"] = function(amount, multiplier) {
  const mult = new BigNumber(amount).multipliedBy(new BigNumber(multiplier));
  const result = mult.toString(10);
  return result;
};

const divide: CalculatorBase["divide"] = function(amount, divisor) {
  const div = new BigNumber(amount).dividedBy(new BigNumber(divisor));
  const result = div.toString(10);
  return result;
};

const ceil: CalculatorBase["ceil"] = function(number) {
  const ceil = new BigNumber(number).dp(0, BigNumber.ROUND_CEIL);
  const result = ceil.toString(10);
  return result;
};

const absolute: CalculatorBase["absolute"] = function(number) {
  const abs = new BigNumber(number).abs();
  const result = abs.toString(10);
  return result;
};

const floor: CalculatorBase["floor"] = function(number) {
  const floor = new BigNumber(number).dp(0, BigNumber.ROUND_FLOOR);
  const result = floor.toString(10);
  return result;
};

const share: CalculatorBase["share"] = function(amount, ratio, total) {
  const share = new BigNumber(amount)
    .multipliedBy(new BigNumber(ratio))
    .dividedBy(new BigNumber(total))
    .dp(0, BigNumber.ROUND_FLOOR);
  const result = share.toString(10);
  return result;
};

const round: CalculatorBase["round"] = function(number, roundingMode) {
  const roundNum = customRound(number, roundingMode).toString(10);
  return roundNum;
};

const mod: CalculatorBase["mod"] = function(amount, divisor) {
  const mod = new BigNumber(amount).modulo(new BigNumber(divisor));
  const result = mod.toString(10);
  return result;
};
