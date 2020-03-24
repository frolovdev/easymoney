import * as fc from "fast-check";
import { createMoney } from "../index";

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

              const money1AmountMoney2 = money1.add(money2);
              const money2AmountMoney3 = money2.add(money3);

              expect(money1AmountMoney2.add(money3).getAmount()).toEqual(
                money1.add(money2AmountMoney3).getAmount()
              );
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
      test("should be distributive", () => {
        fc.assert(
          fc.property(
            fc.integer(-1000000, 1000000),
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

    describe("multiply", () => {
      test("should be commutative", () => {
        fc.assert(
          fc.property(
            fc.integer(-1000000, 1000000),
            fc.integer(-1000000, 1000000),
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
            fc.integer(-100000, 100000),
            fc.integer(-100000, 100000),
            fc.integer(-100000, 100000),
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

              const money1MultMoney2 = money1.multiply(secondValue);
              const money2MultMoney3 = money2.multiply(thirdValue);

              expect(money1MultMoney2.multiply(thirdValue).getAmount()).toEqual(
                money1.multiply(money2MultMoney3.getAmount()).getAmount()
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
            fc.integer(-1000000, 1000000),
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
    describe("divide", () => {});
    describe("subrtract", () => {});
  });
});
