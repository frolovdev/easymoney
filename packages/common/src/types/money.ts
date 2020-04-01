import { Money } from "./common";
import { RoundingModesType } from "../rounding-modes";

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
