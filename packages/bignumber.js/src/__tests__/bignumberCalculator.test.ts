import { createBignumberCalculator } from "../bignumberCalculator";
import { RoundingModes, RoundingModesType } from "@easymoney/core";
import { CalculatorBase } from "@easymoney/money";

describe("calculator", () => {
  describe("methods of calculator", () => {
    let calculator: CalculatorBase;
    beforeEach(() => {
      calculator = createBignumberCalculator();
    });

    it("should contain 10 public methods", () => {
      expect(Object.keys(calculator).length).toEqual(11);
    });

    describe("add", () => {
      it("should adds two values", () => {
        expect(
          calculator.add(
            "1111222233334444555566667777",
            "1111222233334444555566667777"
          )
        ).toEqual("2222444466668889111133335554");
        expect(calculator.add("-10", "5")).toEqual("-5");
        expect(calculator.add("10", "5")).toEqual("15");
      });
    });

    describe("subtract", () => {
      it("it should subtracts a value from another", () => {
        expect(calculator.subtract("1", "1")).toEqual("0");
        expect(calculator.subtract("10", "5")).toEqual("5");
        expect(
          calculator.subtract(
            "1111222233334444555566667777",
            "22224444666611119999"
          )
        ).toEqual("1111222211109999888955547778");
      });
    });
    describe("multiply", () => {
      it("should multiplies a value by another", () => {
        expect(calculator.multiply("1", 1.5)).toEqual("1.5");
        expect(calculator.multiply("100", 0.29)).toEqual("29");
        expect(calculator.multiply("10", 0.029)).toEqual("0.29");
        expect(calculator.multiply("100", 0.029)).toEqual("2.9");
        expect(calculator.multiply("1000", 0.29)).toEqual("290");
        expect(calculator.multiply("1000", 0.029)).toEqual("29");
        expect(calculator.multiply("1000", 0.0029)).toEqual("2.9");
        expect(calculator.multiply("2000", 0.0029)).toEqual("5.8");
        expect(calculator.multiply("1", 0.006597)).toEqual("0.006597");
        expect(
          calculator.multiply(
            "1111222233334444555566667777",
            "22224444666611119999"
          )
        ).toEqual("24696297037049393827160493807405184938313572223");
      });
    });
    describe("divide", () => {
      test.each([
        [6, 3, "2"],
        [100, 25, "4"],
        [2, 4, "0.5"],
        [20, 0.5, "40"],
        [2, 0.5, "4"],
        [181, 17, "10.64705882352941176471"],
        [98, 28, "3.5"],
        [98, 25, "3.92"],
        [98, 24, "4.08333333333333333333"],
        [1, 5.1555, "0.19396760740956260305"],
        [
          "1111222233334444555566667777",
          "22224444666611119999",
          "50000000.00017496750425038723"
        ]
      ])(
        "should it divides a value by another .divide(%i, %i)",
        (a, b, expected) => {
          const serializedNumberInstance = calculator.divide(
            (a as unknown) as string,
            b
          );

          expect(serializedNumberInstance).toEqual(
            (expected as string).substr(0, serializedNumberInstance.length)
          );
        }
      );

      test.each([
        [6, 3, "2"],
        [100, 25, "4"],
        [2, 4, "0.5"],
        [20, 0.5, "40"],
        [2, 0.5, "4"],
        [98, 28, "3.5"],
        [98, 25, "3.92"]
      ])(
        "should it divides a value by another exact .divide(%i, %i)",
        (a, b, expected) => {
          const serializedNumberInstance = calculator.divide(
            (a as unknown) as string,
            b as number
          );

          expect(serializedNumberInstance).toEqual(expected);
        }
      );
    });

    describe("ceil", () => {
      test.each([
        [1.2, "2"],
        [-1.2, "-1"],
        [2.0, "2"]
      ])("should it ceils a value %i to %i)", (a, expected) => {
        expect(calculator.ceil((a as unknown) as string)).toEqual(expected);
      });
    });

    describe("floor", () => {
      test.each([
        [2.7, "2"],
        [-2.7, "-3"],
        [2.0, "2"]
      ])("should floors a value %i to %i)", (a, expected) => {
        expect(calculator.floor((a as unknown) as string)).toEqual(expected);
      });
    });

    describe("absolute", () => {
      test.each([
        [2, "2"],
        [-2, "2"]
      ])(
        "should calculates the absolute value of %i result %i)",
        (a, expected) => {
          expect(calculator.absolute((a as unknown) as string)).toEqual(
            expected
          );
        }
      );
    });
    describe("share", () => {
      it("should it shares a value", () => {
        expect(calculator.share("10", 2, 4)).toEqual("5");
      });
    });
    describe("round", () => {
      const roundExamples = [
        [
          "2222333334444555566667777.6",
          RoundingModes.HALF_EVEN,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.HALF_EVEN,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.HALF_EVEN,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667777.1",
          RoundingModes.HALF_UP,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.HALF_UP,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.HALF_UP,
          "2222333334444555566667779"
        ],

        [
          "2222333334444555566667777.1",
          RoundingModes.HALF_DOWN,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.HALF_DOWN,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.HALF_DOWN,
          "2222333334444555566667778"
        ],

        [
          "2222333334444555566667777.1",
          RoundingModes.FLOOR,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.FLOOR,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.FLOOR,
          "2222333334444555566667778"
        ],

        [
          "2222333334444555566667777.1",
          RoundingModes.CEILING,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.CEILING,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.CEILING,
          "2222333334444555566667779"
        ],

        [
          "2222333334444555566667777.1",
          RoundingModes.DOWN,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.DOWN,
          "2222333334444555566667777"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.DOWN,
          "2222333334444555566667778"
        ],

        [
          "2222333334444555566667777.1",
          RoundingModes.UP,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667777.5",
          RoundingModes.UP,
          "2222333334444555566667778"
        ],
        [
          "2222333334444555566667778.5",
          RoundingModes.UP,
          "2222333334444555566667779"
        ],

        [2.5, RoundingModes.HALF_UP, "3"],
        [3.5, RoundingModes.HALF_EVEN, "4"],
        [-2.6, RoundingModes.HALF_EVEN, "-3"],
        [-2.5, RoundingModes.HALF_EVEN, "-2"],
        [-3.5, RoundingModes.HALF_EVEN, "-4"],
        [2, RoundingModes.HALF_EVEN, "2"],
        [2.5, RoundingModes.HALF_DOWN, "2"],
        [2.6, RoundingModes.HALF_DOWN, "3"],
        [-2.5, RoundingModes.HALF_DOWN, "-2"],
        [-2.6, RoundingModes.HALF_DOWN, "-3"],
        [2.2, RoundingModes.HALF_UP, "2"],
        [2.5, RoundingModes.HALF_UP, "3"],
        [2, RoundingModes.HALF_UP, "2"],
        [-2.5, RoundingModes.HALF_UP, "-3"]
      ];
      test.each(roundExamples)(
        "should it round a value %f with %s to %i)",
        (value, mode, expected) => {
          expect(
            calculator.round(value as number, mode as RoundingModesType)
          ).toEqual(expected);
        }
      );
    });

    describe("compare", () => {
      test.each([
        [0, 1],
        ["0", "1"],
        ["0.0005", "1"],
        ["0.000000000000000000000000005", "1"],
        ["-1000", "1000", -1],
        ["121212121212121212121212", "212121212121212121212121"]
      ])(
        "should should it compares values less %i and %i)",
        // @ts-ignore
        (left, right) => {
          expect(
            calculator.compare(
              (left as unknown) as string,
              (right as unknown) as string
            )
          ).toBeLessThan(0);
          expect(
            calculator.compare(
              (right as unknown) as string,
              (left as unknown) as string
            )
          ).toBeGreaterThan(0);
        }
      );
      test.each([
        [1, 1],
        ["1", "1"],
        ["-1000", "-1000"],
        ["123123123123123123123123123123", "123123123123123123123123123123"]
        // @ts-ignore
      ])("should it compare a values %i %i", (left, right) => {
        expect(
          calculator.compare(
            (left as unknown) as string,
            (right as unknown) as string
          )
        ).toEqual(0);
        expect(
          calculator.compare(
            (right as unknown) as string,
            (left as unknown) as string
          )
        ).toEqual(0);
      });
    });
    describe("mod", () => {
      test.each([
        [11, 5, "1"],
        [9, 3, "0"],
        [1006, 10, "6"],
        [1007, 10, "7"],
        [-13, -5, "-3"],
        [-13, 5, "-3"],
        [13, -5, "3"],
        [
          "1111222233334444555566667777",
          "22224444666611119999",
          "3888555616667777"
        ]
      ])("mod", (left, right, expected) => {
        expect(
          calculator.mod((left as unknown) as string, right as number)
        ).toEqual(expected);
      });
    });
  });
});
