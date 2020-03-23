import * as fc from "fast-check";
import { createMoney } from "../index";

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;

describe("money", () => {
  describe("methods", () => {
    describe("add", () => {
      test("should be commutative", () => {
        fc.assert(
          fc.property(
            fc.integer(min, max),
            fc.integer(min, max),
            (firstValue, secondValue) => {
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
            }
          )
        );
      });
      test("should be associative", () => {
        fc.assert(
          fc.property(
            fc.integer(min, max),
            fc.integer(min, max),
            fc.integer(min, max),
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
          fc.property(fc.integer(min, max), value => {
            const money1 = createMoney({ amount: value, currency: "USD" });
            const zeroMoney = createMoney({ amount: 0, currency: "USD" });

            expect(money1.add(zeroMoney).getAmount()).toEqual(
              money1.getAmount()
            );
          })
        );
      });
      test("should be distributive", () => {
        // overflow error
        fc.assert(
          fc.property(
            fc.integer(min, max),
            fc.integer(min, max),
            fc.integer(min, max),
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
  });
});
