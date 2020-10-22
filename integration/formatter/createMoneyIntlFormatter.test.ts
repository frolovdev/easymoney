import { createMoneyIntlFormatter as createMoneyIntlFormatterFunc } from "@easymoney/formatter";
import { createMoney } from "@easymoney/money";

describe("createMoneyIntlFormatter", () => {
  let createFormatter: typeof createMoneyIntlFormatterFunc;
  beforeAll(() => {
    createFormatter = createMoneyIntlFormatterFunc;
  });

  describe("format", () => {
    it("should throw an error if currency doesn't exist", () => {
      const money = { amount: 5, currency: "OLOLOL" };

      const expression = () => createFormatter().format(createMoney(money));
      expect(expression).toThrow();
    });
    it("should format valid ", () => {
      const money = { amount: 5, currency: "USD" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("$0.05");
    });

    it("should valid format and merge options", () => {
      const money = { amount: 50, currency: "USD" };

      const formattedValue = createFormatter().format(
        createMoney(money),
        "en-US",
        { minimumFractionDigits: 1, maximumFractionDigits: 1 }
      );
      expect(formattedValue).toEqual("$0.5");
    });

    it("should valid format ", () => {
      const money = { amount: 500, currency: "USD" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("$5.00");
    });

    it("should be possible pass different locales", () => {
      const money = { amount: 500, currency: "USD" };

      const formattedValue = createFormatter().format(
        createMoney(money),
        "ru-RU"
      );
      expect(formattedValue).toEqual("$5.00");
    });

    it("should respect the hideFractionIfZero option", () => {
      const moneyWithFraction = { amount: 550, currency: "USD" };
      const formattedValueWithFraction = createFormatter().format(
        createMoney(moneyWithFraction),
        "en-US",
        { hideFractionIfZero: true }
      );
      expect(formattedValueWithFraction).toEqual("$5.50");

      const moneyWithoutFraction = { amount: 500, currency: "USD" };
      const formattedValueWithoutFraction = createFormatter().format(
        createMoney(moneyWithoutFraction),
        "en-US",
        { hideFractionIfZero: true }
      );
      expect(formattedValueWithoutFraction).toEqual("$5");
    });
  });
});
