import { Money, RoundingModesType, AnyCurrencyUnit } from "@easymoney/core";
import { BigIntCalculatorBase } from "../calculator/";

export interface BigIntMoneyBase<CT> {
  getAmount: () => Money<CT, bigint>["amount"];
  getCurrency: () => Money<CT, bigint>["currency"];
  add(money: BigIntMoneyBase<CT>): BigIntMoneyBase<CT>;
  subtract(money: BigIntMoneyBase<CT>): BigIntMoneyBase<CT>;
  isSameCurrency(money: BigIntMoneyBase<CT>): boolean;
  equals(money: BigIntMoneyBase<CT>): boolean;
  compare(money: BigIntMoneyBase<CT>): 1 | 0 | -1;
  greaterThan(money: BigIntMoneyBase<CT>): boolean;
  greaterThanOrEqual(money: BigIntMoneyBase<CT>): boolean;
  lessThan(money: BigIntMoneyBase<CT>): boolean;
  lessThanOrEqual(money: BigIntMoneyBase<CT>): boolean;

  multiply(
    number: number | string | bigint,
    roundingMode?: RoundingModesType
  ): BigIntMoneyBase<CT>;
  divide(
    number: number | string | bigint,
    roundingMode?: RoundingModesType
  ): BigIntMoneyBase<CT>;

  allocate(ratios: number[]): BigIntMoneyBase<CT>[];
  allocateTo(number: number): BigIntMoneyBase<CT>[];
  getSource: () => bigint;
}

export type BigIntPrivateInstance<CT> = {
  calculator: BigIntCalculatorBase;
  instanceMoney: Money<CT, bigint>;
  roundindMode: RoundingModesType;
};

export type BigIntMoneyInput<CT> = {
  amount: number | string | bigint;
  currency: CT extends string ? CT : CT extends AnyCurrencyUnit ? CT : never;
};

export type BigIntInstance<CT> = {
  privateInstance: BigIntPrivateInstance<CT>;
  publicInstance: BigIntMoneyBase<CT>;
};
