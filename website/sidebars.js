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
          "api/createMoney/Description",
          "api/createMoney/add",
          "api/createMoney/absolute",
          "api/createMoney/allocate",
          "api/createMoney/allocateTo",
          "api/createMoney/compare",
          "api/createMoney/divide",
          "api/createMoney/equals",
          "api/createMoney/getAmount",
          "api/createMoney/getCurrency",
          "api/createMoney/greaterThan",
          "api/createMoney/greaterThanOrEqual",
          "api/createMoney/isNegative",
          "api/createMoney/isPositive",
          "api/createMoney/isSameCurrency",
          "api/createMoney/isZero",
          "api/createMoney/lessThan",
          "api/createMoney/lessThanOrEqual",
          "api/createMoney/mod",
          "api/createMoney/multiply",
          "api/createMoney/negative",
          "api/createMoney/ratioOf",
          "api/createMoney/subtract"
        ]
      },
      {
        type: "category",
        label: "bigint-money",
        items: [
          "api/createBigIntMoney/Description",
          "api/createBigIntMoney/add",
          "api/createBigIntMoney/allocate",
          "api/createBigIntMoney/allocateTo",
          "api/createBigIntMoney/compare",
          "api/createBigIntMoney/divide",
          "api/createBigIntMoney/equals",
          "api/createBigIntMoney/getAmount",
          "api/createBigIntMoney/getCurrency",
          "api/createBigIntMoney/getSource",
          "api/createBigIntMoney/greaterThan",
          "api/createBigIntMoney/greaterThanOrEqual",
          "api/createBigIntMoney/isSameCurrency",
          "api/createBigIntMoney/lessThan",
          "api/createBigIntMoney/lessThanOrEqual",
          "api/createBigIntMoney/multiply",
          "api/createBigIntMoney/subtract"
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
              "api/createCurrencyList/Description",
              "api/createCurrencyList/contains",
              "api/createCurrencyList/getCurrencies"
            ]
          },
          {
            type: "category",
            label: "createAgregatedCurrencyList",
            items: [
              "api/createAgregatedCurrencyList/Description",
              "api/createAgregatedCurrencyList/contains",
              "api/createAgregatedCurrencyList/getCurrencies"
            ]
          }
        ]
      },
      {
        type: "category",
        label: "createCalculator",
        items: [
          "api/createCalculator/Description",
          "api/createCalculator/absolute",
          "api/createCalculator/add",
          "api/createCalculator/ceil",
          "api/createCalculator/compare",
          "api/createCalculator/divide",
          "api/createCalculator/floor",
          "api/createCalculator/mod",
          "api/createCalculator/multiply",
          "api/createCalculator/round",
          "api/createCalculator/share",
          "api/createCalculator/subtract"
        ]
      },
      {
        type: "category",
        label: "createBigIntCalculator",
        items: [
          "api/createBigIntCalculator/Description",
          "api/createBigIntCalculator/absolute",
          "api/createBigIntCalculator/add",
          "api/createBigIntCalculator/compare",
          "api/createBigIntCalculator/divide",
          "api/createBigIntCalculator/mod",
          "api/createBigIntCalculator/multiply",
          "api/createBigIntCalculator/share",
          "api/createBigIntCalculator/subtract"
        ]
      }
    ]
  }
};
