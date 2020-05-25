import {
  createCurrencyList,
  cryptoCurrenciesMap,
  convertCurrencyMapToArray,
  CurrencyUnitCrypto
} from "@easymoney/currencies";

describe("createCurrencyList", () => {
  let cryptoCurrencies: CurrencyUnitCrypto[];

  beforeAll(() => {
    cryptoCurrencies = convertCurrencyMapToArray(cryptoCurrenciesMap);
  });

  describe("construct", () => {
    it("shouldnt throws an error if data is correct", () => {
      const goodMock = [
        { minorUnit: 2, code: "XBT" },
        { minorUnit: 5, code: "DXBT" }
      ];

      const createList = () => createCurrencyList(goodMock);

      expect(createList).not.toThrow();
    });

    it("should throws an error when minor unit is doesnt exist", () => {
      const badMock = [{ minorUnit: 2, code: "XBT" }, { code: "DXBT" }] as {
        minorUnit: number;
        code: string;
      }[];

      const createList = () => createCurrencyList(badMock);

      expect(createList).toThrow();
    });
    it("should throws an error when code is doesnt exist", () => {
      const badMock = [{ minorUnit: 2, code: "XBT" }, { minorUnit: 3 }] as {
        minorUnit: number;
        code: string;
      }[];

      const createList = () => createCurrencyList(badMock);

      expect(createList).toThrow();
    });

    it("should throws an error when currency object is empty", () => {
      const badMock = [{ minorUnit: 2, code: "XBT" }, {}] as {
        minorUnit: number;
        code: string;
      }[];

      const createList = () => createCurrencyList(badMock);

      expect(createList).toThrow();
    });

    it("should throws an error when code isnt string", () => {
      const badMock = [
        { minorUnit: 2, code: "XBT" },
        {
          minorUnit: 2,
          code: 25
        }
      ] as {
        minorUnit: number;
        code: string;
      }[];

      const createList = () => createCurrencyList(badMock);

      expect(createList).toThrow();
    });

    it("should throws an error when minor unit isnt number", () => {
      const badMock = [
        { minorUnit: "asdas", code: "XBT" },
        {
          minorUnit: 2,
          code: "XYT"
        }
      ] as {
        minorUnit: number;
        code: string;
      }[];

      const createList = () => createCurrencyList(badMock);

      expect(createList).toThrow();
    });
  });

  describe("getCurrencies", () => {
    it("should be equal original length of data", () => {
      const mock = [
        { minorUnit: 2, code: "XBT" },
        { minorUnit: 5, code: "DXBT" }
      ];

      const list = createCurrencyList(mock);

      expect(Object.keys(list.getCurrencies()).length).toEqual(mock.length);
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

      const list = createCurrencyList(mock);

      expect(list.getCurrencies()).toEqual(expectedResult);
    });
  });

  describe("contains", () => {
    it("shouldnt return false if currency doesnt exist in list", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      expect(list.contains(currency)).toEqual(true);
    });

    it("shouldnt return true if currency exist in list", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      expect(list.contains({ minorUnit: 2, code: "XBTt" })).toEqual(false);
    });
  });

  describe("subunitFor", () => {
    it("should throw an error if currency doesnt exist", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      expect(() => list.subUnitFor("TEST")).toThrow();
    });

    it("should return minor unit if currency exist", () => {
      const currency = { minorUnit: 2, code: "XBT" };
      const goodMock = [currency, { minorUnit: 5, code: "DXBT" }];

      const list = createCurrencyList(goodMock);

      expect(list.subUnitFor("XBT")).toEqual(currency.minorUnit);
    });
  });

  describe("working with crypto", () => {
    it("should create list correctly", () => {
      const cryptoCurrencyList = createCurrencyList(cryptoCurrencies);

      expect(cryptoCurrencyList.subUnitFor("BTC")).toEqual(
        cryptoCurrenciesMap.BTC.minorUnit
      );
    });
  });
});
