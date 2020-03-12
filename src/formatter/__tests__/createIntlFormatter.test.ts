import { createMoney } from "../../money";
import { createBaseIntlFormatter } from "../createIntlFormatter";
import { IntlFormatter, CreateIntlFormatter } from "../types";

describe("createIntlFormatter", () => {
  let createFormatter: CreateIntlFormatter;
  beforeEach(() => {
    createFormatter = createBaseIntlFormatter();
  });
  it("should format money", () => {
    const data = { amount: 100, currency: "USD" };
    createFormatter().format(CreateMoney(data));
  });
});
