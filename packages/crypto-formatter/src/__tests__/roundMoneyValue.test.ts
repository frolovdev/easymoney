import { roundMoneyValue } from "../formatter/roundMoneyValue";

describe("roundMoneyValue", () => {
  it("should works)", () => {
    expect(roundMoneyValue("100", 2, 2)).toEqual("100");
  });

  it("should round value", () => {
    expect(roundMoneyValue("100000055555555", 2, 5)).toEqual("100000055556555");
  });
  it("should round value", () => {
    expect(roundMoneyValue("100000055596555", 2, 6)).toEqual("100000055696555");
  });

  it("should round negative value", () => {
    expect(roundMoneyValue("-100000055555555", 2, 5)).toEqual(
      "-100000055556555"
    );
  });
});
