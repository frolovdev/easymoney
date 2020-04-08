import { BigIntCalculatorBase } from "../types";

import { createBigIntCalculator } from "../bigIntCalcaulator";
import { RoundingModes } from "@easymoney/core";

describe("bigIntCalculator", () => {
  let calculator: BigIntCalculatorBase;
  beforeAll(() => {
    calculator = createBigIntCalculator();
  });
  describe("compare", () => {
    test.each<bigint[]>([
      [0n, 1n],
      [-1000n, 1000n]
    ])("should should it compares values less %i and %i)", (left, right) => {
      expect(calculator.compare(left, right)).toBeLessThan(0);
      expect(calculator.compare(right, left)).toBeGreaterThan(0);
    });
    test.each([[1n, 1n]])("should it compare a values %i %i", (left, right) => {
      expect(calculator.compare(left, right)).toEqual(0);
      expect(calculator.compare(right, left)).toEqual(0);
    });
  });

  describe("add", () => {
    it("should throw an error if result of sum is not bigint", () => {
      // @ts-ignore
      expect(() => calculator.add("45", BigInt(45))).toThrow();
    });

    it("should correct sum big ints", () => {
      expect(calculator.add(BigInt(40), BigInt(5))).toEqual(BigInt(45));
    });
  });

  describe("subtract", () => {
    it("should throw an Error when The result of arithmetic operation is not an bigint", () => {
      // @ts-ignore
      expect(() => calculator.subtract(BigInt(40), "0")).toThrow();
    });

    it("it should subtracts a value from another", () => {
      expect(calculator.subtract(1n, 1n)).toEqual(0n);
      expect(calculator.subtract(10n, 5n)).toEqual(5n);
    });
  });

  describe("divide", () => {
    describe("HALF_EVEN", () => {
      test.each([
        [10n, 9n, 1n],
        [11n, 8n, 1n],
        [10n, 7n, 1n],
        [6n, 4n, 2n],
        [10n, 5n, 2n],
        [10n, 6n, 2n]
      ])(
        "should correctly round positive even results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_EVEN)
          ).toEqual(result);
        }
      );

      test.each([
        [14n, 7n, 2n],
        [15n, 7n, 2n],
        [17n, 7n, 2n],
        [5n, 2n, 2n],
        [13n, 5n, 3n],
        [14n, 5n, 3n],
        [15n, 5n, 3n]
      ])(
        "should correctly round positive odd results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_EVEN)
          ).toEqual(result);
        }
      );

      test.each([
        [11n, -6n, -2n],
        [10n, -6n, -2n],
        [6n, -4n, -2n],
        [5n, -4n, -1n],
        [10n, -2n, -5n]
      ])(
        "should correctly round negative even results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_EVEN)
          ).toEqual(result);
        }
      );

      test.each([
        [12n, -6n, -2n],
        [12n, -5n, -2n],
        [10n, -4n, -2n],
        [13n, -5n, -3n],
        [14n, -5n, -3n],
        [15n, -5n, -3n]
      ])(
        "should correctly round negative odd results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_EVEN)
          ).toEqual(result);
        }
      );
    });

    describe("HALF_UP", () => {
      test.each([
        [10n, 9n, 1n],
        [11n, 8n, 1n],
        [10n, 7n, 1n],
        [6n, 4n, 2n],
        [6n, 6n, 1n],
        [10n, 6n, 2n]
      ])(
        "should correctly round positive even results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.HALF_UP)).toEqual(
            result
          );
        }
      );

      test.each([
        [14n, 7n, 2n],
        [15n, 7n, 2n],
        [17n, 7n, 2n],
        [5n, 2n, 3n],
        [13n, 5n, 3n],
        [14n, 5n, 3n],
        [15n, 5n, 3n]
      ])(
        "should correctly round positive odd results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.HALF_UP)).toEqual(
            result
          );
        }
      );

      test.each([
        [11n, -6n, -2n],
        [10n, -6n, -2n],
        [6n, -4n, -2n],
        [5n, -4n, -1n],
        [10n, -2n, -5n]
      ])(
        "should correctly round negative even results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.HALF_UP)).toEqual(
            result
          );
        }
      );

      test.each([
        [12n, -6n, -2n],
        [12n, -5n, -2n],
        [10n, -4n, -3n],
        [13n, -5n, -3n],
        [14n, -5n, -3n],
        [15n, -5n, -3n]
      ])(
        "should correctly round negative odd results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.HALF_UP)).toEqual(
            result
          );
        }
      );
    });

    describe("HALF_DOWN", () => {
      test.each([
        [10n, 9n, 1n],
        [11n, 8n, 1n],
        [10n, 7n, 1n],
        [6n, 4n, 1n],
        [6n, 6n, 1n],
        [10n, 6n, 2n]
      ])(
        "should correctly round positive even results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_DOWN)
          ).toEqual(result);
        }
      );

      test.each([
        [14n, 7n, 2n],
        [15n, 7n, 2n],
        [17n, 7n, 2n],
        [5n, 2n, 2n],
        [13n, 5n, 3n],
        [14n, 5n, 3n],
        [15n, 5n, 3n]
      ])(
        "should correctly round positive odd results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_DOWN)
          ).toEqual(result);
        }
      );

      test.each([
        [11n, -6n, -2n],
        [10n, -6n, -2n],
        [6n, -4n, -1n],
        [5n, -4n, -1n],
        [10n, -2n, -5n]
      ])(
        "should correctly round negative even results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_DOWN)
          ).toEqual(result);
        }
      );

      test.each([
        [12n, -6n, -2n],
        [12n, -5n, -2n],
        [10n, -4n, -2n],
        [13n, -5n, -3n],
        [14n, -5n, -3n],
        [15n, -5n, -3n]
      ])(
        "should correctly round negative odd results",
        (left, right, result) => {
          expect(
            calculator.divide(left, right, RoundingModes.HALF_DOWN)
          ).toEqual(result);
        }
      );
    });

    describe("roundNegativeInfinity", () => {
      test.each([
        [10n, 9n, 1n],
        [11n, 8n, 1n],
        [10n, 7n, 1n],
        [6n, 4n, 1n],
        [6n, 6n, 1n],
        [10n, 6n, 1n]
      ])(
        "should correctly round positive even results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.FLOOR)).toEqual(
            result
          );
        }
      );

      test.each([
        [14n, 7n, 2n],
        [15n, 7n, 2n],
        [17n, 7n, 2n],
        [5n, 2n, 2n],
        [13n, 5n, 2n],
        [14n, 5n, 2n],
        [15n, 5n, 3n]
      ])(
        "should correctly round positive odd results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.FLOOR)).toEqual(
            result
          );
        }
      );

      test.each([
        [11n, -6n, -2n],
        [10n, -6n, -2n],
        [6n, -4n, -2n],
        [5n, -4n, -2n],
        [10n, -2n, -5n]
      ])(
        "should correctly round negative even results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.FLOOR)).toEqual(
            result
          );
        }
      );

      test.each([
        [12n, -6n, -2n],
        [12n, -5n, -3n],
        [10n, -4n, -3n],
        [13n, -5n, -3n],
        [14n, -5n, -3n],
        [15n, -5n, -3n]
      ])(
        "should correctly round negative odd results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.FLOOR)).toEqual(
            result
          );
        }
      );
    });

    describe("roundPositiveInfinity, CEILING", () => {
      test.each([
        [10n, 9n, 2n],
        [11n, 8n, 2n],
        [10n, 7n, 2n],
        [6n, 4n, 2n],
        [6n, 6n, 1n],
        [10n, 6n, 2n],
        [14n, 7n, 2n],
        [15n, 7n, 3n],
        [17n, 7n, 3n],
        [5n, 2n, 3n],
        [13n, 5n, 3n],
        [14n, 5n, 3n],
        [15n, 5n, 3n]
      ])(
        "it should correctly round positive results %s %s %s",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.CEILING)).toEqual(
            result
          );
        }
      );

      test.each([
        [11n, -6n, -1n],
        [10n, -6n, -1n],
        [6n, -4n, -1n],
        [5n, -4n, -1n],
        [10n, -2n, -5n],
        [12n, -6n, -2n],
        [12n, -5n, -2n],
        [10n, -4n, -2n],
        [13n, -5n, -2n],
        [14n, -5n, -2n],
        [15n, -5n, -3n]
      ])(
        "it should correctly round negative results %s %s %s",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.CEILING)).toEqual(
            result
          );
        }
      );
    });

    describe("roundTowardsZero, DOWN", () => {
      test.each([
        [10n, 9n, 1n],
        [11n, 8n, 1n],
        [10n, 7n, 1n],
        [6n, 4n, 1n],
        [6n, 6n, 1n],
        [10n, 6n, 1n],
        [14n, 7n, 2n],
        [15n, 7n, 2n],
        [17n, 7n, 2n],
        [5n, 2n, 2n],
        [13n, 5n, 2n],
        [14n, 5n, 2n],
        [15n, 5n, 3n]
      ])(
        "it should correctly round positive results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.DOWN)).toEqual(
            result
          );
        }
      );

      test.each([
        [11n, -6n, -1n],
        [10n, -6n, -1n],
        [6n, -4n, -1n],
        [5n, -4n, -1n],
        [10n, -2n, -5n],
        [12n, -6n, -2n],
        [12n, -5n, -2n],
        [10n, -4n, -2n],
        [13n, -5n, -2n],
        [14n, -5n, -2n],
        [15n, -5n, -3n]
      ])(
        "it should correctly round negative results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.DOWN)).toEqual(
            result
          );
        }
      );
    });

    describe("roundAwayFromZero, UP", () => {
      test.each([
        [10n, 9n, 2n],
        [11n, 8n, 2n],
        [10n, 7n, 2n],
        [6n, 4n, 2n],
        [6n, 6n, 1n],
        [10n, 6n, 2n],
        [14n, 7n, 2n],
        [15n, 7n, 3n],
        [17n, 7n, 3n],
        [5n, 2n, 3n],
        [13n, 5n, 3n],
        [14n, 5n, 3n],
        [15n, 5n, 3n]
      ])(
        "it should correctly round positive results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.UP)).toEqual(
            result
          );
        }
      );

      test.each([
        [11n, -6n, -2n],
        [10n, -6n, -2n],
        [6n, -4n, -2n],
        [5n, -4n, -2n],
        [10n, -2n, -5n],
        [12n, -6n, -2n],
        [12n, -5n, -3n],
        [10n, -4n, -3n],
        [13n, -5n, -3n],
        [14n, -5n, -3n],
        [15n, -5n, -3n]
      ])(
        "it should correctly round negative results",
        (left, right, result) => {
          expect(calculator.divide(left, right, RoundingModes.UP)).toEqual(
            result
          );
        }
      );
    });
  });

  describe("absolute", () => {
    it("should return absolute value ", () => {
      expect(calculator.absolute(10n)).toEqual(10n);
      expect(calculator.absolute(-10n)).toEqual(10n);
    });
  });

  describe("mod", () => {
    it("should return module of value", () => {
      expect(calculator.mod(3n, 2n)).toEqual(1n);
    });
  });

  describe("share", () => {
    it("should correct share value", () => {
      expect(calculator.share(100n, 1n, 3n)).toEqual(33n);
    });
  });
});
