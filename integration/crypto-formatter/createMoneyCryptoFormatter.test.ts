import { createMoneyCryptoFormatter } from "@easymoney/crypto-formatter";
import { createMoney } from "@easymoney/money";

describe("createMoneyIntlFormatter", () => {
  let createFormatter: typeof createMoneyCryptoFormatter;
  beforeAll(() => {
    createFormatter = createMoneyCryptoFormatter;
  });

  describe("format", () => {
    it("should throw an error if currency doesn't exist", () => {
      const money = { amount: 5, currency: { code: "sadas", minorUnit: 1 } };

      const expression = () => createFormatter().format(createMoney(money));
      expect(expression).toThrow();
    });
    it("should format valid LTC", () => {
      const money = { amount: 5, currency: "LTC" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("0.00000005LTC");
    });

    it("should format valid LTC", () => {
      const money = { amount: 5000000000000, currency: "LTC" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("50000.00000000LTC");
    });

    it("should format valid ETH", () => {
      const money = { amount: 5, currency: "ETH" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("0.000000000000000005ETH");
    });

    it("should format valid negative values", () => {
      const money = { amount: -5, currency: "ETH" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("-0.000000000000000005ETH");
    });

    it("should be possible pick position of currency", () => {
      const money = { amount: 5, currency: "ETH" };

      const formattedValue = createFormatter().format(createMoney(money), {
        currencyPosition: -1
      });
      expect(formattedValue).toEqual("ETH0.000000000000000005");
    });

    it("should be possible add space between value and currency", () => {
      const money = { amount: 5, currency: "ETH" };

      const formattedValue = createFormatter().format(createMoney(money), {
        currencyPosition: -1,
        space: true
      });
      expect(formattedValue).toEqual("ETH 0.000000000000000005");
    });

    it("should be possible pass options whe create formatter", () => {
      const money = { amount: 5, currency: "ETH" };

      const formattedValue = createFormatter({
        currencyPosition: -1,
        space: true
      }).format(createMoney(money));
      expect(formattedValue).toEqual("ETH 0.000000000000000005");
    });
  });
});
