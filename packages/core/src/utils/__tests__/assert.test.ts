import { assert } from "../assert";

describe("aseert", () => {
  it("should throw an error if condition falsy", () => {
    const expression = () => assert(false, new Error("try"));

    expect(expression).toThrow();
  });
});
