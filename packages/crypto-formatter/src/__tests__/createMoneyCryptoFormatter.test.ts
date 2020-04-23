import { createMoneyCryptoFormatterUnit } from "../createMoneyCryptoFormatter";
import { cryptoCurrencies } from "@easymoney/currencies";
import { MoneyCryptoFormatter } from "../types";
import { createMoney } from "@easymoney/money";

describe("createMoneyIntlFormatter", () => {
  let createFormatter: ReturnType<typeof createMoneyCryptoFormatterUnit>;
  beforeAll(() => {
    createFormatter = createMoneyCryptoFormatterUnit(cryptoCurrencies);
  });

  describe("format", () => {
    it("should throw an error if currency doesn't exist", () => {
      const money = { amount: 5, currency: "XBT" };

      const expression = () => createFormatter().format(createMoney(money));
      expect(expression).toThrow();
    });
    it("should format valid LTC", () => {
      const money = { amount: 5, currency: "LTC" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("0.00000005LTC");
    });

    it("should format valid ETH", () => {
      const money = { amount: 5, currency: "ETH" };

      const formattedValue = createFormatter().format(createMoney(money));
      expect(formattedValue).toEqual("0.000000000000000005ETH");
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
