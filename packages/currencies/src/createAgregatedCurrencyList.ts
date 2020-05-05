import { CurrencyList, CurrencyMap } from "./types";
import { assert, bind, Currency, AnyCurrencyUnit } from "@easymoney/core";

type Instance<C> = {
  privateInstance: PrivateInstance<C>;
  publicInstance: NewList<C>;
};

type PrivateInstance<C> = {
  currencies: CurrencyMap<Partial<C>>;
};

type NewList<C> = CurrencyList<Partial<C>>;

const createAgregatedCurrencyList = <C extends AnyCurrencyUnit>(
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

  const instance: Instance<C> = { publicInstance, privateInstance };

  publicInstance.contains = bind(contains, privateInstance);
  publicInstance.getCurrencies = bind(getCurrencies, privateInstance);
  publicInstance.subUnitFor = bind(subUnitFor, instance);

  return publicInstance;
};

function subUnitFor<C extends Currency, ObjCur extends AnyCurrencyUnit>(
  instance: Instance<ObjCur>,
  currency: C extends AnyCurrencyUnit ? C : C extends "string" ? string : never
) {
  const currencyCode = typeof currency === "object" ? currency.code : currency;
  if (!instance.publicInstance.contains(currency)) {
    throw new Error(`Cannot find ISO currency ${currencyCode}`);
  }

  return instance.privateInstance.currencies[currencyCode].minorUnit;
}

function contains<C extends Currency, ObjCur extends AnyCurrencyUnit>(
  privateInstance: PrivateInstance<ObjCur>,
  currency: C extends AnyCurrencyUnit ? C : C extends "string" ? string : never
): boolean {
  const code = typeof currency === "object" ? currency.code : currency;
  return !!privateInstance.currencies[code];
}

function getCurrencies<C>(privateInstance: PrivateInstance<C>) {
  return privateInstance.currencies;
}

export { createAgregatedCurrencyList };
