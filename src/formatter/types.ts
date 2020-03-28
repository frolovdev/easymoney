import { MoneyBase } from "../money/types";

export type MoneyIntlOptions = {
  currencyDisplay: "code" | "symbol" | "name";
  minimumFractionDigits: number;
  maximumFractionDigits: number;
  useGrouping: boolean;
  style: "currency" | "decimal";
};

// 1

// конвертнуть число из меньшей валюты в оригинальную

// заюзать на ней toLocaleString иметь возможность передать опции

export type MoneyIntlFormatter = {
  format(money: MoneyBase, locale?: string, options?: MoneyIntlOptions): string;
};
