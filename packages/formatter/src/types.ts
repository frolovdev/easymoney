import { MoneyBase } from "@easymoney/money";

export type MoneyIntlOptions = {
  currencyDisplay?: "code" | "symbol" | "name";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "currency" | "decimal";
  hideFractionIfZero?: boolean;
};

export type MoneyIntlFormatter = {
  format<CT>(
    money: MoneyBase<CT>,
    locale?: string,
    options?: MoneyIntlOptions
  ): string;
};
