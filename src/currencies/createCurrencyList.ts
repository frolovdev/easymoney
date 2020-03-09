import { bind } from "./../bind";
import { CurrencyUnit, CurrencyList, CurrencyMap, AnyCurrency } from "./types";
import { assert } from "../assert";

type PrivateInstance<C> = {
  currencies: CurrencyMap<C>;
};

function createCurrencyList<C extends CurrencyUnit>(
  currencies: C[]
): CurrencyList<C> {
  const currencyMap: CurrencyMap<C> = {};

  for (let i = 0; i < currencies.length; i++) {
    const currency = currencies[i];

    assert(
      typeof currency.code === "string",
      new TypeError(
        `Currency code must be a string and not empty. ${currency.code} given`
      )
    );

    assert(
      typeof currency.minorUnit === "number",
      new TypeError(
        `Currency ${currency.code} does not have a valid minor unit. Must be a positive integer.`
      )
    );

    currencyMap[currency.code] = currency;
  }

  const privateInstance = {
    currencies: currencyMap
  };

  const publicInstance = {} as CurrencyList<C>;

  publicInstance.contains = bind(contains, privateInstance);
  publicInstance.getCurrencies = bind(getCurrencies, privateInstance);

  return publicInstance;
}

function contains<C>(
  privateInstance: PrivateInstance<C>,
  currency: AnyCurrency
): boolean {
  return !!privateInstance.currencies[currency.code];
}

function getCurrencies<C>(privateInstance: PrivateInstance<C>) {
  return privateInstance.currencies;
}

export { createCurrencyList };
