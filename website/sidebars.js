module.exports = {
  someSidebar: {
    Introduction: ["introduction/getting-started", "introduction/installation"],
    "API Reference": [
      "api/api-reference",
      {
        type: "category",
        label: "money",
        items: [
          "api/money/createMoney/Description",
          {
            type: "category",
            label: "createMoney",
            items: [
              "api/money/createMoney/methods"
            ],
          },
        ],
      },
      {
        type: "category",
        label: "bigint-money",
        items: [
          "api/bigint-money/createBigIntMoney/Description",
          {
            type: "category",
            label: "createBigIntMoney",
            items: [
              "api/bigint-money/createBigIntMoney/methods"
            ],
          },
        ],
      },
      {
        type: "category",
        label: "bignumber.js",
        items: [
          "api/bignumber.js/createBigNumberMoney/Description",
          {
            type: "category",
            label: "createBigNumberMoney",
            items: [
              "api/bignumber.js/createBigNumberMoney/methods"
            ],
          },
        ],
      },
      {
        type: "category",
        label: "currencies",
        items: [
          "api/currencies/createCurrencyList/Description",
          {
            type: "category",
            label: "createCurrencyList",
            items: [
              "api/currencies/createCurrencyList/methods"
            ],
          },
          {
            type: "category",
            label: "createAgregatedCurrencyList",
            items: [
              "api/currencies/createAgregatedCurrencyList/methods"
            ],
          },
          "api/currencies/convertCurrencyMapToArray"
        ],
      },
      {
        type: "category",
        label: "formatter",
        items: [
          "api/formatter/createMoneyIntlFormatter/Description",
          {
            type: "category",
            label: "createMoneyIntlFormatter",
            items: [
              "api/formatter/createMoneyIntlFormatter/methods"
            ],
          },
        ],
      },
      {
        type: "category",
        label: "crypto-formatter",
        items: [
          "api/crypto-formatter/createMoneyCryptoFormatter/Description",
          {
            type: "category",
            label: "createMoneyCryptoFormatter",
            items: [
              "api/crypto-formatter/createMoneyCryptoFormatter/methods"             
            ],
          },
        ],
      },
    ],
  },
};
