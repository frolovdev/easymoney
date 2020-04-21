import { roundMoneyValue } from "../roundMoneyValue";

// $valueBase = Number::roundMoneyValue($valueBase, $this->fractionDigits, $subunit);
describe("roundMoneyValue", () => {
  it("should works)", () => {
    expect(roundMoneyValue("100", 2, 2));
  });
});
