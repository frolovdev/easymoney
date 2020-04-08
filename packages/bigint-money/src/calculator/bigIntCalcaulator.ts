import { bigIntDivide, convertValueToBigInt, bigIntAbs } from "../number/";
import { assert } from "@easymoney/core";
import { BigIntCalculatorBase } from "./types";

import { BIG_INT_PRECISION_M } from "../consts/precisions";
import { RoundingModes } from "@easymoney/core";

export function createBigIntCalculator(): BigIntCalculatorBase {
  const instance = {
    compare,
    add,
    subtract,
    divide,
    multiply,
    absolute,
    mod,
    share
  };

  return instance;
}

const compare: BigIntCalculatorBase["compare"] = function compare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};

const add: BigIntCalculatorBase["add"] = function(amount, addend) {
  const result = amount + addend;

  assertBigInt(result);

  return result;
};

const subtract: BigIntCalculatorBase["subtract"] = function(
  amount,
  subtrahend
) {
  const result = amount - subtrahend;

  assertBigInt(result);

  return result;
};

function assertBigInt(value: any): asserts value is bigint {
  assert(typeof value === "bigint", new TypeError("result must be big int"));
}

const multiply: BigIntCalculatorBase["multiply"] = function(
  amount,
  multiplier,
  roundingMode
) {
  const multiplierBigInt = convertValueToBigInt(multiplier, roundingMode);
  const result = amount * multiplierBigInt;

  return divide(result, BIG_INT_PRECISION_M, roundingMode);
};

const divide: BigIntCalculatorBase["divide"] = function(
  amount,
  divisor,
  roundingMode
) {
  return bigIntDivide(amount, divisor, roundingMode);
};

function absolute(value: bigint): bigint {
  return bigIntAbs(value);
}

function mod(amount: bigint, divisor: bigint): bigint {
  return amount % divisor;
}

const share: BigIntCalculatorBase["share"] = function(amount, ratio, total) {
  const value = amount * ratio;

  return bigIntDivide(value, total, RoundingModes.FLOOR);
};
