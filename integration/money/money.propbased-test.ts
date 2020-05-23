import * as fc from "fast-check";
import { createMoney } from "@easymoney/money";

describe("money", () => {
  describe("methods", () => {
    describe("add", () => {
      test("should be commutative", () => {
        fc.assert(
          fc.property(fc.integer(), fc.integer(), (firstValue, secondValue) => {
            const money1 = createMoney({
              amount: firstValue,
              currency: "USD"
            });
            const money2 = createMoney({
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
            fc.integer(),
            fc.integer(),
            fc.integer(),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "RUB"
              });
              const money3 = createMoney({
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
          fc.property(fc.integer(), value => {
            const money1 = createMoney({ amount: value, currency: "USD" });
            const zeroMoney = createMoney({ amount: 0, currency: "USD" });

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
          fc.property(
            fc.integer(-94900999, 94900999),
            fc.integer(-94900999, 94900999),
            (firstValue, secondValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "USD"
              });

              expect(money1.multiply(secondValue).getAmount()).toEqual(
                money2.multiply(firstValue).getAmount()
              );
            }
          )
        );
      });
      test("should be associative", () => {
        fc.assert(
          fc.property(
            fc.integer(-208063, 208063),
            fc.integer(-208063, 208063),
            fc.integer(-208063, 208063),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "RUB"
              });

              expect(
                money1
                  .multiply(secondValue)
                  .multiply(thirdValue)
                  .getAmount()
              ).toEqual(
                money1
                  .multiply(money2.multiply(thirdValue).getAmount())
                  .getAmount()
              );
            }
          )
        );
      });
      test("should be multiplicative identity", () => {
        fc.assert(
          fc.property(fc.integer(), value => {
            const money = createMoney({ amount: value, currency: "USD" });

            expect(money.multiply(1).getAmount()).toEqual(money.getAmount());
          })
        );
      });
      test("should be distributive", () => {
        //copy-past from add method
        fc.assert(
          fc.property(
            fc.integer(-67110999, 67110999),
            fc.integer(-67110999, 67110999),
            fc.integer(-67110999, 67110999),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "RUB"
              });
              const money3 = createMoney({
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
            fc.integer(-1),
            fc.integer(-1),
            (firstValue, secondValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createMoney({
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
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            (firstValue, secondValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "RUB"
              });
              const money2 = createMoney({
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
          fc.property(fc.integer(), value => {
            const money = createMoney({ amount: value, currency: "USD" });

            expect(money.divide(1).getAmount()).toEqual(money.getAmount());
          })
        );
      });
    });
    describe("subrtract", () => {
      test("should be not commutative or for negative values", () => {
        fc.assert(
          fc.property(
            fc.integer(-1),
            fc.integer(-1),
            (firstValue, secondValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createMoney({
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
            }
          )
        );
      });
      test("should be not commutative or for positive values", () => {
        fc.assert(
          fc.property(
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            (firstValue, secondValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createMoney({
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
            }
          )
        );
      });
      test("should be not associative for negative values", () => {
        fc.assert(
          fc.property(
            fc.integer(-1),
            fc.integer(-1),
            fc.integer(-1),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "USD"
              });
              const money3 = createMoney({
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
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            fc.integer(1, Number.MAX_SAFE_INTEGER),
            (firstValue, secondValue, thirdValue) => {
              const money1 = createMoney({
                amount: firstValue,
                currency: "USD"
              });
              const money2 = createMoney({
                amount: secondValue,
                currency: "USD"
              });
              const money3 = createMoney({
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
      test("should be additive identity", () => {
        fc.assert(
          fc.property(fc.integer(), value => {
            const money = createMoney({ amount: value, currency: "USD" });
            const moneyZero = createMoney({ amount: 0, currency: "USD" });

            expect(money.subtract(moneyZero).getAmount()).toEqual(
              money.getAmount()
            );
          })
        );
      });
    });
  });
});
