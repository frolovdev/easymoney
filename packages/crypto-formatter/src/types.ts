import { MoneyBase } from "@easymoney/money";

export type CryptoOptions = {
  fractionDigits?: number;
  currencyPosition?: -1 | 1;
  space?: boolean;
};

export type MoneyCryptoFormatter = {
  format<CT>(money: MoneyBase<CT>, options?: CryptoOptions): string;
};
