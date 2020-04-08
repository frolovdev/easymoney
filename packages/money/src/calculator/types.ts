import { RoundingModesType } from "@easymoney/core";

export interface CalculatorBase {
  compare: (a: string, b: string) => -1 | 1 | 0;
  add: (amount: string, addend: string) => string;
  subtract: (amount: string, subtrahend: string) => string;
  multiply: (amount: string, multiplier: number | string) => string;
  divide: (amount: string, divisor: number | string) => string;
  ceil: (number: string) => string;
  absolute: (number: string) => string;
  floor: (number: string) => string;
  share: (
    amount: string,
    ratio: number | string,
    total: number | string
  ) => string;
  round: (number: number | string, roundingMode: RoundingModesType) => string;
  mod: (amount: string, divisor: number | string) => string;
}
