import { createMoney as createMoneyFunc } from "@easymoney/money";
import { RoundingModes } from "@easymoney/core";
import { currenciesMap } from "@easymoney/currencies";

describe("money", () => {
  let createMoney: typeof createMoneyFunc;
  beforeEach(() => {
    createMoney = createMoneyFunc;
  });

  describe("public api", () => {
    it("should contains 22 public methods", () => {
      expect(
        Object.keys(createMoney({ amount: 100, currency: "USD" })).length
      ).toEqual(22);
    });

    it("shouldnt contain round in public inteface", () => {
      // @ts-ignore
      expect(createMoney({ amount: 100, currency: "USD" }).round).toEqual(
        undefined
      );
    });

    describe("constructor", () => {
      it("should be possible pass currency as object and as string", () => {
        const a = {
          amount: 100,
          currency: "USD"
        };
        const b = {
          amount: 100,
          currency: currenciesMap.USD
        };

        expect(createMoney(a).getCurrency()).toEqual("USD");

        expect(createMoney(b).getCurrency().code).toEqual(
          currenciesMap.USD.code
        );
      });

      it("should be possible determine type if we pass currency object", () => {
        const b = {
          amount: 100,
          currency: currenciesMap.USD
        };
        expect(createMoney(b).getCurrency().code).toEqual("USD");
      });

      it("should throws an error if value is float", () => {
        const money1 = { amount: 100.1, currency: "USD" };
        const moneyFn = () => createMoney(money1);

        expect(moneyFn).toThrow();
      });

      it("should create correctly if passed valid data", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = { amount: "100", currency: "USD" };

        const moneyFn1 = () => createMoney(data1);
        const moneyFn2 = () => createMoney(data2);

        expect(moneyFn1).not.toThrow();
        expect(moneyFn2).not.toThrow();
      });

      it("should contains valid data if constructor data is OK", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = { amount: "100", currency: "USD" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.getAmount()).toEqual("100");
        expect(money2.getAmount()).toEqual("100");

        expect(money1.getCurrency()).toEqual(data1.currency);
        expect(money2.getCurrency()).toEqual(data2.currency);
      });

      it("should throws an error when amount is not a number", () => {
        const data1 = { amount: "adsdas", currency: "USD" };

        const moneyFn1 = () => createMoney(data1);

        expect(moneyFn1).toThrow();
      });

      it("should valid construct integer with decimals zero", () => {
        const data1 = { amount: "100.00", currency: "USD" };

        const money1 = createMoney(data1);

        expect(money1.getAmount()).toEqual("100");

        expect(money1.getCurrency()).toEqual(data1.currency);
      });

      it("should valid construct integer with plus", () => {
        const data1 = { amount: "+100", currency: "USD" };

        const money1 = createMoney(data1);

        expect(money1.getAmount()).toEqual("100");

        expect(money1.getCurrency()).toEqual(data1.currency);
      });
    });
  });

  describe("methods", () => {
    describe("isSameCurrency", () => {
      it("should return true if currencies are same", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = {
          amount: 200,
          currency: "USD"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.isSameCurrency(money2)).toBe(true);
      });

      it("should return false if currencies arent same", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = {
          amount: 200,
          currency: "RUB"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.isSameCurrency(money2)).toBe(false);
      });
    });

    describe("equals", () => {
      it("should return true if money objects are equal", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = {
          amount: 100,
          currency: "USD"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.equals(money2)).toBe(true);
      });

      it("should return false if money objects arent equal with amount and currency", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = {
          amount: 200,
          currency: "RUB"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.equals(money2)).toBe(false);
      });

      it("should return false if money objects arent equal with amounts", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = {
          amount: 200,
          currency: "RUB"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.equals(money2)).toBe(false);
      });

      it("should return false if money objects arent equal with currencies", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = {
          amount: 100,
          currency: "RUB"
        };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        expect(money1.equals(money2)).toBe(false);
      });
    });

    describe("add", () => {
      it("should throw an error", () => {
        const money1 = { amount: 100, currency: "USD" };
        const money2 = {
          amount: 200,
          currency: "RUB"
        };
        expect(() => {
          createMoney(money1).add(createMoney(money2));
        }).toThrow();
      });
      it("should add values", () => {
        const money1 = { amount: 100, currency: "USD" };
        const money2 = {
          amount: 200,
          currency: "USD"
        };
        expect(
          createMoney(money1)
            .add(createMoney(money2))
            .getAmount()
        ).toEqual("300");
      });

      it("should add values when chaining", () => {
        const money1 = { amount: 100, currency: "USD" };
        const money2 = {
          amount: 200,
          currency: "USD"
        };

        const money3 = {
          amount: 200,
          currency: "USD"
        };

        const money4 = {
          amount: 50,
          currency: "USD"
        };

        const result1 = createMoney(money1).add(createMoney(money2));

        const result2 = result1.add(createMoney(money3));
        const result3 = result2.add(createMoney(money4));
        expect(result1.getAmount()).toEqual("300");
        expect(result2.getAmount()).toEqual("500");
        expect(result3.getAmount()).toEqual("550");
      });
    });

    describe("compare", () => {
      it("should valid comapares money", () => {
        const money1 = { amount: 100, currency: "USD" };
        const money2 = {
          amount: 100,
          currency: "USD"
        };

        const result1 = createMoney(money1);
        const result2 = createMoney(money2);

        expect(result1.compare(result2)).toEqual(0);
        expect(result1.greaterThan(result2)).toEqual(false);
        expect(result1.greaterThanOrEqual(result2)).toEqual(true);
        expect(result1.lessThan(result2)).toEqual(false);
        expect(result1.lessThanOrEqual(result2)).toEqual(true);
      });

      it("should throw an error during comparison if currencies are different", () => {
        const money1 = { amount: 100, currency: "USD" };
        const money2 = {
          amount: 100,
          currency: "RUB"
        };

        const result1 = createMoney(money1);

        const result2 = createMoney(money2);
        const compare = () => result1.compare(result2);
        const greaterThan = () => result1.greaterThan(result2);
        const greaterThanOrEqual = () => result1.greaterThanOrEqual(result2);
        const lessThan = () => result1.lessThan(result2);
        const lessThanOrEqual = () => result1.lessThanOrEqual(result2);

        expect(compare).toThrow();
        expect(greaterThan).toThrow();
        expect(greaterThanOrEqual).toThrow();
        expect(lessThan).toThrow();
        expect(lessThanOrEqual).toThrow();
      });
    });

    describe("getAmount", () => {
      it("should return same amount that was passed", () => {
        const money1 = { amount: 100, currency: "USD" };

        const result1 = createMoney(money1);
        expect(result1.getAmount()).toEqual(String(money1.amount));
      });
    });

    describe("getCurrency", () => {
      it("should return same currency that was passed", () => {
        const money1 = { amount: 100, currency: "USD" };

        const result1 = createMoney(money1);
        expect(result1.getCurrency()).toEqual(money1.currency);
      });
    });

    describe("subtract", () => {
      it("should throw an error when currencies are different", () => {
        const data1 = { amount: 100, currency: "USD" };
        const data2 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        const expression = () => money1.subtract(money2);

        expect(expression).toThrow();
      });

      it("should subtract money if data is valid", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 101, currency: "RUB" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        const result = money1.subtract(money2);

        expect(result.getAmount()).toEqual("-1");
      });

      it("should correct chain", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 101, currency: "RUB" };

        const data3 = { amount: 1050, currency: "RUB" };

        const data4 = { amount: 2000, currency: "RUB" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);
        const money3 = createMoney(data3);
        const money4 = createMoney(data4);

        const result = money1
          .subtract(money2)
          .subtract(money3)
          .subtract(money4);

        expect(result.getAmount()).toEqual("-3051");
      });

      it("should be same value is subtract 0", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 0, currency: "RUB" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        const result = money1.subtract(money2);

        expect(result.getAmount()).toEqual("100");
      });
    });

    describe("multiply", () => {
      it("should throw an error is passed data is incorrect", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);

        const expression = () => money1.multiply(({} as unknown) as string);

        expect(expression).toThrow();
      });

      it("should multiplies the amount", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const result = createMoney(data1).multiply(6);

        expect(result.getAmount()).toEqual("600");
      });

      it("should throws an error if round mode is invalid", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);

        // @ts-ignore
        const expression = () => money1.multiply(5, "random");

        expect(expression).toThrow();
      });

      describe("rounding", () => {
        it("should round bankers rounding by default", () => {
          const data1 = { amount: 5, currency: "RUB" };

          const money1 = createMoney(data1);

          expect(money1.multiply(1.0).getAmount()).toEqual("5");
          expect(money1.multiply(1.02).getAmount()).toEqual("5");
          expect(money1.multiply(1.08).getAmount()).toEqual("5");
          expect(money1.multiply(1.1).getAmount()).toEqual("6");
          expect(money1.multiply(1.12).getAmount()).toEqual("6");
          expect(money1.multiply(1.18).getAmount()).toEqual("6");
          expect(money1.multiply(1.2).getAmount()).toEqual("6");
          expect(money1.multiply(1.22).getAmount()).toEqual("6");
          expect(money1.multiply(1.28).getAmount()).toEqual("6");
          expect(money1.multiply(1.3).getAmount()).toEqual("6");
          expect(money1.multiply(1.32).getAmount()).toEqual("7");
          expect(money1.multiply(1.38).getAmount()).toEqual("7");
          expect(money1.multiply(1.4).getAmount()).toEqual("7");

          expect(money1.multiply(-1.4).getAmount()).toEqual("-7");
          expect(money1.multiply(-1.38).getAmount()).toEqual("-7");
          expect(money1.multiply(-1.32).getAmount()).toEqual("-7");
          expect(money1.multiply(-1.3).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.28).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.22).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.2).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.18).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.12).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.1).getAmount()).toEqual("-6");
          expect(money1.multiply(-1.08).getAmount()).toEqual("-5");
          expect(money1.multiply(-1.02).getAmount()).toEqual("-5");
          expect(money1.multiply(-1.0).getAmount()).toEqual("-5");
        });
      });

      it("should be possible to pass another rounding method", () => {
        const data1 = { amount: 5, currency: "RUB" };

        const money1 = createMoney(data1);

        expect(money1.multiply(1.0, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.02, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.08, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.1, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.12, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.18, "DOWN").getAmount()).toEqual("5");
        expect(money1.multiply(1.2, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.22, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.28, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.3, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.32, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.38, "DOWN").getAmount()).toEqual("6");
        expect(money1.multiply(1.4, "DOWN").getAmount()).toEqual("7");

        expect(money1.multiply(-1.4, "DOWN").getAmount()).toEqual("-7");
        expect(money1.multiply(-1.38, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.32, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.3, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.28, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.22, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.2, "DOWN").getAmount()).toEqual("-6");
        expect(money1.multiply(-1.18, "DOWN").getAmount()).toEqual("-5");
        expect(money1.multiply(-1.12, "DOWN").getAmount()).toEqual("-5");
        expect(money1.multiply(-1.1, "DOWN").getAmount()).toEqual("-5");
        expect(money1.multiply(-1.08, "DOWN").getAmount()).toEqual("-5");
        expect(money1.multiply(-1.02, "DOWN").getAmount()).toEqual("-5");
        expect(money1.multiply(-1.0, "DOWN").getAmount()).toEqual("-5");
      });
    });

    describe("divide", () => {
      it("should throw an error is passed data is incorrect", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);

        const expression = () => money1.divide(({} as unknown) as string);

        expect(expression).toThrow();
      });

      it("should divide the amount", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const result = createMoney(data1).divide(5);

        const result2 = createMoney(data1).divide(1 / 2);

        expect(result.getAmount()).toEqual("20");
        expect(result2.getAmount()).toEqual("200");
      });

      it("should divide the amount", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const result = createMoney(data1).divide("5");

        expect(result.getAmount()).toEqual("20");
      });

      it("should throws an error if round mode is invalid", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);

        // @ts-ignore
        const expression = () => money1.divide(5, "random");

        expect(expression).toThrow();
      });

      it("should throws an error if divizor is zero", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const result = () => createMoney(data1).divide(0);

        expect(result).toThrow();
      });

      describe("rounding", () => {
        describe("default half_even", () => {
          test.each([
            [10, 9, "1"],
            [11, 8, "1"],
            [10, 7, "1"],
            [6, 4, "2"],
            [10, 5, "2"],
            [10, 6, "2"]
          ])(
            "should correctly round positive even results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [14, 7, "2"],
            [15, 7, "2"],
            [17, 7, "2"],
            [5, 2, "2"],
            [13, 5, "3"],
            [14, 5, "3"],
            [15, 5, "3"]
          ])(
            "should correctly round positive odd results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [11, -6, "-2"],
            [10, -6, "-2"],
            [6, -4, "-2"],
            [5, -4, "-1"],
            [10, -2, "-5"]
          ])(
            "should correctly round negative even results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [12, -6, "-2"],
            [12, -5, "-2"],
            [10, -4, "-2"],
            [13, -5, "-3"],
            [14, -5, "-3"],
            [15, -5, "-3"]
          ])(
            "should correctly round negative odd results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right)
                  .getAmount()
              ).toEqual(result);
            }
          );
        });

        describe("can pass any another", () => {
          test.each([
            [10, 9, "1"],
            [11, 8, "1"],
            [10, 7, "1"],
            [6, 4, "2"],
            [6, 6, "1"],
            [10, 6, "2"]
          ])(
            "should correctly round positive even results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right, RoundingModes.HALF_UP)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [14, 7, "2"],
            [15, 7, "2"],
            [17, 7, "2"],
            [5, 2, "3"],
            [13, 5, "3"],
            [14, 5, "3"],
            [15, 5, "3"]
          ])(
            "should correctly round positive odd results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right, RoundingModes.HALF_UP)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [11, -6, "-2"],
            [10, -6, "-2"],
            [6, -4, "-2"],
            [5, -4, "-1"],
            [10, -2, "-5"]
          ])(
            "should correctly round negative even results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right, RoundingModes.HALF_UP)
                  .getAmount()
              ).toEqual(result);
            }
          );

          test.each([
            [12, -6, "-2"],
            [12, -5, "-2"],
            [10, -4, "-3"],
            [13, -5, "-3"],
            [14, -5, "-3"],
            [15, -5, "-3"]
          ])(
            "should correctly round negative odd results",
            (left, right, result) => {
              expect(
                createMoney({ amount: left, currency: "USD" })
                  .divide(right, RoundingModes.HALF_UP)
                  .getAmount()
              ).toEqual(result);
            }
          );
        });
      });
    });

    describe("allocate", () => {
      test.each([
        [100, [1, 1, 1], [34, 33, 33]],
        [101, [1, 1, 1], [34, 34, 33]],
        [5, [3, 7], [2, 3]],
        [5, [7, 3], [4, 1]],
        [5, [7, 3, 0], [4, 1, 0]],
        [-5, [7, 3], [-3, -2]],
        [5, [0, 7, 3], [0, 4, 1]],
        [5, [7, 0, 3], [4, 0, 1]],
        [5, [0, 0, 1], [0, 0, 5]],
        [5, [0, 3, 7], [0, 2, 3]],
        [0, [0, 0, 1], [0, 0, 0]],
        [2, [1, 1, 1], [1, 1, 0]],
        [1, [1, 1], [1, 0]],
        [1, [0.33, 0.66], [0, 1]],
        [101, [3, 7], [30, 71]],
        [101, [7, 3], [71, 30]],
        [101, [7, 3], [71, 30]]
      ])(
        "should correctly allocate values",
        (value, ratios, allocatedResults) => {
          const results = allocatedResults.map(String);
          const money = createMoney({ amount: value, currency: "USD" });
          expect(
            money.allocate(ratios).map(money => money.getAmount())
          ).toEqual(results);
        }
      );

      it("should valid allocate for negative values money", () => {
        const results = [-3, -2].map(String);

        const money = createMoney({ amount: -5, currency: "USD" });

        const test = money.allocate([7, 3]).map(money => money.getAmount());
        expect(test).toEqual(results);
      });

      it("should allocate amount valid", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money = createMoney(data1);

        const allocated = money.allocate([1, 1, 1]);

        expect(Array.isArray(allocated)).toBe(true);
        expect(allocated.map(result => result.getAmount())).toEqual([
          "34",
          "33",
          "33"
        ]);
      });

      it("should allocate amount data with Foemmel's Conundrum", () => {
        const data = { amount: 5, currency: "RUB" };

        const money = createMoney(data);

        const allocated = money.allocate([3, 7]);

        expect(allocated.map(result => result.getAmount())).toEqual(["2", "3"]);
      });

      it("should throw an error when ratio array is empty", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money = createMoney(data1);

        const expression = () => money.allocate([]);

        expect(expression).toThrow();
      });

      it("should throw an error when sum of ratios is less than zero", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money = createMoney(data1);

        const expression = () => money.allocate([-5, -5]);

        expect(expression).toThrow();
      });

      it("should throw an error when ratio is negative", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money = createMoney(data1);

        const expression = () => money.allocate([-2, 5]);

        expect(expression).toThrow();
      });
    });

    describe("allocateTo", () => {
      test.each([
        [15, 2, [8, 7]],
        [10, 2, [5, 5]],
        [15, 3, [5, 5, 5]],
        [10, 3, [4, 3, 3]]
      ])(
        "should correctly allocate values",
        (value, ratios, allocatedResults) => {
          const results = allocatedResults.map(String);
          const money = createMoney({ amount: value, currency: "USD" });
          expect(
            money.allocateTo(ratios).map(money => money.getAmount())
          ).toEqual(results);
        }
      );

      it("should allocate to n targets", () => {
        const data1 = { amount: 15, currency: "USD" };
        const moneyArr = createMoney(data1).allocateTo(2);

        expect(moneyArr.map(money => money.getAmount())).toEqual(["8", "7"]);
      });

      it("should allocate to n targets", () => {
        const data1 = { amount: 8, currency: "USD" };
        const moneyArr = createMoney(data1).allocateTo(3);

        expect(moneyArr.map(money => money.getAmount())).toEqual([
          "3",
          "3",
          "2"
        ]);
      });

      it("should throw an error when allocation target is not an integer", () => {
        const data1 = { amount: 15, currency: "USD" };
        const expression = () => createMoney(data1).allocateTo(3.5);

        expect(expression).toThrow();
      });

      it("should throw an error when allocation target is empty", () => {
        const data1 = { amount: 15, currency: "USD" };
        // @ts-ignore
        const expression = () => createMoney(data1).allocateTo();

        expect(expression).toThrow();
      });

      it("should throw an error when allocation ratio is negative", () => {
        const data1 = { amount: 15, currency: "USD" };

        const expression = () => createMoney(data1).allocateTo(-5);

        expect(expression).toThrow();
      });
    });

    describe("ratioOf", () => {
      it("should throw an error if passed money is zero", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 0, currency: "RUB" };
        const expression = () => createMoney(data1).ratioOf(createMoney(data2));

        expect(expression).toThrow();
      });

      it("should get ratio if passed valid data", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 20, currency: "RUB" };
        const result = createMoney(data1).ratioOf(createMoney(data2));

        expect(result).toEqual("5");
      });
    });

    describe("mod", () => {
      it("should throw an error when currencies is different", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 100, currency: "USD" };
        const expression = () => createMoney(data1).mod(createMoney(data2));

        expect(expression).toThrow();
      });

      it("should calculates a modulus with an other money", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 200, currency: "RUB" };

        const result = createMoney(data1).mod(createMoney(data2));
        expect(result.getAmount()).toEqual("100");
      });

      it("should be valid chainable", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 200, currency: "RUB" };
        const data3 = { amount: 100, currency: "RUB" };

        const result = createMoney(data1)
          .mod(createMoney(data2))
          .mod(createMoney(data3));
        expect(result.getAmount()).toEqual("0");
      });
    });

    describe("absolute", () => {
      it("should calculates absolute amount", () => {
        const data1 = { amount: -100, currency: "USD" };
        const money = createMoney(data1);
        const result = money.absolute();

        expect(result.getAmount()).toEqual("100");
      });

      it("should be chainable", () => {
        const data1 = { amount: -100, currency: "USD" };
        const money = createMoney(data1)
          .absolute()
          .add(createMoney(data1));

        expect(money.getAmount()).toEqual("0");
      });
    });
    describe("negative", () => {
      it("should calculates absolute amount", () => {
        const data1 = { amount: 100, currency: "USD" };
        const money = createMoney(data1);
        const result = money.negative();

        expect(result.getAmount()).toEqual("-100");
      });

      it("should be chainable", () => {
        const data1 = { amount: 100, currency: "USD" };
        const money = createMoney(data1)
          .negative()
          .add(createMoney(data1));

        expect(money.getAmount()).toEqual("0");
      });
    });
    describe("isZero", () => {
      it("should return true if amount is zero", () => {
        const data1 = { amount: 0, currency: "USD" };
        const money = createMoney(data1).isZero();

        expect(money).toBe(true);
      });

      it("should return false if amount isn't zero", () => {
        const data1 = { amount: 10, currency: "USD" };
        const money = createMoney(data1).isZero();

        expect(money).toBe(false);
      });
    });
    describe("isPositive", () => {
      it("should return true if amount is positive", () => {
        const data1 = { amount: 10, currency: "USD" };
        const money = createMoney(data1).isPositive();

        expect(money).toBe(true);
      });

      it("should return false if amount isn't positive", () => {
        const data1 = { amount: -100, currency: "USD" };
        const money = createMoney(data1).isPositive();

        expect(money).toBe(false);
      });
    });
    describe("isNegative", () => {
      it("should return true if amount is negative", () => {
        const data1 = { amount: -100, currency: "USD" };
        const money = createMoney(data1).isNegative();

        expect(money).toBe(true);
      });

      it("should return false if amount isn't negative", () => {
        const data1 = { amount: 100, currency: "USD" };
        const money = createMoney(data1).isNegative();

        expect(money).toBe(false);
      });
    });
  });

  describe("issues", () => {
    it("should fix the issue #61 https://github.com/frolovdev/easymoney/issues/61", () => {
      const low = createMoney({ amount: 500, currency: "USD" });
      const high = createMoney({ amount: 1217, currency: "USD" });

      console.log("qwopioeuhqwjkelq;");
      const expression = low.lessThan(high);

      // should be `true`, but its `false`
      expect(expression).toEqual(true);

      // // should be `false`, but its `true`
      expect(low.greaterThan(high)).toEqual(false);
    });
  });
});
