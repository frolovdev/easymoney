import { RoundingModesType } from "@easymoney/core";

export interface BigIntCalculatorBase {
  compare: (a: bigint, b: bigint) => -1 | 1 | 0;
  add: (amount: bigint, addend: bigint) => bigint;
  subtract: (amount: bigint, subtrahend: bigint) => bigint;
  multiply: (
    amount: bigint,
    multiplier: bigint | string | number,
    roundingMode: RoundingModesType
  ) => bigint;
  divide: (
    amount: bigint,
    divisor: bigint,
    roundingMode: RoundingModesType
  ) => bigint;
  absolute(value: bigint): bigint;
  share: (amount: bigint, ratio: bigint, total: bigint) => bigint;
  mod(amount: bigint, divisor: bigint): bigint;
}
