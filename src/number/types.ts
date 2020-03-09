export interface NumberInstance {
  fromString(number: string): NumberInstance;
  isHalf(): boolean;
  getIntegerPart: () => string;
  getFractionalPart: () => string;
  isInteger: () => boolean;
  toString: () => string;
}
