import { fromNumber } from "../number";

import { customRound } from "./round";
import { assert } from "@easymoney/core";
import { CalculatorBase } from "./types";

export function createCalculator(): CalculatorBase {
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

const subtract: CalculatorBase["subtract"] = function(amount, subtrahend) {
  const result = Number(amount) - Number(subtrahend);

  assertInteger(result);

  return String(result);
};

const compare: CalculatorBase["compare"] = function(a, b) {
  const aNumber = Number(a);
  const bNumber = Number(b);
  return aNumber < bNumber ? -1 : aNumber > bNumber ? 1 : 0;
};

const add: CalculatorBase["add"] = function(amount, addend) {
  const result = Number(amount) + Number(addend);

  assertInteger(result);

  return String(result);
};

const multiply: CalculatorBase["multiply"] = function(amount, multiplier) {
  const result = Number(amount) * Number(multiplier);

  assertIntegerBounds(result);

  return fromNumber(result).toString();
};

function castInteger(amount: any) {
  assertIntegerBounds(amount);

  return String(parseInt(String(amount), 10));
}

function assertInteger(amount: any) {
  const newAmount = Number(amount);
  assert(
    typeof newAmount === "number" && Number.isInteger(newAmount),
    new TypeError("The result of arithmetic operation is not an integer")
  );
}

function assertIntegerBounds(amount: any): asserts amount is number {
  assert(
    !(amount > Number.MAX_SAFE_INTEGER),
    new RangeError(
      "You overflowed the maximum allowed integer (Number.MAX_SAFE_INTEGER)"
    )
  );
  assert(
    !(amount < -Number.MAX_SAFE_INTEGER),
    new RangeError(
      "You underflowed the minimum allowed integer (-Number.MAX_SAFE_INTEGER)"
    )
  );
}

const ceil: CalculatorBase["ceil"] = function(number) {
  return castInteger(Math.ceil(Number(number)));
};

const floor: CalculatorBase["floor"] = function(number) {
  return castInteger(Math.floor(Number(number)));
};

const divide: CalculatorBase["divide"] = function(amount, divisor) {
  const result = Number(amount) / Number(divisor);

  assertIntegerBounds(result);

  return fromNumber(result).toString();
};

const absolute: CalculatorBase["absolute"] = function(number) {
  const result = Math.abs(Number(number));

  assertIntegerBounds(result);

  return String(result);
};

const round: CalculatorBase["round"] = function(number, roundingMode) {
  return castInteger(customRound(Number(number), roundingMode));
};

const share: CalculatorBase["share"] = function(amount, ratio, total) {
  return castInteger(
    Math.floor((Number(amount) * Number(ratio)) / Number(total))
  );
};

const mod: CalculatorBase["mod"] = function(amount, divisor) {
  const result = Number(amount) % Number(divisor);

  assertIntegerBounds(result);

  return String(result);
};
