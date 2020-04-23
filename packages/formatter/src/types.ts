import { MoneyBase } from "@easymoney/money";

export type MoneyIntlOptions = {
  currencyDisplay?: "code" | "symbol" | "name";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "currency" | "decimal";
};

export type CryptoOptions = {
  fractionDigits?: number;
  currencyPosition?: -1 | 1;
  space?: boolean;
};

export type MoneyIntlFormatter = {
  format<CT>(
    money: MoneyBase<CT>,
    locale?: string,
    options?: MoneyIntlOptions
  ): string;
};

export type MoneyCryptoFormatter = {
  format<CT>(money: MoneyBase<CT>, options?: CryptoOptions): string;
};
