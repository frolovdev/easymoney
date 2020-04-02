export type Currency = string;

export type Money<Amount = string> = {
  amount: Amount;
  currency: Currency;
};
