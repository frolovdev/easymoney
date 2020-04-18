import { createMoneyIntlFormatterUnit } from "../createMoneyIntlFormatter";
import { currencies } from "@easymoney/currencies";
import { MoneyIntlFormatter } from "../types";
import { createMoney } from "@easymoney/money";

describe("createMoneyIntlFormatter", () => {
  let createFormatter: () => MoneyIntlFormatter;
  beforeAll(() => {
    createFormatter = createMoneyIntlFormatterUnit(currencies);
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
  });
});
