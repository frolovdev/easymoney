import BigNumber from "bignumber.js";
import { RoundingModes, RoundingModesType } from "@easymoney/core";

export function roundHalfEven(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_HALF_EVEN);
  return rounded;
}

export function roundHalfUp(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_HALF_UP);
  return rounded;
}

export function roundHalfDown(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_HALF_DOWN);
  return rounded;
}

export function roundNegativeInfinity(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_FLOOR);
  return rounded;
}

export function roundPositiveInfinity(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_CEIL);
  return rounded;
}

export function roundTowardsZero(number: BigNumber) {
  const rounded = new BigNumber(number).dp(0, BigNumber.ROUND_DOWN);
  return rounded;
}

export function roundAwayFromZero(number: BigNumber) {
  const rounded = number.dp(0, BigNumber.ROUND_UP);
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

  return roundTypes[roundType](new BigNumber(number));
}
