import { assert, bind, AnyCurrencyUnit, Currency } from "@easymoney/core";
import { CurrencyList, CurrencyMap } from "./types";

type PrivateInstance<C extends AnyCurrencyUnit> = {
  currencies: CurrencyMap<C>;
};

type Instance<C extends AnyCurrencyUnit> = {
  publicInstance: CurrencyList<C>;
  privateInstance: PrivateInstance<C>;
};

function createCurrencyList<C extends AnyCurrencyUnit>(
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

  const instance = { publicInstance, privateInstance };

  publicInstance.contains = bind(contains, privateInstance);
  publicInstance.getCurrencies = bind(getCurrencies, privateInstance);
  publicInstance.subUnitFor = bind(subUnitFor, instance);

  return publicInstance;
}

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

function getCurrencies<ObjCur extends AnyCurrencyUnit>(
  privateInstance: PrivateInstance<ObjCur>
) {
  return privateInstance.currencies;
}

export { createCurrencyList };
