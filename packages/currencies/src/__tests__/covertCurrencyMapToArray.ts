import { covertCurrencyMapToArray } from "../covertCurrencyMapToArray";
import { cryptoCurrenciesMap } from "../currencies/cryptoCurrencies";
describe("covertCurrencyMapToArray", () => {
  it("should covert map to array", () => {
    const array = covertCurrencyMapToArray(cryptoCurrenciesMap);

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
