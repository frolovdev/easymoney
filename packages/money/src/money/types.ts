import { Money, RoundingModesType, Currency } from "@easymoney/common";

import { CalculatorBase } from "../calculator/";

export interface MoneyBase {
  getAmount: () => Money<string>["amount"];
  getCurrency: () => Money<string>["currency"];
  add(money: MoneyBase): MoneyBase;
  subtract(money: MoneyBase): MoneyBase;
  isSameCurrency(money: MoneyBase): boolean;
  equals(money: MoneyBase): boolean;
  compare(money: MoneyBase): 1 | 0 | -1;
  greaterThan(money: MoneyBase): boolean;
  greaterThanOrEqual(money: MoneyBase): boolean;
  lessThan(money: MoneyBase): boolean;
  lessThanOrEqual(money: MoneyBase): boolean;
  multiply(
    number: number | string,
    roundingMode?: RoundingModesType
  ): MoneyBase;
  divide(number: number | string, roundingMode?: RoundingModesType): MoneyBase;
  mod(number: MoneyBase): MoneyBase;
  allocate(ratios: number[]): MoneyBase[];
  allocateTo(number: number): MoneyBase[];
  ratioOf(ratioOf: MoneyBase): string;
  absolute(): MoneyBase;
  negative(): MoneyBase;
  isZero(): boolean;
  isPositive(): boolean;
  isNegative(): boolean;
}

export type PrivateInstance = {
  calculator: CalculatorBase;
  instanceMoney: Money;
  round: (amount: string, roundingMode: RoundingModesType) => string;
};

export type MoneyInput = { amount: number | string; currency: Currency };

export type CreateMoney<MI = MoneyInput, MB = MoneyBase> = (money: MI) => MB;

export type Instance = {
  privateInstance: PrivateInstance;
  publicInstance: MoneyBase;
};
