import { lpad } from "../formatter/lpad";

describe("lpad", () => {
  it("should add zeroes", () => {
    expect(lpad("", "0", 5)).toEqual("00000");
  });
});
