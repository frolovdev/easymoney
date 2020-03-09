import {
  roundHalfEven,
  roundHalfUp,
  roundHalfDown,
  roundNegativeInfinity,
  roundPositiveInfinity,
  roundTowardsZero,
  roundAwayFromZero
} from "../round";

describe("roundHalfEven", () => {
  it("should round correctly round positive numbers", () => {
    expect(roundHalfEven(5.0)).toEqual(5);
    expect(roundHalfEven(5.1)).toEqual(5);
    expect(roundHalfEven(5.4)).toEqual(5);
    expect(roundHalfEven(5.5)).toEqual(6);
    expect(roundHalfEven(5.6)).toEqual(6);
    expect(roundHalfEven(5.9)).toEqual(6);
    expect(roundHalfEven(6.0)).toEqual(6);
    expect(roundHalfEven(6.1)).toEqual(6);
    expect(roundHalfEven(6.4)).toEqual(6);
    expect(roundHalfEven(6.5)).toEqual(6);
    expect(roundHalfEven(6.6)).toEqual(7);
    expect(roundHalfEven(6.9)).toEqual(7);
    expect(roundHalfEven(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundHalfEven(-7.0)).toEqual(-7);
    expect(roundHalfEven(-6.9)).toEqual(-7);
    expect(roundHalfEven(-6.6)).toEqual(-7);
    expect(roundHalfEven(-6.5)).toEqual(-6);
    expect(roundHalfEven(-6.4)).toEqual(-6);
    expect(roundHalfEven(-6.1)).toEqual(-6);
    expect(roundHalfEven(-6.0)).toEqual(-6);
    expect(roundHalfEven(-5.9)).toEqual(-6);
    expect(roundHalfEven(-5.6)).toEqual(-6);
    expect(roundHalfEven(-5.5)).toEqual(-6);
    expect(roundHalfEven(-5.4)).toEqual(-5);
    expect(roundHalfEven(-5.1)).toEqual(-5);
    expect(roundHalfEven(-5.0)).toEqual(-5);
  });
});

describe("roundHalfUp", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundHalfUp(5.0)).toEqual(5);
    expect(roundHalfUp(5.1)).toEqual(5);
    expect(roundHalfUp(5.4)).toEqual(5);
    expect(roundHalfUp(5.5)).toEqual(6);
    expect(roundHalfUp(5.6)).toEqual(6);
    expect(roundHalfUp(5.9)).toEqual(6);
    expect(roundHalfUp(6.0)).toEqual(6);
    expect(roundHalfUp(6.1)).toEqual(6);
    expect(roundHalfUp(6.4)).toEqual(6);
    expect(roundHalfUp(6.5)).toEqual(7);
    expect(roundHalfUp(6.6)).toEqual(7);
    expect(roundHalfUp(6.9)).toEqual(7);
    expect(roundHalfUp(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundHalfUp(-7.0)).toEqual(-7);
    expect(roundHalfUp(-6.9)).toEqual(-7);
    expect(roundHalfUp(-6.6)).toEqual(-7);
    expect(roundHalfUp(-6.5)).toEqual(-7);
    expect(roundHalfUp(-6.4)).toEqual(-6);
    expect(roundHalfUp(-6.1)).toEqual(-6);
    expect(roundHalfUp(-6.0)).toEqual(-6);
    expect(roundHalfUp(-5.9)).toEqual(-6);
    expect(roundHalfUp(-5.6)).toEqual(-6);
    expect(roundHalfUp(-5.5)).toEqual(-6);
    expect(roundHalfUp(-5.4)).toEqual(-5);
    expect(roundHalfUp(-5.1)).toEqual(-5);
    expect(roundHalfUp(-5.0)).toEqual(-5);
  });
});

describe("roundHalfDown", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundHalfDown(5.0)).toEqual(5);
    expect(roundHalfDown(5.1)).toEqual(5);
    expect(roundHalfDown(5.4)).toEqual(5);
    expect(roundHalfDown(5.5)).toEqual(5);
    expect(roundHalfDown(5.6)).toEqual(6);
    expect(roundHalfDown(5.9)).toEqual(6);
    expect(roundHalfDown(6.0)).toEqual(6);
    expect(roundHalfDown(6.1)).toEqual(6);
    expect(roundHalfDown(6.4)).toEqual(6);
    expect(roundHalfDown(6.5)).toEqual(6);
    expect(roundHalfDown(6.6)).toEqual(7);
    expect(roundHalfDown(6.9)).toEqual(7);
    expect(roundHalfDown(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundHalfDown(-7.0)).toEqual(-7);
    expect(roundHalfDown(-6.9)).toEqual(-7);
    expect(roundHalfDown(-6.6)).toEqual(-7);
    expect(roundHalfDown(-6.5)).toEqual(-6);
    expect(roundHalfDown(-6.4)).toEqual(-6);
    expect(roundHalfDown(-6.1)).toEqual(-6);
    expect(roundHalfDown(-6.0)).toEqual(-6);
    expect(roundHalfDown(-5.9)).toEqual(-6);
    expect(roundHalfDown(-5.6)).toEqual(-6);
    expect(roundHalfDown(-5.5)).toEqual(-5);
    expect(roundHalfDown(-5.4)).toEqual(-5);
    expect(roundHalfDown(-5.1)).toEqual(-5);
    expect(roundHalfDown(-5.0)).toEqual(-5);
  });
});

describe("roundNegativeInfinity, FLOOR", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundNegativeInfinity(5.0)).toEqual(5);
    expect(roundNegativeInfinity(5.1)).toEqual(5);
    expect(roundNegativeInfinity(5.4)).toEqual(5);
    expect(roundNegativeInfinity(5.5)).toEqual(5);
    expect(roundNegativeInfinity(5.6)).toEqual(5);
    expect(roundNegativeInfinity(5.9)).toEqual(5);
    expect(roundNegativeInfinity(6.0)).toEqual(6);
    expect(roundNegativeInfinity(6.1)).toEqual(6);
    expect(roundNegativeInfinity(6.4)).toEqual(6);
    expect(roundNegativeInfinity(6.5)).toEqual(6);
    expect(roundNegativeInfinity(6.6)).toEqual(6);
    expect(roundNegativeInfinity(6.9)).toEqual(6);
    expect(roundNegativeInfinity(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundNegativeInfinity(-7.0)).toEqual(-7);
    expect(roundNegativeInfinity(-6.9)).toEqual(-7);
    expect(roundNegativeInfinity(-6.6)).toEqual(-7);
    expect(roundNegativeInfinity(-6.5)).toEqual(-7);
    expect(roundNegativeInfinity(-6.4)).toEqual(-7);
    expect(roundNegativeInfinity(-6.1)).toEqual(-7);
    expect(roundNegativeInfinity(-6.0)).toEqual(-6);
    expect(roundNegativeInfinity(-5.9)).toEqual(-6);
    expect(roundNegativeInfinity(-5.6)).toEqual(-6);
    expect(roundNegativeInfinity(-5.5)).toEqual(-6);
    expect(roundNegativeInfinity(-5.4)).toEqual(-6);
    expect(roundNegativeInfinity(-5.1)).toEqual(-6);
    expect(roundNegativeInfinity(-5.0)).toEqual(-5);
  });
});

describe("roundPositiveInfinity", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundPositiveInfinity(5.0)).toEqual(5);
    expect(roundPositiveInfinity(5.1)).toEqual(6);
    expect(roundPositiveInfinity(5.4)).toEqual(6);
    expect(roundPositiveInfinity(5.5)).toEqual(6);
    expect(roundPositiveInfinity(5.6)).toEqual(6);
    expect(roundPositiveInfinity(5.9)).toEqual(6);
    expect(roundPositiveInfinity(6.0)).toEqual(6);
    expect(roundPositiveInfinity(6.1)).toEqual(7);
    expect(roundPositiveInfinity(6.4)).toEqual(7);
    expect(roundPositiveInfinity(6.5)).toEqual(7);
    expect(roundPositiveInfinity(6.6)).toEqual(7);
    expect(roundPositiveInfinity(6.9)).toEqual(7);
    expect(roundPositiveInfinity(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundPositiveInfinity(-7.0)).toEqual(-7);
    expect(roundPositiveInfinity(-6.9)).toEqual(-6);
    expect(roundPositiveInfinity(-6.6)).toEqual(-6);
    expect(roundPositiveInfinity(-6.5)).toEqual(-6);
    expect(roundPositiveInfinity(-6.4)).toEqual(-6);
    expect(roundPositiveInfinity(-6.1)).toEqual(-6);
    expect(roundPositiveInfinity(-6.0)).toEqual(-6);
    expect(roundPositiveInfinity(-5.9)).toEqual(-5);
    expect(roundPositiveInfinity(-5.6)).toEqual(-5);
    expect(roundPositiveInfinity(-5.5)).toEqual(-5);
    expect(roundPositiveInfinity(-5.4)).toEqual(-5);
    expect(roundPositiveInfinity(-5.1)).toEqual(-5);
    expect(roundPositiveInfinity(-5.0)).toEqual(-5);
  });
});

describe("roundTowardsZero", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundTowardsZero(5.0)).toEqual(5);
    expect(roundTowardsZero(5.1)).toEqual(5);
    expect(roundTowardsZero(5.4)).toEqual(5);
    expect(roundTowardsZero(5.5)).toEqual(5);
    expect(roundTowardsZero(5.6)).toEqual(5);
    expect(roundTowardsZero(5.9)).toEqual(5);
    expect(roundTowardsZero(6.0)).toEqual(6);
    expect(roundTowardsZero(6.1)).toEqual(6);
    expect(roundTowardsZero(6.4)).toEqual(6);
    expect(roundTowardsZero(6.5)).toEqual(6);
    expect(roundTowardsZero(6.6)).toEqual(6);
    expect(roundTowardsZero(6.9)).toEqual(6);
    expect(roundTowardsZero(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundTowardsZero(-7.0)).toEqual(-7);
    expect(roundTowardsZero(-6.9)).toEqual(-6);
    expect(roundTowardsZero(-6.6)).toEqual(-6);
    expect(roundTowardsZero(-6.5)).toEqual(-6);
    expect(roundTowardsZero(-6.4)).toEqual(-6);
    expect(roundTowardsZero(-6.1)).toEqual(-6);
    expect(roundTowardsZero(-6.0)).toEqual(-6);
    expect(roundTowardsZero(-5.9)).toEqual(-5);
    expect(roundTowardsZero(-5.6)).toEqual(-5);
    expect(roundTowardsZero(-5.5)).toEqual(-5);
    expect(roundTowardsZero(-5.4)).toEqual(-5);
    expect(roundTowardsZero(-5.1)).toEqual(-5);
    expect(roundTowardsZero(-5.0)).toEqual(-5);
  });
});

describe("roundAwayFromZero", () => {
  it("should round correctly round  positive numbers", () => {
    expect(roundAwayFromZero(5.0)).toEqual(5);
    expect(roundAwayFromZero(5.1)).toEqual(6);
    expect(roundAwayFromZero(5.4)).toEqual(6);
    expect(roundAwayFromZero(5.5)).toEqual(6);
    expect(roundAwayFromZero(5.6)).toEqual(6);
    expect(roundAwayFromZero(5.9)).toEqual(6);
    expect(roundAwayFromZero(6.0)).toEqual(6);
    expect(roundAwayFromZero(6.1)).toEqual(7);
    expect(roundAwayFromZero(6.4)).toEqual(7);
    expect(roundAwayFromZero(6.5)).toEqual(7);
    expect(roundAwayFromZero(6.6)).toEqual(7);
    expect(roundAwayFromZero(6.9)).toEqual(7);
    expect(roundAwayFromZero(7.0)).toEqual(7);
  });

  it("should round correctly round negative numbers", () => {
    expect(roundAwayFromZero(-7.0)).toEqual(-7);
    expect(roundAwayFromZero(-6.9)).toEqual(-7);
    expect(roundAwayFromZero(-6.6)).toEqual(-7);
    expect(roundAwayFromZero(-6.5)).toEqual(-7);
    expect(roundAwayFromZero(-6.4)).toEqual(-7);
    expect(roundAwayFromZero(-6.1)).toEqual(-7);
    expect(roundAwayFromZero(-6.0)).toEqual(-6);
    expect(roundAwayFromZero(-5.9)).toEqual(-6);
    expect(roundAwayFromZero(-5.6)).toEqual(-6);
    expect(roundAwayFromZero(-5.5)).toEqual(-6);
    expect(roundAwayFromZero(-5.4)).toEqual(-6);
    expect(roundAwayFromZero(-5.1)).toEqual(-6);
    expect(roundAwayFromZero(-5.0)).toEqual(-5);
  });
});
