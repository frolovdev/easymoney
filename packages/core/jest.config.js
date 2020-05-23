const baseConfig = require("../../jest.config.base.js");
const pack = require("./package");
module.exports = {
  ...baseConfig,
  name: pack.name,
  displayName: pack.name
};
