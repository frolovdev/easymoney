import {
  createAgregatedCurrencyList,
  createCurrencyList,
  currenciesMap,
  convertCurrencyMapToArray,
  CurrencyUnitISO
} from "@easymoney/currencies";

describe("createAgregatedCurrencyList", () => {
  let currencies: CurrencyUnitISO[];

  beforeAll(() => {
    currencies = convertCurrencyMapToArray(currenciesMap);
  });

  describe("construct", () => {
    it("shouldnt throws an error if data is correct", () => {
      const keys = Object.keys(currencies);

      // @ts-ignore
      const currencySet = keys.map(key => currencies[key]);

      const goodMock = [
        {
          minorUnit: 2,
          code: "XBT"
        },
        {
          minorUnit: 5,
          code: "DXBT"
        }
      ];

      const goodMoc1k = [
        { minorUnit: 2, code: "SADXBTA", meta: {} },
        { minorUnit: 5, code: "ASDDXBT", meta: {} }
      ];

      const currencyList = createCurrencyList(goodMock);
      const currencyList1 = createCurrencyList(goodMoc1k);
      const isoCurrencyList = createCurrencyList(currencySet);

      const createList = () =>
        createAgregatedCurrencyList([
          currencyList,
          isoCurrencyList,
          currencyList1
        ]);

      expect(createList).not.toThrow();
    });

    describe("getCurrencies", () => {
      it("should be equal original length of data", () => {
        const keys = Object.keys(currencies);

        // @ts-ignore
        const currencySet = keys.map(key => currencies[key]);

        const goodMock = [
          {
            minorUnit: 2,
            code: "XBT"
          },
          {
            minorUnit: 5,
            code: "DXBT"
          }
        ];

        const goodMoc1k = [
          {
            minorUnit: 2,
            code: "SADXBTA",
            meta: {}
          },
          {
            minorUnit: 5,
            code: "ASDDXBT",
            meta: {}
          }
        ];

        const currencyList = createCurrencyList(goodMock);
        const currencyList1 = createCurrencyList(goodMoc1k);
        const isoCurrencyList = createCurrencyList(currencySet);

        const list = createAgregatedCurrencyList([
          currencyList,
          isoCurrencyList,
          currencyList1
        ]);

        expect(Object.keys(list.getCurrencies()).length).toEqual(
          currencySet.length + goodMock.length + goodMoc1k.length
        );
      });

      it("returns a map of currencies", () => {
        const mock = [
          { minorUnit: 2, code: "XBT" },
          { minorUnit: 5, code: "DXBT" }
        ];

        const expectedResult = {
          XBT: { minorUnit: 2, code: "XBT" },
          DXBT: { minorUnit: 5, code: "DXBT" }
        };

        const currencyList = createCurrencyList(mock);

        const list = createAgregatedCurrencyList([currencyList]);

        expect(list.getCurrencies()).toEqual(expectedResult);
      });
    });
  });

  describe("contains", () => {
    it("shouldnt return false if currency doesnt exist in list", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      const agregatedList = createAgregatedCurrencyList([list]);

      expect(agregatedList.contains(currency)).toEqual(true);
    });

    it("shouldnt return true if currency exist in list", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      const agregatedList = createAgregatedCurrencyList([list]);

      expect(agregatedList.contains({ minorUnit: 2, code: "XBTt" })).toEqual(
        false
      );
    });
  });

  describe("subunitFor", () => {
    it("should throw an error if currency doesnt exist", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);
      const agregatedList = createAgregatedCurrencyList([list]);

      expect(() => list.subUnitFor("TEST")).toThrow();
    });

    it("should return minor unit if currency exist", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);
      const agregatedList = createAgregatedCurrencyList([list]);

      expect(agregatedList.subUnitFor("XBT")).toEqual(currency.minorUnit);
    });
  });
});
