import { bind } from "./../bind";
import { CurrencyUnit, CurrencyList, CurrencyMap, AnyCurrency } from "./types";
import { assert } from "../assert";

type PrivateInstance<C> = {
  currencies: CurrencyMap<C>;
};

type NewList<C> = CurrencyList<Partial<C>>;

const createAgregatedCurrencyList = <C extends CurrencyUnit>(
  currenciesList: NewList<C>[]
): NewList<C> => {
  const agregatedCurrencyMap: CurrencyMap<Partial<C>> = {};

  for (let kl = 0; kl < currenciesList.length; kl++) {
    const currencyList = currenciesList[kl];

    const currencyMap = currencyList.getCurrencies();

    const keys = Object.keys(currencyMap);

    for (let i = 0; i < keys.length; i++) {
      const currency = currencyMap[keys[i]];

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

      agregatedCurrencyMap[currency.code] = currency;
    }
  }

  const privateInstance = {
    currencies: agregatedCurrencyMap
  };

  const publicInstance = {} as NewList<C>;

  publicInstance.contains = bind(contains, privateInstance);
  publicInstance.getCurrencies = bind(getCurrencies, privateInstance);

  return publicInstance;
};

function contains<C>(
  privateInstance: PrivateInstance<C>,
  currency: AnyCurrency
): boolean {
  return !!privateInstance.currencies[currency.code];
}

function getCurrencies<C>(privateInstance: PrivateInstance<C>) {
  return privateInstance.currencies;
}

export { createAgregatedCurrencyList };
