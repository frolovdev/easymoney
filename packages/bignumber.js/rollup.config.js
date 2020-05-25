import pkg from "./package.json";
import {
  createEsCjs,
  createUmd,
  createCommon
} from "../../tools/rollup.config";

const name = "bignumber.js";
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
      umdName: "easymoneyBignumber",
      globals: {
        "@easymoney/core": "easyMoneyCore",
        "@easymoney/money": "easyMoneyMoney",
        "bignumber.js": "bignumberJS"
      }
    })
  ],
  external: ["@easymoney/core", "@easymoney/money", "bignumber.js"]
};
