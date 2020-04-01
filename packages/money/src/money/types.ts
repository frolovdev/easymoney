import {
  CalculatorBase,
  Money,
  RoundingModesType,
  MoneyBase,
  MoneyInput
} from "@easymoney/common";

export type PrivateInstance = {
  calculator: CalculatorBase;
  instanceMoney: Money;
  round: (amount: string, roundingMode: RoundingModesType) => string;
};

export type CreateMoney<MI = MoneyInput, MB = MoneyBase> = (money: MI) => MB;

export type Instance = {
  privateInstance: PrivateInstance;
  publicInstance: MoneyBase;
};
