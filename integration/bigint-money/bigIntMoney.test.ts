import { createBigIntMoney } from "@easymoney/bigint-money";

describe("bigIntMoney", () => {
  let createMoney: typeof createBigIntMoney;
  beforeEach(() => {
    createMoney = createBigIntMoney;
  });

  describe("public api", () => {
    it("should contain n methods", () => {});

    it("shouldnt contain round in public inteface", () => {
      // @ts-ignore
      expect(createMoney({ amount: 100, currency: "USD" }).round).toEqual(
        undefined
      );
    });
  });

  describe("contstruct", () => {
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

      expect(money1.getAmount()).toEqual(100n);
      expect(money2.getAmount()).toEqual(100n);

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

      expect(money1.getAmount()).toEqual(100n);

      expect(money1.getCurrency()).toEqual(data1.currency);
    });

    it("should valid construct integer with plus", () => {
      const data1 = { amount: "+100", currency: "USD" };

      const money1 = createMoney(data1);

      expect(money1.getAmount()).toEqual(100n);

      expect(money1.getCurrency()).toEqual(data1.currency);
    });
  });

  describe("methods", () => {
    describe("getAmount", () => {
      it("should return same amount that was passed", () => {
        const money1 = { amount: 100, currency: "USD" };

        const result1 = createMoney(money1);
        expect(result1.getAmount()).toEqual(BigInt(money1.amount));
      });
    });

    describe("getCurrency", () => {
      it("should return same currency that was passed", () => {
        const money1 = { amount: 100, currency: "USD" };

        const result1 = createMoney(money1);
        expect(result1.getCurrency()).toEqual(money1.currency);
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
        ).toEqual(300n);
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
        expect(result1.getAmount()).toEqual(300n);
        expect(result2.getAmount()).toEqual(500n);
        expect(result3.getAmount()).toEqual(550n);
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

        expect(result.getAmount()).toEqual(-1n);
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

        expect(result.getAmount()).toEqual(-3051n);
      });

      it("should be same value is subtract 0", () => {
        const data1 = { amount: 100, currency: "RUB" };
        const data2 = { amount: 0, currency: "RUB" };

        const money1 = createMoney(data1);
        const money2 = createMoney(data2);

        const result = money1.subtract(money2);

        expect(result.getAmount()).toEqual(100n);
      });
    });

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

        expect(result.getAmount()).toEqual(600n);
      });

      it("should throws an error if round mode is invalid", () => {
        const data1 = { amount: 100, currency: "RUB" };

        const money1 = createMoney(data1);

        // @ts-ignore
        const expression = () => money1.multiply(5, "random");

        expect(expression).toThrow();
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

        expect(result.getAmount()).toEqual(20n);
        expect(result2.getAmount()).toEqual(200n);
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
        [1, [33, 67], [0, 1]],
        [101, [3, 7], [30, 71]],
        [101, [7, 3], [71, 30]],
        [101, [7, 3], [71, 30]]
      ])(
        "should correctly allocate values",
        (value, ratios, allocatedResults) => {
          const results = allocatedResults.map(result => BigInt(result));
          const money = createMoney({ amount: value, currency: "USD" });
          expect(
            money.allocate(ratios).map(money => money.getAmount())
          ).toEqual(results);
        }
      );

      it("should valid allocate for negative values op", () => {
        const results = [-3, -2].map(result => BigInt(result));

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
          34n,
          33n,
          33n
        ]);
      });

      it("should allocate amount data with Foemmel's Conundrum", () => {
        const data = { amount: 5, currency: "RUB" };

        const money = createMoney(data);

        const allocated = money.allocate([3, 7]);

        expect(allocated.map(result => result.getAmount())).toEqual([2n, 3n]);
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
          const results = allocatedResults.map(BigInt);
          const money = createMoney({ amount: value, currency: "USD" });
          expect(
            money.allocateTo(ratios).map(money => money.getAmount())
          ).toEqual(results);
        }
      );

      it("should allocate to n targets", () => {
        const data1 = { amount: 15, currency: "USD" };

        const moneyArr = createMoney(data1).allocateTo(2);

        expect(createMoney(data1).getAmount()).toEqual(15n);
        expect(moneyArr.map(money => money.getAmount())).toEqual([8n, 7n]);
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
  });
});
