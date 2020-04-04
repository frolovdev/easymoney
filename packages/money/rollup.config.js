import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-visualizer";
import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    {
      name: "EasyMoneyCommon",
      file: pkg.unpkg,
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    resolve(),
    babel({ exclude: "node_modules/**" }),
    production && terser(),
    analyze({
      filename: `stats/${pkg.name}.html`,
      title: `${pkg.name} size report`,
      sourcemap: true,
      template: "treemap",
    }),
    analyze({
      sourcemap: true,
      json: true,
      filename: `stats/${pkg.name}.json`,
    }),
  ],
};
