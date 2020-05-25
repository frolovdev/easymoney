import pkg from "./package.json";
import {
  createEsCjs,
  createUmd,
  createCommon
} from "../../tools/rollup.config";

const name = "crypto-formatter";
export default {
  ...createCommon(name),
  output: [
    ...createEsCjs(name, {
      file: {
        cjs: pkg.main,
        es: pkg.module
      }
    }),
    createUmd(name, {
      file: pkg.unpkg,
      umdName: "easymoneyCryptoFormatter",
      globals: {
        "@easymoney/core": "easyMoneyCore",
        "@easymoney/currencies": "easyMoneyCurrencies"
      }
    })
  ],
  external: ["@easymoney/core", "@easymoney/currencies"]
};
