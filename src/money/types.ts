import { MoneyInput } from "../core/types";
import { Money } from "../core/types";
import { RoundingModesType } from "../consts/rounding-modes";

import { CalculatorBase, BigIntCalculatorBase } from "../calculator/types";

export interface AbstractMoneyBase<T> {
  getAmount: () => Money<T>["amount"];
  getCurrency: () => Money<T>["currency"];
}

export interface MoneyBase extends AbstractMoneyBase<string> {
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

export type Instance = {
  privateInstance: PrivateInstance;
  publicInstance: MoneyBase;
};

export type CreateMoney<MI = MoneyInput, MB = MoneyBase> = (money: MI) => MB;

export interface BigIntMoneyBase extends AbstractMoneyBase<bigint> {
  add(money: BigIntMoneyBase): BigIntMoneyBase;
  subtract(money: BigIntMoneyBase): BigIntMoneyBase;
  isSameCurrency(money: BigIntMoneyBase): boolean;
  equals(money: BigIntMoneyBase): boolean;
  compare(money: BigIntMoneyBase): 1 | 0 | -1;
  greaterThan(money: BigIntMoneyBase): boolean;
  greaterThanOrEqual(money: BigIntMoneyBase): boolean;
  lessThan(money: BigIntMoneyBase): boolean;
  lessThanOrEqual(money: BigIntMoneyBase): boolean;

  multiply(
    number: number | string | bigint,
    roundingMode?: RoundingModesType
  ): BigIntMoneyBase;
  divide(
    number: number | string | bigint,
    roundingMode?: RoundingModesType
  ): BigIntMoneyBase;

  allocate(ratios: number[]): BigIntMoneyBase[];
  allocateTo(number: number): BigIntMoneyBase[];
  getSource: () => bigint;
}

export type BigIntPrivateInstance = {
  calculator: BigIntCalculatorBase;
  instanceMoney: Money<bigint>;
  roundindMode: RoundingModesType;
};

export type BigIntInstance = {
  privateInstance: BigIntPrivateInstance;
  publicInstance: BigIntMoneyBase;
};
