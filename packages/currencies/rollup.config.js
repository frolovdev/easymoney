import pkg from "./package.json";
import {
  createEsCjs,
  createUmd,
  createCommon
} from "../../tools/rollup.config";

const name = "currencies";
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
      umdName: "easymoneyCurrencies",
      globals: {
        "@easymoney/core": "easyMoneyCore"
      }
    })
  ],
  external: ["@easymoney/core"]
};
