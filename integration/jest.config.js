const baseConfig = require("../jest.config.base.js");
const pack = require("./package");

module.exports = {
  ...baseConfig,
  roots: ["<rootDir>"],

  name: pack.name,
  displayName: pack.name,
  moduleNameMapper: {
    "^@easymoney\\/((?!config)[^\\/]+)": "<rootDir>/../packages/$1/src"
  }
};
