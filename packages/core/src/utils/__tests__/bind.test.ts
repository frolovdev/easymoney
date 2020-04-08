import { bind } from "../bind";

describe("bind", () => {
  it("should bind function args", () => {
    function sum(a: number, b: number) {
      return a + b;
    }

    const add5 = sum.bind(null, 5);

    expect(add5(5)).toEqual(10);
    expect(add5(1)).toEqual(6);
  });
});
