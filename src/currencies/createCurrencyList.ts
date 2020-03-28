import { bind } from "./../bind";
import { CurrencyUnit, CurrencyList, CurrencyMap, AnyCurrency } from "./types";
import { assert } from "../assert";

type PrivateInstance<C> = {
  currencies: CurrencyMap<C>;
};

type Instance<C> = {
  publicInstance: CurrencyList<C>;
  privateInstance: PrivateInstance<C>;
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

  const instance = { publicInstance, privateInstance };

  publicInstance.contains = bind(contains, privateInstance);
  publicInstance.getCurrencies = bind(getCurrencies, privateInstance);
  publicInstance.subUnitFor = bind(subUnitFor, instance);

  return publicInstance;
}

/*



public function subunitFor(Currency $currency)
    {
        if (!$this->contains($currency)) {
            throw new UnknownCurrencyException('Cannot find ISO currency '.$currency->getCode());
        }

        return $this->getCurrencies()[$currency->getCode()]['minorUnit'];
    }

*/

function subUnitFor<C extends CurrencyUnit>(
  instance: Instance<C>,
  currency: C | string
) {
  const currencyCode = typeof currency === "object" ? currency.code : currency;
  if (!instance.publicInstance.contains(currency)) {
    throw new Error(`Cannot find ISO currency ${currencyCode}`);
  }

  return instance.privateInstance.currencies[currencyCode].minorUnit;
}

function contains<C extends CurrencyUnit>(
  privateInstance: PrivateInstance<C>,
  currency: AnyCurrency | string
): boolean {
  const code = typeof currency === "object" ? currency.code : currency;
  return !!privateInstance.currencies[code];
}

function getCurrencies<C>(privateInstance: PrivateInstance<C>) {
  return privateInstance.currencies;
}

export { createCurrencyList };
