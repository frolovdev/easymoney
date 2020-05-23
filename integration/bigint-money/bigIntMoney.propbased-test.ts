import * as fc from "fast-check";
import { createBigIntMoney } from "@easymoney/bigint-money";

describe("bigIntMoney", () => {
  describe("methods", () => {
    describe("add", () => {
      test("should be commutative", () => {
        fc.assert(
          fc.property(fc.bigInt(), fc.bigInt(), (firstValue, secondValue) => {
            const money1 = createBigIntMoney({
              amount: firstValue,
              currency: "USD"
            });
            const money2 = createBigIntMoney({
              amount: secondValue,
              currency: "USD"
            });

            expect(money1.add(money2).getAmount()).toEqual(
              money2.add(money1).getAmount()
            );
          })
        );
      });
      test("should be associative", () => {
        fc.assert(
          fc.property(
            fc.bigInt(),
            fc.bigInt(),
            fc.bigInt(),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "RUB"
              });
              const money3 = createBigIntMoney({
                amount: thirdValue,
                currency: "RUB"
              });

              expect(
                money1
                  .add(money2)
                  .add(money3)
                  .getAmount()
              ).toEqual(money1.add(money2.add(money3)).getAmount());
            }
          )
        );
      });
      test("should be additive identity", () => {
        fc.assert(
          fc.property(fc.bigInt(), value => {
            const money1 = createBigIntMoney({
              amount: value,
              currency: "USD"
            });
            const zeroMoney = createBigIntMoney({ amount: 0, currency: "USD" });

            expect(money1.add(zeroMoney).getAmount()).toEqual(
              money1.getAmount()
            );
          })
        );
      });
    });

    describe("multiply", () => {
      test("should be commutative", () => {
        fc.assert(
          fc.property(fc.bigInt(), fc.bigInt(), (firstValue, secondValue) => {
            const money1 = createBigIntMoney({
              amount: firstValue,
              currency: "USD"
            });
            const money2 = createBigIntMoney({
              amount: secondValue,
              currency: "USD"
            });

            expect(money1.multiply(secondValue).getAmount()).toEqual(
              money2.multiply(firstValue).getAmount()
            );
          })
        );
      });
      test("should be associative", () => {
        fc.assert(
          fc.property(
            fc.bigInt(),
            fc.bigInt(),
            fc.bigInt(),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "RUB"
              });
              const money3 = createBigIntMoney({
                amount: thirdValue,
                currency: "RUB"
              });

              expect(
                money1
                  .multiply(money2.getAmount())
                  .multiply(money3.getAmount())
                  .getAmount()
              ).toEqual(
                money1
                  .multiply(money2.multiply(money3.getAmount()).getAmount())
                  .getAmount()
              );
            }
          )
        );
      });
      test("should be multiplicative identity", () => {
        fc.assert(
          fc.property(fc.bigInt(), value => {
            const money = createBigIntMoney({ amount: value, currency: "USD" });

            expect(money.multiply(1).getAmount()).toEqual(money.getAmount());
          })
        );
      });
      test("should be distributive", () => {
        //copy-past from add method
        fc.assert(
          fc.property(
            fc.bigInt(),
            fc.bigInt(),
            fc.bigInt(),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "RUB"
              });
              const money3 = createBigIntMoney({
                amount: thirdValue,
                currency: "RUB"
              });

              expect(
                money1.multiply(money2.add(money3).getAmount()).getAmount()
              ).toEqual(
                money1
                  .multiply(money2.getAmount())
                  .add(money1.multiply(money3.getAmount()))
                  .getAmount()
              );
            }
          )
        );
      });
    });
    describe("divide", () => {
      test("should be not commutative for negative values", () => {
        fc.assert(
          fc.property(
            fc.bigInt(-9007199254740991n, -1n),
            fc.bigInt(-9007199254740991n, -1n),
            (firstValue, secondValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "RUB"
              });

              if (firstValue === secondValue) {
                // for ceiling rounding mode
                expect(
                  money1.divide(secondValue, "CEILING").getAmount()
                ).toEqual(money2.divide(firstValue, "CEILING").getAmount());
                // for floor rounding mode
                expect(money1.divide(secondValue, "FLOOR").getAmount()).toEqual(
                  money2.divide(firstValue, "FLOOR").getAmount()
                );
                // for down rounding mode
                expect(money1.divide(secondValue, "DOWN").getAmount()).toEqual(
                  money2.divide(firstValue, "DOWN").getAmount()
                );
                // for up rounding mode
                expect(money1.divide(secondValue, "UP").getAmount()).toEqual(
                  money2.divide(firstValue, "UP").getAmount()
                );
              } else {
                // for ceiling rounding mode
                expect(
                  money1.divide(secondValue, "CEILING").getAmount()
                ).not.toEqual(money2.divide(firstValue, "CEILING").getAmount());
                // for floor rounding mode
                expect(
                  money1.divide(secondValue, "FLOOR").getAmount()
                ).not.toEqual(money2.divide(firstValue, "FLOOR").getAmount());
                // for down rounding mode
                expect(
                  money1.divide(secondValue, "DOWN").getAmount()
                ).not.toEqual(money2.divide(firstValue, "DOWN").getAmount());
                // for up rounding mode
                expect(
                  money1.divide(secondValue, "UP").getAmount()
                ).not.toEqual(money2.divide(firstValue, "UP").getAmount());
              }
            }
          )
        );
      });
      test("should be not commutative for positive values", () => {
        fc.assert(
          fc.property(
            fc.bigInt(1n, 9007199254740991n),
            fc.bigInt(1n, 9007199254740991n),
            (firstValue, secondValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "RUB"
              });

              if (firstValue === secondValue) {
                // for ceiling rounding mode
                expect(
                  money1.divide(secondValue, "CEILING").getAmount()
                ).toEqual(money2.divide(firstValue, "CEILING").getAmount());
                // for floor rounding mode
                expect(money1.divide(secondValue, "FLOOR").getAmount()).toEqual(
                  money2.divide(firstValue, "FLOOR").getAmount()
                );
                // for down rounding mode
                expect(money1.divide(secondValue, "DOWN").getAmount()).toEqual(
                  money2.divide(firstValue, "DOWN").getAmount()
                );
                // for up rounding mode
                expect(money1.divide(secondValue, "UP").getAmount()).toEqual(
                  money2.divide(firstValue, "UP").getAmount()
                );
              } else {
                // for ceiling rounding mode
                expect(
                  money1.divide(secondValue, "CEILING").getAmount()
                ).not.toEqual(money2.divide(firstValue, "CEILING").getAmount());
                // for floor rounding mode
                expect(
                  money1.divide(secondValue, "FLOOR").getAmount()
                ).not.toEqual(money2.divide(firstValue, "FLOOR").getAmount());
                // for down rounding mode
                expect(
                  money1.divide(secondValue, "DOWN").getAmount()
                ).not.toEqual(money2.divide(firstValue, "DOWN").getAmount());
                // for up rounding mode
                expect(
                  money1.divide(secondValue, "UP").getAmount()
                ).not.toEqual(money2.divide(firstValue, "UP").getAmount());
              }
            }
          )
        );
      });
      test("should be multiplicative identity", () => {
        fc.assert(
          fc.property(fc.bigInt(), value => {
            const money = createBigIntMoney({ amount: value, currency: "USD" });

            expect(money.divide(1).getAmount()).toEqual(money.getAmount());
          })
        );
      });
    });
    describe("subtract", () => {
      test("should be not commutative", () => {
        fc.assert(
          fc.property(fc.bigInt(), fc.bigInt(), (firstValue, secondValue) => {
            const money1 = createBigIntMoney({
              amount: firstValue,
              currency: "USD"
            });
            const money2 = createBigIntMoney({
              amount: secondValue,
              currency: "USD"
            });

            if (firstValue !== secondValue) {
              expect(money1.subtract(money2).getAmount()).not.toEqual(
                money2.subtract(money1).getAmount()
              );
            } else {
              expect(money1.subtract(money2).getAmount()).toEqual(
                money2.subtract(money1).getAmount()
              );
            }
          })
        );
      });
      test("should be not associative for negative values", () => {
        fc.assert(
          fc.property(
            fc.bigInt(-9007199254740991n, -1n),
            fc.bigInt(-9007199254740991n, -1n),
            fc.bigInt(-9007199254740991n, -1n),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "USD"
              });
              const money3 = createBigIntMoney({
                amount: thirdValue,
                currency: "USD"
              });

              expect(
                money1
                  .subtract(money2)
                  .subtract(money3)
                  .getAmount()
              ).not.toEqual(
                money1.subtract(money2.subtract(money3)).getAmount()
              );
            }
          )
        );
      });
      test("should be not associative for positive values", () => {
        fc.assert(
          fc.property(
            fc.bigInt(1n, 9007199254740991n),
            fc.bigInt(1n, 9007199254740991n),
            fc.bigInt(1n, 9007199254740991n),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createBigIntMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createBigIntMoney({
                amount: secondValue,
                currency: "USD"
              });
              const money3 = createBigIntMoney({
                amount: thirdValue,
                currency: "USD"
              });

              const money1SubMoney2 = money1.subtract(money2);
              const money2SubMoney3 = money2.subtract(money3);

              expect(
                money1
                  .subtract(money2)
                  .subtract(money3)
                  .getAmount()
              ).not.toEqual(
                money1.subtract(money2.subtract(money3)).getAmount()
              );
            }
          )
        );
      });
      test("should be additive identity", () => {
        fc.assert(
          fc.property(fc.bigInt(), value => {
            const money = createBigIntMoney({ amount: value, currency: "USD" });
            const moneyZero = createBigIntMoney({
              amount: 0n,
              currency: "USD"
            });

            expect(money.subtract(moneyZero).getAmount()).toEqual(
              money.getAmount()
            );
          })
        );
      });
    });
  });
});
