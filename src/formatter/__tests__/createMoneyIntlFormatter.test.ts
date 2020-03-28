import { createMoneyIntlFormatterUnit } from "../createMoneyIntlFormatter";
import { currencies } from "../../currencies/";
import { MoneyIntlFormatter } from "../types";
import { createMoney } from "../../money/";

describe("createMoneyIntlFormatter", () => {
  let createFormatter: () => MoneyIntlFormatter;
  beforeAll(() => {
    createFormatter = createMoneyIntlFormatterUnit(currencies);
  });
  describe("constructor", () => {});

  describe("format", () => {
    it("should throw an error", () => {});
    it("should format valid ", () => {
      const money = { amount: 5, currency: "USD" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("$0.050");
    });
  });
});
