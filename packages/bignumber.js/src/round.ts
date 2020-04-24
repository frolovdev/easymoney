import BigNumber from "bignumber.js";
import { RoundingModes, RoundingModesType } from "@easymoney/core";

export function roundHalfEven(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_HALF_EVEN).toFixed();

  return rounded;
}

export function roundHalfUp(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_HALF_UP).toFixed();
  return rounded;
}

export function roundHalfDown(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_HALF_DOWN).toFixed();
  return rounded;
}

export function roundNegativeInfinity(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_FLOOR).toFixed();
  return rounded;
}

export function roundPositiveInfinity(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_CEIL).toFixed();
  return rounded;
}

export function roundTowardsZero(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_DOWN).toFixed();
  return rounded;
}

export function roundAwayFromZero(number: string | number) {
  const newNumber = new BigNumber(number);
  const rounded = newNumber.dp(0, BigNumber.ROUND_UP).toFixed();
  return rounded;
}

export function customRound(
  number: string | number,
  roundType: RoundingModesType
) {
  const roundTypes: { [T in keyof typeof RoundingModes]: Function } = {
    [RoundingModes.HALF_EVEN]: roundHalfEven,
    [RoundingModes.HALF_UP]: roundHalfUp,
    [RoundingModes.HALF_DOWN]: roundHalfDown,
    [RoundingModes.FLOOR]: roundNegativeInfinity,
    [RoundingModes.CEILING]: roundPositiveInfinity,
    [RoundingModes.DOWN]: roundTowardsZero,
    [RoundingModes.UP]: roundAwayFromZero
  };

  return roundTypes[roundType](number);
}
