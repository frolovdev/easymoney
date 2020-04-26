const base = require("./jest.config.base.js");
module.exports = {
  // p: ["<rootDir>/packages/*"],
  ...base,
  roots: ["<rootDir>"],
  projects: ["<rootDir>/packages/*/jest.config.js"],
  // moduleNameMapper: {
  //   "@easymoney/(.*)$": "<rootDir>/packages/$1",
  // },
  // preset: "ts-jest",
  // testEnvironment: "node",
  // globals: {
  //   "ts-jest": {
  //     tsConfig: "tsconfig.json",
  //   },
  // },
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest",
  // },

  // modulePathIgnorePatterns: ["dist"],
  // testMatch: [`**/__tests__/*.test.ts`, `**/__tests__/*.propbased-test.ts`],
};
