import { roundMoneyValue } from "../roundMoneyValue";

describe("roundMoneyValue", () => {
  it("should works)", () => {
    expect(roundMoneyValue("100", 2, 2));
  });
});
