import { MoneyBase } from "../money/types";

export type IntlFormatter = {
  format(money: MoneyBase): string;
};

export type CreateIntlFormatter = (
  locales?: string | string[],
  options?: Intl.NumberFormatOptions
) => IntlFormatter;
