  module.exports = {
  someSidebar: {
    Introduction: [
    "introduction/getting-started",
    "introduction/installation"],
    "API Reference": [
      "api/api-reference",
      {
        type: "category",
        label: "money",
        items: [
          "api/money/createMoney/Description",
          "api/money/createMoney/add",
          "api/money/createMoney/absolute",
          "api/money/createMoney/allocate",
          "api/money/createMoney/allocateTo",
          "api/money/createMoney/compare",
          "api/money/createMoney/divide",
          "api/money/createMoney/equals",
          "api/money/createMoney/getAmount",
          "api/money/createMoney/getCurrency",
          "api/money/createMoney/greaterThan",
          "api/money/createMoney/greaterThanOrEqual",
          "api/money/createMoney/isNegative",
          "api/money/createMoney/isPositive",
          "api/money/createMoney/isSameCurrency",
          "api/money/createMoney/isZero",
          "api/money/createMoney/lessThan",
          "api/money/createMoney/lessThanOrEqual",
          "api/money/createMoney/mod",
          "api/money/createMoney/multiply",
          "api/money/createMoney/negative",
          "api/money/createMoney/ratioOf",
          "api/money/createMoney/subtract"
        ]
      },
      {
        type: "category",
        label: "bigint-money",
        items: [
          "api/bigint-money/createBigIntMoney/Description",
          "api/bigint-money/createBigIntMoney/add",
          "api/bigint-money/createBigIntMoney/allocate",
          "api/bigint-money/createBigIntMoney/allocateTo",
          "api/bigint-money/createBigIntMoney/compare",
          "api/bigint-money/createBigIntMoney/divide",
          "api/bigint-money/createBigIntMoney/equals",
          "api/bigint-money/createBigIntMoney/getAmount",
          "api/bigint-money/createBigIntMoney/getCurrency",
          "api/bigint-money/createBigIntMoney/getSource",
          "api/bigint-money/createBigIntMoney/greaterThan",
          "api/bigint-money/createBigIntMoney/greaterThanOrEqual",
          "api/bigint-money/createBigIntMoney/isSameCurrency",
          "api/bigint-money/createBigIntMoney/lessThan",
          "api/bigint-money/createBigIntMoney/lessThanOrEqual",
          "api/bigint-money/createBigIntMoney/multiply",
          "api/bigint-money/createBigIntMoney/subtract"
        ]
      },
      {
        type: "category",
        label: "currencies",
        items: [
          {
            type: "category",
            label: "createCurrencyList",
            items: [
              "api/currencies/createCurrencyList/Description",
              "api/currencies/createCurrencyList/contains",
              "api/currencies/createCurrencyList/getCurrencies",
              "api/currencies/createCurrencyList/subUnitFor"
            ]
          },
          {
            type: "category",
            label: "createAgregatedCurrencyList",
            items: [
              "api/currencies/createAgregatedCurrencyList/Description",
              "api/currencies/createAgregatedCurrencyList/contains",
              "api/currencies/createAgregatedCurrencyList/getCurrencies",
              "api/currencies/createAgregatedCurrencyList/subUnitFor"
            ]
          }
        ]
      },
      {
        type: "category",
        label: "formatter",
        items: [
          "api/formatter/createMoneyIntlFormatter/Description",
          "api/formatter/createMoneyIntlFormatter/format",
        ]
      },
      // {
      //   type: "category",
      //   label: "createCalculator",
      //   items: [
      //     "api/createCalculator/Description",
      //     "api/createCalculator/absolute",
      //     "api/createCalculator/add",
      //     "api/createCalculator/ceil",
      //     "api/createCalculator/compare",
      //     "api/createCalculator/divide",
      //     "api/createCalculator/floor",
      //     "api/createCalculator/mod",
      //     "api/createCalculator/multiply",
      //     "api/createCalculator/round",
      //     "api/createCalculator/share",
      //     "api/createCalculator/subtract"
      //   ]
      // },
      // {
      //   type: "category",
      //   label: "createBigIntCalculator",
      //   items: [
      //     "api/createBigIntCalculator/Description",
      //     "api/createBigIntCalculator/absolute",
      //     "api/createBigIntCalculator/add",
      //     "api/createBigIntCalculator/compare",
      //     "api/createBigIntCalculator/divide",
      //     "api/createBigIntCalculator/mod",
      //     "api/createBigIntCalculator/multiply",
      //     "api/createBigIntCalculator/share",
      //     "api/createBigIntCalculator/subtract"
      //   ]
      // }
    ]
  }
};
