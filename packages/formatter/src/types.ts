import { MoneyBase } from "@easymoney/money";

export type MoneyIntlOptions = {
  currencyDisplay?: "code" | "symbol" | "name";
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  style?: "currency" | "decimal";
};

export type MoneyIntlFormatter = {
  format(money: MoneyBase, locale?: string, options?: MoneyIntlOptions): string;
};
