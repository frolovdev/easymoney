import { MoneyBase } from "../money/types";

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
