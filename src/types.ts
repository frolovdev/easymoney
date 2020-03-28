type Currency = string;

export type Money<Amount = string> = {
  amount: Amount;
  currency: Currency;
};

export type MoneyInput = { amount: number | string; currency: Currency };

export type BigIntMoneyInput = {
  amount: number | string | bigint;
  currency: Currency;
};
