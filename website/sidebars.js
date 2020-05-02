module.exports = {
  someSidebar: {
    Introduction: ["introduction/getting-started", "introduction/installation"],
    "API Reference": [
      "api/api-reference",
      {
        type: "category",
        label: "money",
        items: [
          {
            type: "category",
            label: "createMoney",
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
              "api/money/createMoney/subtract",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "bigint-money",
        items: [
          {
            type: "category",
            label: "createBigIntMoney",
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
              "api/bigint-money/createBigIntMoney/subtract",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "bignumber.js",
        items: [
          {
            type: "category",
            label: "createBigNumberMoney",
            items: [
              "api/bignumber.js/createBigNumberMoney/Description",
              "api/bignumber.js/createBigNumberMoney/add",
              "api/bignumber.js/createBigNumberMoney/absolute",
              "api/bignumber.js/createBigNumberMoney/allocate",
              "api/bignumber.js/createBigNumberMoney/allocateTo",
              "api/bignumber.js/createBigNumberMoney/compare",
              "api/bignumber.js/createBigNumberMoney/divide",
              "api/bignumber.js/createBigNumberMoney/equals",
              "api/bignumber.js/createBigNumberMoney/getAmount",
              "api/bignumber.js/createBigNumberMoney/getCurrency",
              "api/bignumber.js/createBigNumberMoney/greaterThan",
              "api/bignumber.js/createBigNumberMoney/greaterThanOrEqual",
              "api/bignumber.js/createBigNumberMoney/isNegative",
              "api/bignumber.js/createBigNumberMoney/isPositive",
              "api/bignumber.js/createBigNumberMoney/isSameCurrency",
              "api/bignumber.js/createBigNumberMoney/isZero",
              "api/bignumber.js/createBigNumberMoney/lessThan",
              "api/bignumber.js/createBigNumberMoney/lessThanOrEqual",
              "api/bignumber.js/createBigNumberMoney/mod",
              "api/bignumber.js/createBigNumberMoney/multiply",
              "api/bignumber.js/createBigNumberMoney/negative",
              "api/bignumber.js/createBigNumberMoney/ratioOf",
              "api/bignumber.js/createBigNumberMoney/subtract",
            ],
          },
        ],
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
              "api/currencies/createCurrencyList/subUnitFor",
            ],
          },
          {
            type: "category",
            label: "createAgregatedCurrencyList",
            items: [
              "api/currencies/createAgregatedCurrencyList/Description",
              "api/currencies/createAgregatedCurrencyList/contains",
              "api/currencies/createAgregatedCurrencyList/getCurrencies",
              "api/currencies/createAgregatedCurrencyList/subUnitFor",
            ],
          },
          {
            type: "category",
            label: "convertCurrencyMapToArray",
            items:[ "api/currencies/convertCurrencyMapToArray"]
          }
        ],
      },
      {
        type: "category",
        label: "formatter",
        items: [
          {
            type: "category",
            label: "createMoneyIntlFormatter",
            items: [
              "api/formatter/createMoneyIntlFormatter/Description",
              "api/formatter/createMoneyIntlFormatter/format",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "crypto-formatter",
        items: [
          {
            type: "category",
            label: "createMoneyCryptoFormatter",
            items: [
              "api/crypto-formatter/createMoneyCryptoFormatter/Description",
              "api/crypto-formatter/createMoneyCryptoFormatter/format",
            ],
          },
        ],
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
    ],
  },
};
