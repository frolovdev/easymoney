import { fromString, fromNumber } from "../number";

describe("number", () => {
  describe("fromNumber", () => {
    describe("assertions", () => {
      it("should throw error if pass .", () => {
        expect(() => fromNumber(".")).toThrow();
      });

      it("should throw error if pass invalid symbol in integer part", () => {
        expect(() => fromNumber("dasdas.")).toThrow();
      });

      it("should throw error if pass invalid symbol in fractional part", () => {
        expect(() => fromNumber("0.dasdas")).toThrow();
      });

      it("should throw error if pass leading zeroes", () => {
        expect(() => fromNumber("000000023")).toThrow();
      });
    });
  });

  describe("fromString", () => {
    describe("work result", () => {
      it("", () => {
        const number = fromString("312312.123");

        expect(number.getFractionalPart()).toEqual("123");
        expect(number.getIntegerPart()).toEqual("312312");
      });

      it("", () => {
        const number = fromString("0.0");

        expect(number.getFractionalPart()).toEqual("");
        expect(number.getIntegerPart()).toEqual("0");
      });

      it("", () => {
        const number = fromString("0.0001000");

        expect(number.getFractionalPart()).toEqual("0001");
        expect(number.getIntegerPart()).toEqual("0");
      });

      it("", () => {
        const number = fromString("0");

        expect(number.getFractionalPart()).toEqual("");
        expect(number.getIntegerPart()).toEqual("0");
      });
    });
    describe("assertions", () => {
      it("should throw error if pass .", () => {
        expect(() => fromString(".")).toThrow();
      });

      it("should throw error if pass invalid symbol in integer part", () => {
        expect(() => fromString("dasdas.")).toThrow();
      });

      it("should throw error if pass invalid symbol in fractional part", () => {
        expect(() => fromString("0.dasdas")).toThrow();
      });

      it("should throw error if pass leading zeroes", () => {
        expect(() => fromString("000000023")).toThrow();
      });
    });
  });
});
