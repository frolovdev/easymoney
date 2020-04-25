/* BIG THANKS TO https://github.com/zerobias/effector
 * for this idea with configuration, check them out, they doing greate!
 */

import babel from "rollup-plugin-babel";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
const { resolve: resolvePath } = require("path");
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-visualizer";
import commonjs from "rollup-plugin-commonjs";
import { minifyConfig } from "./minification.config";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

import { getSourcemapPathTransform } from "./utils";

const getTypescript = () =>
  typescript({
    tsconfig: resolvePath(__dirname, "tsconfig.json"),
  });
const getPlugins = (name) => {
  return {
    babel: babel({
      runtimeHelpers: false,
      exclude: /(\.re|node_modules.*)/,
    }),
    analyzer: analyze({
      filename: `stats/${name}.html`,
      title: `${name} size report`,
      sourcemap: true,
      template: "treemap",
    }),
    analyzerJSON: analyze({
      sourcemap: true,
      json: true,
      filename: `stats/${name}.json`,
    }),
    sizeSnapshot: sizeSnapshot({
      printInfo: true,
    }),
    terser: terser(
      minifyConfig({
        beautify: !!process.env.PRETTIFY,
        inline: !name.endsWith(".umd"),
      })
    ),
    json: json({
      preferConst: true,
      indent: "  ",
    }),
    typescript: getTypescript(),
  };
};

export const createCommon = (name, isBigInt) => ({
  input: resolvePath(__dirname, "src", "index.ts"),
  plugins: [
    getTypescript(),
    babel({
      runtimeHelpers: false,
      exclude: /(\.re|node_modules.*)/,
      babelrc: false,
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            useBuiltIns: "entry",
            corejs: 3,
            modules: false,
            shippedProposals: true,
            targets: {
              node: "current",
              browsers: [
                "last 2 Chrome versions",
                "last 2 Firefox versions",
                "last 2 Safari versions",
                "last 1 Edge versions",
              ],
            },
          },
        ],
      ],
      plugins: [
        "@babel/plugin-proposal-export-namespace-from",
        ["@babel/plugin-proposal-class-properties", { loose: true }],
      ],
    }),
    resolve(),
    commonjs(),
  ],
  external: [
    "path",
    "execa",
    "fs-extra",
    "chroma-js",
    "js-yaml",
    "viz.js",
    "viz.js/full.render.js",
    "sharp",
    "chalk",
    "rollup",
    "rollup-plugin-json",
    "@rollup/plugin-typescript",
    "@rollup/plugin-alias",
    "rollup-plugin-babel",
    "rollup-plugin-node-resolve",
    "rollup-plugin-terser",
    "rollup-plugin-commonjs",
    "rollup-plugin-replace",
    "rollup-plugin-size-snapshot",
    "rollup-plugin-visualizer",
    "readable-stream",
    "cross-fetch",
    "zlib",
    "tar-stream",
    "events",
    "assert",
    "string_decoder",
    "buffer",
    "crypto",
    "fs",
    "stream",
  ],
});

export function createEsCjs(name, { file: { es, cjs }, input = "index" }) {
  const plugins = getPlugins(input === "index" ? name : input);
  const pluginList = [
    // plugins.resolve,
    // plugins.typescript,
    // plugins.json,
    // plugins.babel,
    // plugins.replace,

    // plugins.commonjs,
    // plugins.sizeSnapshot,
    plugins.terser,
  ].filter(Boolean);

  const outputConfigs = [
    {
      file: cjs,
      format: "cjs",
      freeze: false,
      name,
      sourcemap: true,
      sourcemapPathTransform: getSourcemapPathTransform(name),
      plugins: pluginList,
    },
    es && {
      plugins: pluginList,
      file: es,
      format: "es",
      freeze: false,
      name,
      sourcemap: true,
      sourcemapPathTransform: getSourcemapPathTransform(name),
    },
  ];

  return outputConfigs;
}

export function createUmd(name, { file, umdName, globals }) {
  const plugins = getPlugins(`${name}.umd`);

  const umdOutput = {
    file,
    format: "umd",
    freeze: false,
    name: umdName,
    sourcemap: true,
    globals,
    plugins: [
      // plugins.resolve,
      // plugins.typescript,
      // plugins.json,
      // plugins.babel,
      // plugins.replace,

      // plugins.commonjs,
      // plugins.sizeSnapshot,
      plugins.terser,
    ].filter(Boolean),
  };
  return umdOutput;
}
