import { MoneyBase } from "../money/types";

export type IntlFormatter = {
  format(money: MoneyBase): string;
};
