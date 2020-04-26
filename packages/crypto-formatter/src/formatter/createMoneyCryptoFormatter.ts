import { bind } from "@easymoney/core";
import {
  createCurrencyList,
  CurrencyList,
  CurrencyUnitCrypto
} from "@easymoney/currencies";
import { CryptoOptions, MoneyCryptoFormatter } from "./types";
import { MoneyBase } from "@easymoney/money";
import { lpad } from "./lpad";
import { roundMoneyValue } from "./roundMoneyValue";

type PrivateInstance = {
  currencyList: CurrencyList<CurrencyUnitCrypto>;
  options: CryptoOptions;
};

export function createCryptoFormatterFactory(
  currencyList: CurrencyList<CurrencyUnitCrypto>,
  options?: CryptoOptions
) {
  const privateInstance = { currencyList, options };

  const publicInstance = {
    format: bind(format, privateInstance)
  } as MoneyCryptoFormatter;

  return publicInstance;
}

export function createMoneyCryptoFormatterUnit(
  currencies: CurrencyUnitCrypto[]
) {
  const currencyList = createCurrencyList(currencies);

  return createCryptoFormatterFactory.bind(null, currencyList);
}

const defaultOptions: CryptoOptions = {
  space: false,
  currencyPosition: 1
};

function format(
  privateInstance: PrivateInstance,
  money: MoneyBase<CurrencyUnitCrypto>,
  options: CryptoOptions
) {
  const mergedOptions = {
    ...defaultOptions,
    ...privateInstance.options,
    ...options
  };

  let valueBase = money.getAmount();
  let negative = false;

  if (valueBase[0] === "-") {
    negative = true;
    valueBase = valueBase.slice(1);
  }

  const subunit = privateInstance.currencyList.subUnitFor(money.getCurrency());
  const fractionDigits = mergedOptions.fractionDigits
    ? mergedOptions.fractionDigits
    : subunit;
  valueBase = roundMoneyValue(valueBase, fractionDigits, subunit);
  const valueLength = valueBase.length;

  let formatted: string;

  if (valueLength > subunit) {
    formatted = valueBase.slice(0, valueLength - subunit);

    if (subunit) {
      formatted = `${formatted}.${valueBase.substr(valueLength - subunit)}`;
    }
  } else {
    formatted = "0."
      .concat(lpad("", "0", subunit - valueLength))
      .concat(valueBase);
  }

  if (fractionDigits === 0) {
    formatted = formatted.substr(0, formatted.indexOf("."));
  } else if (fractionDigits > subunit) {
    formatted = formatted.concat(lpad("", "0", fractionDigits - subunit));
  } else if (fractionDigits < subunit) {
    const lastDigit = formatted.indexOf(".") + fractionDigits + 1;
    formatted = formatted.substr(0, lastDigit);
  }

  const currency = money.getCurrency();
  const code = typeof currency === "object" ? currency.code : currency;

  const space = mergedOptions.space ? " " : "";
  if (mergedOptions.currencyPosition === -1) {
    formatted = `${code}${space}${formatted}`;
  } else if (mergedOptions.currencyPosition === 1) {
    formatted = `${formatted}${space}${code}`;
  }

  if (negative === true) {
    formatted = `-${formatted}`;
  }

  return formatted;
}
