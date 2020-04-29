import { Money, RoundingModesType, AnyCurrency } from "@easymoney/core";

import { CalculatorBase } from "../calculator/";

export interface MoneyBase<CT> {
  getCurrency: () => Money<CT, string>["currency"];
  isSameCurrency(money: MoneyBase<CT>): boolean;
  greaterThan(money: MoneyBase<CT>): boolean;

  mod(number: MoneyBase<CT>): MoneyBase<CT>;
  ratioOf(ratioOf: MoneyBase<CT>): string;

  negative(): MoneyBase<CT>;
}

export type PrivateInstance<CT> = {
  calculator: CalculatorBase;
  instanceMoney: Money<CT>;
  round: (amount: string, roundingMode: RoundingModesType) => string;
};

export type MoneyInput<CT> = {
  amount: number | string;
  currency: CT extends string ? CT : CT extends AnyCurrency ? CT : never;
};

export type CreateMoney<MI, MB> = (money: MI) => MB;

export type Instance<CT> = {
  privateInstance: PrivateInstance<CT>;
  publicInstance: MoneyBase<CT>;
};
