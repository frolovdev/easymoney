import { Money, RoundingModesType, Currency } from "@easymoney/core";
import { BigIntCalculatorBase } from "../calculator/";

export type CreateMoney<MI, MB> = (money: MI) => MB;

export interface BigIntMoneyBase {
  getAmount: () => Money<bigint>["amount"];
  getCurrency: () => Money<bigint>["currency"];
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

export type BigIntMoneyInput = {
  amount: number | string | bigint;
  currency: Currency;
};

export type BigIntInstance = {
  privateInstance: BigIntPrivateInstance;
  publicInstance: BigIntMoneyBase;
};
