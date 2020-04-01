export type BigIntPrivateInstance = {
  calculator: BigIntCalculatorBase;
  instanceMoney: Money<bigint>;
  roundindMode: RoundingModesType;
};

export type BigIntInstance = {
  privateInstance: BigIntPrivateInstance;
  publicInstance: BigIntMoneyBase;
};
