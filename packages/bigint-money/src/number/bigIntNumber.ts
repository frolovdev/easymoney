import { BIG_INT_PRECISION, BIG_INT_PRECISION_M } from "../consts/precisions";
import { RoundingModesType, RoundingModes } from "@easymoney/core";

export function bigIntAbs(value: bigint) {
  return value > 0 ? value : -value;
}

export function convertValueToBigInt(
  value: string | number | bigint,
  roundinMode: RoundingModesType
): bigint {
  switch (typeof value) {
    case "string":
    case "number":
      const newValue = String(value);
      const parts = newValue.match(/^(\+|\-)?([0-9]*)?(\.([0-9]*))?$/);

      if (!parts) {
        throw new TypeError(
          "Input string must follow the pattern (-)##.## or -##"
        );
      }

      const signPart: "-" | "+" | undefined = <undefined | "-">parts[1];
      const integerPart: string | undefined = parts[2];
      const fracPart: string | undefined = parts[4];

      let output: bigint;

      if (integerPart === undefined) {
        output = 0n;
      } else {
        output = BigInt(integerPart) * BIG_INT_PRECISION_M;
      }

      if (fracPart !== undefined) {
        // The fractional part
        const precisionDifference: bigint =
          BIG_INT_PRECISION - BigInt(fracPart.length);

        if (precisionDifference >= 0) {
          // Add 0's
          output += BigInt(fracPart) * 10n ** precisionDifference;
        } else {
          // Remove 0's
          output += bigIntDivide(
            BigInt(fracPart),
            10n ** -precisionDifference,
            roundinMode
          );
        }
      }

      if (signPart === "-") {
        output *= -1n;
      }
      return output;
    case "bigint":
      return value * BIG_INT_PRECISION_M;

    default:
      throw new TypeError("value must be a safe integer, bigint or string");
  }
}

export const bigIntDivide = function(
  a: bigint,
  b: bigint,
  roundingMode: RoundingModesType
): bigint {
  const aAbs = bigIntAbs(a);
  const bAbs = bigIntAbs(b);

  let result = aAbs / bAbs;
  const rem = aAbs % bAbs;

  const sign = a > 0 !== b > 0 ? -1 : 1;

  if (
    roundingMode === RoundingModes.HALF_DOWN ||
    roundingMode === RoundingModes.HALF_UP ||
    roundingMode === RoundingModes.HALF_EVEN
  ) {
    const doubleRem = rem * 2n;

    if (roundingMode === RoundingModes.HALF_DOWN) {
      if (doubleRem > bAbs) {
        result++;
      }
    } else if (roundingMode === RoundingModes.HALF_UP) {
      if (doubleRem > bAbs) {
        result++;
      } else if (doubleRem === bAbs) {
        result++;
      }
    } else if (roundingMode === RoundingModes.HALF_EVEN) {
      if (doubleRem > bAbs) {
        result++;
      } else if (doubleRem === bAbs) {
        if (result % 2n === 1n) {
          result++;
        }
      }
    }
  } else {
    if (rem > 0n) {
      if (roundingMode === RoundingModes.FLOOR) {
        if (sign === -1) {
          result++;
        }
      } else if (roundingMode === RoundingModes.CEILING) {
        if (sign === 1) {
          result++;
        }
      } else if (roundingMode === RoundingModes.DOWN) {
        // стандартное поведение бигинта
      } else if (roundingMode === RoundingModes.UP) {
        result++;
      }
    }
  }

  return result * BigInt(sign);
};
