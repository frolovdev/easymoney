import { bind } from "@easymoney/core";
import { NumberInstance } from "./types";
type Numbers = {
  [digit: string]: number;
};

const numbers: Numbers = {
  "0": 1,
  "1": 1,
  "2": 1,
  "3": 1,
  "4": 1,
  "5": 1,
  "6": 1,
  "7": 1,
  "8": 1,
  "9": 1
};

type InnerInstance = {
  integerPart: string;
  fractionalPart: string;
};

export function createNumber(
  integerPart: string | number,
  fractionalPart = ""
): NumberInstance {
  if ("" === integerPart && "" === fractionalPart) {
    throw new TypeError("Empty number is invalid");
  }
  const innerInstance: InnerInstance = {
    integerPart: parseIntegerPart(String(integerPart)),
    fractionalPart: parseFractionalPart(String(fractionalPart))
  };

  const instance = {} as NumberInstance;

  instance.isInteger = bind(isInt, innerInstance);
  instance.getIntegerPart = () => innerInstance.integerPart;
  instance.getFractionalPart = () => innerInstance.fractionalPart;
  instance.toString = bind(toString, innerInstance);

  return instance;
}

function parseIntegerPart(number: string): string {
  if ("" === number || "0" === number) {
    return "0";
  }

  if ("-" === number) {
    return "-0";
  }

  let nonZero = false;
  let withPlus = false;

  for (let position = 0; position < number.length; position++) {
    const digit = number[position];

    if (
      !numbers[digit] &&
      !(0 === position && ("-" === digit || "+" === digit))
    ) {
      throw new Error(
        `Invalid integer part ${number}. Invalid digit ${digit} found`
      );
    }

    if (0 === position && digit === "+") {
      withPlus = true;
    }

    if (false === nonZero && digit === "0") {
      throw new Error("Leading zeros are not allowed");
    }

    nonZero = true;
  }

  if (withPlus) {
    return number.substr(1);
  }

  return number;
}

function parseFractionalPart(number: string) {
  if ("" === number) {
    return number;
  }

  for (let position = 0; position < number.length; position++) {
    const digit = number[position];
    if (!numbers[digit]) {
      throw new Error(
        `Invalid fractional part ${number}. Invalid digit ${digit} found`
      );
    }
  }

  return number;
}

function isInt(innerInstance: InnerInstance): boolean {
  return innerInstance.fractionalPart === "";
}

export function fromString(number: string): NumberInstance {
  const decimalSeparatorPosition = number.indexOf(".");
  if (decimalSeparatorPosition === -1) {
    return createNumber(number, "");
  }

  const subString = number.substr(decimalSeparatorPosition + 1);
  return createNumber(
    number.substr(0, decimalSeparatorPosition),
    subString.replace(/0+$/, "")
  );
}

export function fromNumber(number: string | number): NumberInstance {
  if (
    typeof number === "number" &&
    !isNaN(parseInt((number as unknown) as string)) &&
    isFinite(number as number) &&
    !Number.isInteger(number as number)
  ) {
    return fromString((number as number).toFixed(14));
  }

  if (Number.isInteger(number as number)) {
    return createNumber(number);
  }

  if (typeof number === "string") {
    return fromString(number);
  }

  throw new TypeError("Valid numeric value expected");
}

function toString(innerInstance: InnerInstance) {
  const { fractionalPart, integerPart } = innerInstance;
  if (fractionalPart === "") {
    return integerPart;
  }

  return `${integerPart}.${fractionalPart}`;
}

export function isEven(value: number): boolean {
  return value % 2 === 0;
}

export function isHalf(number: number) {
  return Math.abs(number) % 1 === 0.5;
}
