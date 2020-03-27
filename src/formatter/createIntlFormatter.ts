import { MoneyBase } from "../money/types";

export function createIntlFormatter() {
  const publicInstance = { format };

  return publicInstance;
}

type Options = {
  currencyDisplay: "code" | "symbol" | "name";
  minimumFractionDigits: number;
  maximumFractionDigits: number;
  useGrouping: boolean;
  style: "currency" | "decimal";
};

const defaultOptions: Options = {
  currencyDisplay: "symbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  useGrouping: true,
  style: "currency"
};

function format<M extends { getCurrency: Function; getAmount: Function }>(
  money: M,
  locale: string = "en-US",
  options: Options = defaultOptions
) {
  // @ts-ignore
  return money.getAmount().toLocaleString(locale, {
    currency: money.getCurrency(),
    useGrouping: options.useGrouping,
    style: options.style,
    currencyDisplay: options.currencyDisplay,
    minimumFractionDigits: options.minimumFractionDigits,
    maximumFractionDigits: options.maximumFractionDigits
  });
}

// 1

// конвертнуть число из меньшей валюты в оригинальную

// заюзать на ней toLocaleString иметь возможность передать опции
