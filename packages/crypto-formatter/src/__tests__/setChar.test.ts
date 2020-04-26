import { setCharAt } from "../formatter/setChar";

describe("setCharAt", () => {
  it("should set char in right position", () => {
    expect(
      setCharAt("sadasdasdasdasd", "sadasdasdasdasd".length - 1, "123")
    ).toEqual("sadasdasdasdas123");
    expect(setCharAt("sadasdasdasdasd", 0, "123")).toEqual("123adasdasdasdasd");
    expect(setCharAt("sadasdasdasdasd", 1, "123")).toEqual("s123dasdasdasdasd");
    expect(setCharAt("sa", 3, "123")).toEqual("sa");
  });
});
