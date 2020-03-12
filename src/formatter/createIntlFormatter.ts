import { MoneyBase } from "../money/types";
import { bind } from "./../bind";

import { IntlFormatter, CreateIntlFormatter } from "./types";

import { currencies } from "../currencies/currencies";
import { CurrencyListISO, CurrencyUnitISO } from "../currencies/types";
import { createCurrencyList } from "../currencies";

type PrivateInstance = {
  currencyList: CurrencyListISO;
  formatter: Intl.NumberFormat;
};

export function createIntlFormatterFactory(
  formatter: Intl.NumberFormat,
  currencyList: CurrencyListISO
): IntlFormatter {
  const publicInstance = {} as IntlFormatter;

  const privateInstance: PrivateInstance = {
    currencyList,
    formatter
  };

  publicInstance.format = bind(format, privateInstance);

  return publicInstance;
}

export function format(
  privateInstance: PrivateInstance,
  moneyInstance: MoneyBase
) {
  const amount = moneyInstance.getAmount();

  const { formatter } = privateInstance;

  return formatter.format(Number(amount));
}

function createIntlFormatterWithCustomCurrencies(
  currencies: CurrencyUnitISO[],
  locales?: string | string[],
  options?: Intl.NumberFormatOptions
) {
  const formatter = new Intl.NumberFormat(locales, options);

  const currencyList = createCurrencyList(currencies);

  return createIntlFormatterFactory(formatter, currencyList);
}

export function createBaseIntlFormatter(): CreateIntlFormatter {
  return createIntlFormatterWithCustomCurrencies.bind(null, currencies);
}
