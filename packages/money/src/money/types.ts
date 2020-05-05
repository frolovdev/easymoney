import { Money, RoundingModesType, AnyCurrencyUnit } from "@easymoney/core";

import { CalculatorBase } from "../calculator/";

export interface MoneyBase<CT> {
  getAmount: () => Money<CT, string>["amount"];
  getCurrency: () => Money<CT, string>["currency"];
  add(money: MoneyBase<CT>): MoneyBase<CT>;
  subtract(money: MoneyBase<CT>): MoneyBase<CT>;
  isSameCurrency(money: MoneyBase<CT>): boolean;
  equals(money: MoneyBase<CT>): boolean;
  compare(money: MoneyBase<CT>): 1 | 0 | -1;
  greaterThan(money: MoneyBase<CT>): boolean;
  greaterThanOrEqual(money: MoneyBase<CT>): boolean;
  lessThan(money: MoneyBase<CT>): boolean;
  lessThanOrEqual(money: MoneyBase<CT>): boolean;
  multiply(
    number: number | string,
    roundingMode?: RoundingModesType
  ): MoneyBase<CT>;
  divide(
    number: number | string,
    roundingMode?: RoundingModesType
  ): MoneyBase<CT>;
  mod(number: MoneyBase<CT>): MoneyBase<CT>;
  allocate(ratios: number[]): MoneyBase<CT>[];
  allocateTo(number: number): MoneyBase<CT>[];
  ratioOf(ratioOf: MoneyBase<CT>): string;
  absolute(): MoneyBase<CT>;
  negative(): MoneyBase<CT>;
  isZero(): boolean;
  isPositive(): boolean;
  isNegative(): boolean;
}

export type PrivateInstance<CT> = {
  calculator: CalculatorBase;
  instanceMoney: Money<CT>;
  round: (amount: string, roundingMode: RoundingModesType) => string;
};

export type MoneyInput<CT> = {
  amount: number | string;
  currency: CT extends string ? CT : CT extends AnyCurrencyUnit ? CT : never;
};

export type CreateMoney<MI, MB> = (money: MI) => MB;

export type Instance<CT> = {
  privateInstance: PrivateInstance<CT>;
  publicInstance: MoneyBase<CT>;
};
