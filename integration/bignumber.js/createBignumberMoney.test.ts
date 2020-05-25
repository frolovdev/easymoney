import { createBigNumberMoney } from "@easymoney/bignumber.js";

import { createMoneyUnit } from "@easymoney/money";
import { RoundingModes } from "@easymoney/core";

describe("bignumberMoney", () => {
  let createMoney: ReturnType<typeof createMoneyUnit>;
  beforeEach(() => {
    createMoney = createBigNumberMoney;
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
  });

  describe("constructor", () => {
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

    it("should valid bignumber construct with decimals zero", () => {
      const data1 = {
        amount: "1111222233334444555566667777.00",
        currency: "USD"
      };

      const money1 = createMoney(data1);

      expect(money1.getAmount()).toEqual("1111222233334444555566667777");

      expect(money1.getCurrency()).toEqual(data1.currency);
    });

    it("should valid construct integer with plus", () => {
      const data1 = { amount: "+100", currency: "USD" };

      const money1 = createMoney(data1);

      expect(money1.getAmount()).toEqual("100");

      expect(money1.getCurrency()).toEqual(data1.currency);
    });
  });

  describe("methods", () => {
    describe("isSameCurrency", () => {
      it("should return true if currencies are same for bignumber value", () => {
        const data1 = {
          amount: "1111222233334444555566667777",
          currency: "USD"
        };
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
    });
  });

  describe("equals", () => {
    it("should return true if money objects are equal for bignumber value", () => {
      const data1 = {
        amount: "11112222333344445555666677778888",
        currency: "USD"
      };
      const data2 = {
        amount: "11112222333344445555666677778888",
        currency: "USD"
      };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);

      expect(money1.equals(money2)).toBe(true);
    });

    it("should return false if money objects arent equal with amount and currency for bignumber value", () => {
      const data1 = {
        amount: "11112222333344445555666677778888",
        currency: "USD"
      };
      const data2 = {
        amount: "11112222333344445555666677778888",
        currency: "RUB"
      };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);

      expect(money1.equals(money2)).toBe(false);
    });

    it("should return false if money objects arent equal with amounts for bignumber value", () => {
      const data1 = {
        amount: "11112222333344445555666677778888",
        currency: "RUB"
      };
      const data2 = {
        amount: "88887777666655554444333322221111",
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
    it("should throw an error for bignumber value", () => {
      const money1 = {
        amount: "111122223333444455556666777788889999",
        currency: "USD"
      };
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

    it("should add bignumber values for bignumber value", () => {
      const money1 = {
        amount: "111122223333444455556666777788889999",
        currency: "USD"
      };
      const money2 = {
        amount: "22223334444555566667777888899991111",
        currency: "USD"
      };
      expect(
        createMoney(money1)
          .add(createMoney(money2))
          .getAmount()
      ).toEqual("133345557778000022224444666688881110");
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

    it("should add bignumber values when chaining", () => {
      const money1 = {
        amount: "111199992222888833337777444466665555",
        currency: "USD"
      };
      const money2 = {
        amount: "999911118888111177771111666611115555",
        currency: "USD"
      };

      const money3 = {
        amount: "99999999988888888881111111",
        currency: "USD"
      };

      const money4 = {
        amount: "50000000000000000000000000001",
        currency: "USD"
      };

      const result1 = createMoney(money1).add(createMoney(money2));

      const result2 = result1.add(createMoney(money3));
      const result3 = result2.add(createMoney(money4));
      expect(result1.getAmount()).toEqual(
        "1111111111111000011108889111077781110"
      );
      expect(result2.getAmount()).toEqual(
        "1111111111211000011097777999958892221"
      );
      expect(result3.getAmount()).toEqual(
        "1111111161211000011097777999958892222"
      );
    });
  });

  describe("compare", () => {
    it("should valid comapares money for bignumber value", () => {
      const money1 = {
        amount: "111199992222888833337777444466665555",
        currency: "USD"
      };
      const money2 = {
        amount: "111199992222888833337777444466665555",
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

    it("should throw an error during comparison if currencies are different for bignumber value", () => {
      const money1 = { amount: "222888833337777444466665555", currency: "USD" };
      const money2 = {
        amount: "222888833337777444466665555",
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
    it("should return same amount that was passed for bignumber value", () => {
      const money1 = { amount: "222888833337777444466665555", currency: "USD" };

      const result1 = createMoney(money1);
      expect(result1.getAmount()).toEqual(money1.amount);
      expect(result1.getAmount()).toEqual("222888833337777444466665555");
    });
  });

  describe("getCurrency", () => {
    it("should return same currency that was passed for bignumber value", () => {
      const money1 = {
        amount: "1111999999222888833337777444466665555",
        currency: "USD"
      };

      const result1 = createMoney(money1);
      expect(result1.getCurrency()).toEqual(money1.currency);
    });
  });

  describe("subtract", () => {
    it("should throw an error when currencies are different", () => {
      const data1 = { amount: 1009999911111, currency: "USD" };
      const data2 = { amount: 1001111199991, currency: "RUB" };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);

      const expression = () => money1.subtract(money2);

      expect(expression).toThrow();
    });

    it("should subtract money if data is valid for bignumber value", () => {
      const data1 = { amount: "222888833337777444466665555", currency: "RUB" };
      const data2 = { amount: "222888833337777444466665556", currency: "RUB" };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);

      const result = money1.subtract(money2);

      expect(result.getAmount()).toEqual("-1");
    });

    it("should correct chain for number and bignumber values", () => {
      const data1 = { amount: 100, currency: "RUB" };
      const data2 = { amount: 101, currency: "RUB" };

      const data3 = { amount: "222888833337777444466665555", currency: "RUB" };

      const data4 = { amount: "9999999999999999999999", currency: "RUB" };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);
      const money3 = createMoney(data3);
      const money4 = createMoney(data4);

      const result = money1
        .subtract(money2)
        .subtract(money3)
        .subtract(money4);

      expect(result.getAmount()).toEqual("-222898833337777444466665555");
    });

    it("should be same value is subtract 0", () => {
      const data1 = { amount: "222898833337777444466665555", currency: "RUB" };
      const data2 = { amount: 0, currency: "RUB" };

      const money1 = createMoney(data1);
      const money2 = createMoney(data2);

      const result = money1.subtract(money2);

      expect(result.getAmount()).toEqual("222898833337777444466665555");
    });
  });

  describe("multiply", () => {
    it("should throw an error is passed data is incorrect for bignumber value", () => {
      const data1 = { amount: "111222333444555666777888999", currency: "RUB" };

      const money1 = createMoney(data1);

      const expression = () => money1.multiply(({} as unknown) as string);

      expect(expression).toThrow();
    });

    it("should multiplies the amount for bignumber value", () => {
      const data1 = { amount: "77778888111133339999111", currency: "RUB" };

      const result = createMoney(data1).multiply(6);

      expect(result.getAmount()).toEqual("466673328666800039994666");
    });

    it("should negative multiplies the amount for bignumber value", () => {
      const data1 = { amount: "77778888111133339999111", currency: "RUB" };

      const result = createMoney(data1).multiply("-55432156789");

      expect(result.getAmount()).toEqual("-4311451520650431359315966072614579");
    });

    describe("rounding", () => {
      it("should round bankers rounding by default for bignumber value", () => {
        const data1 = {
          amount: "111122223333444455556666777788889999",
          currency: "RUB"
        };

        const money1 = createMoney(data1);

        expect(money1.multiply(1.0).getAmount()).toEqual(
          "111122223333444455556666777788889999"
        );
        expect(money1.multiply(1.02).getAmount()).toEqual(
          "113344667800113344667800113344667799"
        );
        expect(money1.multiply(1.08).getAmount()).toEqual(
          "120012001200120012001200120012001199"
        );
        expect(money1.multiply(1.1).getAmount()).toEqual(
          "122234445666788901112333455567778999"
        );
        expect(money1.multiply(1.32).getAmount()).toEqual(
          "146681334800146681334800146681334799"
        );
        expect(money1.multiply("23.145638972").getAmount()).toEqual(
          "2571994863041859741529708526408196349"
        );
        expect(money1.multiply("2030405060.51").getAmount()).toEqual(
          "225623124591348023691258014690357922425328839"
        );

        expect(money1.multiply(-1.4).getAmount()).toEqual(
          "-155571112666822237779333488904445999"
        );
        expect(money1.multiply(-1.38).getAmount()).toEqual(
          "-153348668200153348668200153348668199"
        );
        expect(money1.multiply(-1.32).getAmount()).toEqual(
          "-146681334800146681334800146681334799"
        );
        expect(money1.multiply("-234567891.0000514678").getAmount()).toEqual(
          "-26065705570562774921936638108255269710807992"
        );
        expect(money1.multiply("-234567189.91825761").getAmount()).toEqual(
          "-26065627664795102843617695102843617434470026"
        );
        expect(money1.multiply(-1.0).getAmount()).toEqual(
          "-111122223333444455556666777788889999"
        );
      });
    });

    it("should be possible to pass another rounding method for bignumber value", () => {
      const data1 = { amount: "991188227733664455912834765", currency: "RUB" };

      const money1 = createMoney(data1);

      expect(money1.multiply(1.0, "DOWN").getAmount()).toEqual(
        "991188227733664455912834765"
      );
      expect(money1.multiply(1.02, "DOWN").getAmount()).toEqual(
        "1011011992288337745031091460"
      );
      expect(
        money1.multiply("222333111444555666.5", "DOWN").getAmount()
      ).toEqual("220373962699240441120315884817094039858945872");
      expect(money1.multiply("1.1234567891234124", "DOWN").getAmount()).toEqual(
        "1113557143746588334879623500"
      );
      expect(money1.multiply(1234567.5, "DOWN").getAmount()).toEqual(
        "1223688772342580793175168633739137"
      );
      expect(money1.multiply(1.45, "DOWN").getAmount()).toEqual(
        "1437222930213813461073610409"
      );

      expect(money1.multiply(-1.4, "DOWN").getAmount()).toEqual(
        "-1387663518827130238277968671"
      );
      expect(money1.multiply(-1.38, "DOWN").getAmount()).toEqual(
        "-1367839754272456949159711975"
      );
      expect(money1.multiply(-2512345.5, "DOWN").getAmount()).toEqual(
        "-2490207283599647094322558814091307"
      );
      expect(
        money1
          .multiply("-111122223333444455556666777788889999.25", "DOWN")
          .getAmount()
      ).toEqual(
        "-110143039607701265227948879887988798026353778390930280826223926"
      );
      expect(money1.multiply(-1.0, "DOWN").getAmount()).toEqual(
        "-991188227733664455912834765"
      );
    });
  });

  describe("divide", () => {
    it("should throw an error is passed data is incorrect", () => {
      const data1 = { amount: "100", currency: "RUB" };

      const money1 = createMoney(data1);

      const expression = () => money1.divide(({} as unknown) as string);

      expect(expression).toThrow();
    });

    it("should divide the amount for bignumber value", () => {
      const data1 = {
        amount: "99118822773366445591283991122",
        currency: "RUB"
      };

      const result = createMoney(data1).divide(5);

      const result2 = createMoney(data1).divide(1 / 2);

      const result3 = createMoney(data1).divide("1122334455667788990011223344");

      expect(result.getAmount()).toEqual("19823764554673289118256798224");
      expect(result2.getAmount()).toEqual("198237645546732891182567982244");
      expect(result3.getAmount()).toEqual("88");
    });

    it("should throws an error if round mode is invalid for bignumber value", () => {
      const data1 = { amount: "8831487109640372124", currency: "RUB" };

      const money1 = createMoney(data1);

      // @ts-ignore
      const expression = () => money1.divide(5, "random");

      expect(expression).toThrow();
    });

    it("should give an error if the divisor is zero and the dividend bignumber value", () => {
      const data1 = {
        amount: "88314871096403721248831487109640372124",
        currency: "RUB"
      };

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
          [10, 6, "2"],
          [
            "999988887777666655554444333322221111",
            "999988887777666655554444333322221110",
            "1"
          ],
          ["111999222888333777444666555", "111122223333444455556666", "1008"]
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
          [15, 5, "3"],
          [
            "999988887777666655554444333322221111",
            "999988887777666655554444333322221199",
            "1"
          ],
          ["111999222888333777444666555", "111122223333444455556663", "1008"]
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
          [10, -2, "-5"],
          [
            "999988887777666655554444333322221111",
            "-999988887777666655554444333322221110",
            "-1"
          ],
          ["111999222888333777444666555", "-111122223333444455556666", "-1008"]
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
          [15, -5, "-3"],
          [
            "999988887777666655554444333322221111",
            "-999988887777666655554444333322221199",
            "-1"
          ],
          ["111999222888333777444666555", "-111122223333444455556663", "-1008"]
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
          [10, 6, "2"],
          [
            "999988887777666655554444333322221111",
            "666655555555555544443333222211110000",
            "2"
          ],
          ["111999222888333777444666555", "12220000222233334444666690", "9"]
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
          [15, 5, "3"],
          [
            "999988887777666655554444333322221111",
            "666655555555555544443333222211110009",
            "2"
          ],
          ["111999222888333777444666555", "12220000222233334444666699", "9"]
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
          [10, -2, "-5"],
          [
            "999988887777666655554444333322221111",
            "-666655555555555544443333222211110000",
            "-2"
          ],
          ["111999222888333777444666555", "-12220000222233334444666690", "-9"]
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
          [15, -5, "-3"],
          [
            "999988887777666655554444333322221111",
            "-666655555555555544443333222211110009",
            "-2"
          ],
          ["111999222888333777444666555", "-12220000222233334444666699", "-9"]
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
        [101, [7, 3], [71, 30]],
        ["150", [3, 4, 3], ["45", "60", "45"]],
        [
          "8831487109640372124",
          [3, 4, 3],
          ["2649446132892111638", "3532594843856148849", "2649446132892111637"]
        ],
        [
          "123456789123456789123456789",
          [10, 0, 0],
          ["123456789123456789123456789", "0", "0"]
        ],
        [
          "123456789123456789123456788",
          [1, 1, 1],
          [
            "41152263041152263041152264",
            "41152263041152263041152262",
            "41152263041152263041152262"
          ]
        ],
        [
          "123456789123456789123456788",
          [0, 0, 1],
          ["0", "0", "123456789123456789123456788"]
        ],
        [
          "8831487109640372124",
          [7, 2],
          ["6868934418609178319", "1962552691031193805"]
        ],
        [
          "-8831487109640372124",
          [2, 7],
          ["-1962552691031193805", "-6868934418609178319"]
        ]
      ])(
        "should correctly allocate values",
        (value, ratios, allocatedResults) => {
          const results = (allocatedResults as number[]).map(String);
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

      it("for bignumber value should valid allocate for negative values money", () => {
        const results = ["-6182040976748260486", "-2649446132892111638"];

        const money = createMoney({
          amount: "-8831487109640372124",
          currency: "USD"
        });

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

      it("for bignumber value should allocate amount valid", () => {
        const data1 = {
          amount: "999911118888222277773333666644445555",
          currency: "RUB"
        };

        const money = createMoney(data1);

        const allocated = money.allocate([1, 1, 1]);

        expect(Array.isArray(allocated)).toBe(true);
        expect(allocated.map(result => result.getAmount())).toEqual([
          "333303706296074092591111222214815185",
          "333303706296074092591111222214815185",
          "333303706296074092591111222214815185"
        ]);
      });

      it("should allocate amount data with Foemmel's Conundrum", () => {
        const data = { amount: 5, currency: "RUB" };

        const money = createMoney(data);

        const allocated = money.allocate([3, 7]);

        expect(allocated.map(result => result.getAmount())).toEqual(["2", "3"]);
      });

      it("should throw an error when ratio array is empty", () => {
        const data1 = {
          amount: "12345678912345678901234567890",
          currency: "RUB"
        };

        const money = createMoney(data1);

        const expression = () => money.allocate([]);

        expect(expression).toThrow();
      });

      it("should throw an error when sum of ratios is less than zero", () => {
        const data1 = {
          amount: "12345678912345678901234567890",
          currency: "RUB"
        };

        const money = createMoney(data1);

        const expression = () => money.allocate([-5, -5]);

        expect(expression).toThrow();
      });

      it("should throw an error when ratio is negative", () => {
        const data1 = {
          amount: "12345678912345678901234567890",
          currency: "RUB"
        };

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
        [10, 3, [4, 3, 3]],
        [
          "12345678912345678901234567890",
          2,
          ["6172839456172839450617283945", "6172839456172839450617283945"]
        ],
        [
          "12345678912345678901234567895",
          2,
          ["6172839456172839450617283948", "6172839456172839450617283947"]
        ],
        [
          "9999888877776666555544443333222211110005",
          3,
          [
            "3333296292592222185181481111074070370003",
            "3333296292592222185181481111074070370001",
            "3333296292592222185181481111074070370001"
          ]
        ],
        [
          "9999888877776666555544443333222211110003",
          3,
          [
            "3333296292592222185181481111074070370001",
            "3333296292592222185181481111074070370001",
            "3333296292592222185181481111074070370001"
          ]
        ]
      ])(
        "should correctly allocate values",
        (value, ratios, allocatedResults) => {
          const results = (allocatedResults as number[]).map(String);
          const money = createMoney({ amount: value, currency: "USD" });
          expect(
            money.allocateTo(ratios).map(money => money.getAmount())
          ).toEqual(results);
        }
      );

      it("should allocate to n targets", () => {
        const data1 = {
          amount: "12345678912345678901234567895",
          currency: "USD"
        };
        const moneyArr = createMoney(data1).allocateTo(2);

        expect(moneyArr.map(money => money.getAmount())).toEqual([
          "6172839456172839450617283948",
          "6172839456172839450617283947"
        ]);
      });

      it("should allocate to n targets", () => {
        const data1 = {
          amount: "9999888877776666555544443333222211110005",
          currency: "USD"
        };
        const moneyArr = createMoney(data1).allocateTo(3);

        expect(moneyArr.map(money => money.getAmount())).toEqual([
          "3333296292592222185181481111074070370003",
          "3333296292592222185181481111074070370001",
          "3333296292592222185181481111074070370001"
        ]);
      });

      it("should throw an error when allocation target is not an integer", () => {
        const data1 = {
          amount: "3333296292592222185181481111074070370001",
          currency: "USD"
        };
        const expression = () => createMoney(data1).allocateTo(3.5);

        expect(expression).toThrow();
      });

      it("should throw an error when allocation target is empty", () => {
        const data1 = {
          amount: "3333296292592222185181481111074070370001",
          currency: "USD"
        };
        // @ts-ignore
        const expression = () => createMoney(data1).allocateTo();

        expect(expression).toThrow();
      });

      it("should throw an error when allocation ratio is negative", () => {
        const data1 = {
          amount: "3333296292592222185181481111074070370001",
          currency: "USD"
        };

        const expression = () => createMoney(data1).allocateTo(-5);

        expect(expression).toThrow();
      });
    });
  });

  describe("ratioOf", () => {
    it("should throw an error if passed money is zero", () => {
      const data1 = { amount: 100, currency: "RUB" };
      const data2 = { amount: 0, currency: "RUB" };
      const expression = () => createMoney(data1).ratioOf(createMoney(data2));

      expect(expression).toThrow();
    });

    it("for bignumber value should throw an error if passed money is zero", () => {
      const data1 = { amount: "2222333344441111555566667777", currency: "RUB" };
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

    it("for bignumber value should get ratio if passed valid data", () => {
      const data1 = {
        amount: "100000000000000000000000000000000",
        currency: "RUB"
      };
      const data2 = { amount: "20000000000000000", currency: "RUB" };
      const result = createMoney(data1).ratioOf(createMoney(data2));

      expect(result).toEqual("5000000000000000");
    });
  });

  describe("mod", () => {
    it("should throw an error when currencies is different", () => {
      const data1 = { amount: 100, currency: "RUB" };
      const data2 = { amount: 100, currency: "USD" };
      const expression = () => createMoney(data1).mod(createMoney(data2));

      expect(expression).toThrow();
    });

    it("for bignumber value should throw an error when currencies is different", () => {
      const data1 = {
        amount: "111122223333444455556666777788889999",
        currency: "RUB"
      };
      const data2 = {
        amount: "111122223333444455556666777788889999",
        currency: "USD"
      };
      const expression = () => createMoney(data1).mod(createMoney(data2));

      expect(expression).toThrow();
    });

    it("should calculates a modulus with an other money", () => {
      const data1 = { amount: 100, currency: "RUB" };
      const data2 = { amount: 200, currency: "RUB" };

      const result = createMoney(data1).mod(createMoney(data2));
      expect(result.getAmount()).toEqual("100");
    });

    it("for bignumber value should calculates a modulus with an other money", () => {
      const data1 = {
        amount: "111122223333444455556666777788889999",
        currency: "RUB"
      };
      const data2 = { amount: "222299991111133334444", currency: "RUB" };

      const result = createMoney(data1).mod(createMoney(data2));
      expect(result.getAmount()).toEqual("70856833948128988399");
    });

    it("should be valid chainable", () => {
      const data1 = {
        amount: "111122223333444455556666777788889999",
        currency: "RUB"
      };
      const data2 = { amount: "222299991111133334444", currency: "RUB" };
      const data3 = { amount: "70856833948128988399", currency: "RUB" };

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

    it("for bignumber value should calculates absolute amount", () => {
      const data1 = {
        amount: "-222233334444111155556666777788889999",
        currency: "USD"
      };
      const money = createMoney(data1);
      const result = money.absolute();

      expect(result.getAmount()).toEqual(
        "222233334444111155556666777788889999"
      );
    });

    it("should be chainable", () => {
      const data1 = { amount: -100, currency: "USD" };
      const money = createMoney(data1)
        .absolute()
        .add(createMoney(data1));

      expect(money.getAmount()).toEqual("0");
    });

    it("for bignumber value should be chainable", () => {
      const data1 = {
        amount: "-222233334444111155556666777788889999",
        currency: "USD"
      };
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

    it("for bignumber value should calculates absolute amount", () => {
      const data1 = {
        amount: "999988887777666655554444333322221111",
        currency: "USD"
      };
      const money = createMoney(data1);
      const result = money.negative();

      expect(result.getAmount()).toEqual(
        "-999988887777666655554444333322221111"
      );
    });

    it("should be chainable", () => {
      const data1 = { amount: 100, currency: "USD" };
      const money = createMoney(data1)
        .negative()
        .add(createMoney(data1));

      expect(money.getAmount()).toEqual("0");
    });

    it("for bignumber value should be chainable", () => {
      const data1 = {
        amount: "999988887777666655554444333322221111",
        currency: "USD"
      };
      const money = createMoney(data1)
        .negative()
        .add(createMoney(data1));

      expect(money.getAmount()).toEqual("0");
    });
  });

  describe("isZero", () => {
    it("should return true if amount is zero", () => {
      const data1 = { amount: "0", currency: "USD" };
      const money = createMoney(data1).isZero();

      expect(money).toBe(true);
    });

    it("should return false if amount isn't zero", () => {
      const data1 = {
        amount: "999988887777666655554444333322221111",
        currency: "USD"
      };
      const money = createMoney(data1).isZero();

      expect(money).toBe(false);
    });
  });

  describe("isPositive", () => {
    it("should return true if amount is positive", () => {
      const data1 = {
        amount: "9999888877779999999999944333322221111",
        currency: "USD"
      };
      const money = createMoney(data1).isPositive();

      expect(money).toBe(true);
    });

    it("should return false if amount isn't positive", () => {
      const data1 = {
        amount: "-999988887777666655554444333322221111",
        currency: "USD"
      };
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
