import { isEven, isHalf } from "../number/number";
import { RoundingModes, RoundingModesType } from "@easymoney/core";

export function roundHalfEven(number: number) {
  const rounded = Math.round(number);
  return isHalf(number) ? (isEven(rounded) ? rounded : rounded - 1) : rounded;
}

export function roundHalfUp(number: number) {
  return -Math.sign(number) * Math.ceil(-Math.abs(number) - 0.5);
}

export function roundHalfDown(number: number) {
  return -Math.sign(number) * Math.floor(-Math.abs(number) + 0.5);
}

export function roundNegativeInfinity(number: number) {
  return -Math.ceil(-number);
}

export function roundPositiveInfinity(number: number) {
  return -Math.floor(-number);
}

export function roundTowardsZero(number: number) {
  return -Math.sign(number) * Math.ceil(-Math.abs(number));
}

export function roundAwayFromZero(number: number) {
  return -Math.sign(number) * Math.floor(-Math.abs(number));
}

export function customRound(number: number, roundType: RoundingModesType) {
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
