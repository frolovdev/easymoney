import { createMoney } from "../../money";
import { createBaseIntlFormatter } from "../createIntlFormatter";
import { IntlFormatter } from "../types";

describe("createIntlFormatter", () => {
  let createFormatter: (
    locales?: string | string[],
    options?: Intl.NumberFormatOptions
  ) => IntlFormatter;
  beforeEach(() => {
    createFormatter = createBaseIntlFormatter();
  });
  it("should format money", () => {
    const data = { amount: 100, currency: "USD" };
    expect(createFormatter().format(createMoney(data))).toEqual("100");
  });
});
