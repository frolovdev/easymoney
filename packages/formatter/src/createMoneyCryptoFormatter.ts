import { bind } from "@easymoney/core";
import {
  createCurrencyList,
  CurrencyList,
  CurrencyUnitISO,
} from "@easymoney/currencies";
import { MoneyIntlOptions, MoneyIntlFormatter } from "./types";
import { MoneyBase } from "@easymoney/money";
import { lpad } from "./lpad";

type PrivateInstance = {
  currencyList: CurrencyList<CurrencyUnitISO>;
};

export function createIntlFormatterFactory(
  currencyList: CurrencyList<CurrencyUnitISO>
) {
  const privateInstance = { currencyList };

  const publicInstance = {
    format: bind(format, privateInstance),
  } as MoneyIntlFormatter;

  return publicInstance;
}

export function createMoneyIntlFormatterUnit(currencies: CurrencyUnitISO[]) {
  const currencyList = createCurrencyList(currencies);

  return createIntlFormatterFactory.bind(null, currencyList);
}

const defaultOptions: MoneyIntlOptions = {
  currencyDisplay: "symbol",
  useGrouping: true,
  style: "currency",
};

function format(
  privateInstance: PrivateInstance,
  money: MoneyBase,
  locale: string = "en-US",
  options: MoneyIntlOptions
) {
  const mergedOptions = { ...defaultOptions, ...options };
  let valueBase = money.getAmount();
  let negative = false;

  if (valueBase[0] === "-") {
    negative = true;
    valueBase = valueBase.slice(1);
  }

  const subunit = privateInstance.currencyList.subUnitFor(money.getCurrency());
  const valueLength = valueBase.length;

  let formatted: string;
  let decimalDigitsLength;
  if (valueLength > subunit) {
    formatted = valueBase.slice(0, valueLength - subunit);
    const decimalDigits = valueBase.slice(valueLength - subunit);

    decimalDigitsLength = decimalDigits.length;
    if (decimalDigitsLength > 0) {
      formatted = `${formatted}.${decimalDigits}`;
    }
  } else {
    const zeros = lpad("", "0", subunit - valueLength);
    formatted = `0.${zeros}${valueBase}`;
  }

  if (negative === true) {
    formatted = `-${formatted}`;
  }

  const currency = money.getCurrency();
  return Number(formatted).toLocaleString(locale, {
    currency: typeof currency === "object" ? currency.code : currency,
    useGrouping: mergedOptions.useGrouping,
    style: mergedOptions.style,
    currencyDisplay: mergedOptions.currencyDisplay,
    minimumFractionDigits:
      mergedOptions.minimumFractionDigits || decimalDigitsLength,
    maximumFractionDigits:
      mergedOptions.maximumFractionDigits || decimalDigitsLength,
  });
}
