import {
  convertCurrencyMapToArray,
  cryptoCurrenciesMap
} from "@easymoney/currencies";

describe("convertCurrencyMapToArray", () => {
  it("should covert map to array", () => {
    const array = convertCurrencyMapToArray(cryptoCurrenciesMap);

    expect(array).toEqual([
      {
        code: "BTC",
        minorUnit: 8,
        symbol: "BTC"
      },
      {
        code: "LTC",
        minorUnit: 8,
        symbol: "LTC"
      },
      {
        code: "ETH",
        minorUnit: 18,
        symbol: "ETH"
      }
    ]);
  });
});
