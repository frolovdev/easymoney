type Currency = string;

export type Money = {
  amount: string;
  currency: Currency;
};

export type MoneyInput = { amount: number | string; currency: Currency };

export type BigIntMoney = {
  amount: bigint;
  currency: Currency;
};

export type BigIntMoneyInput = {
  amount: number | string | bigint;
  currency: Currency;
};
