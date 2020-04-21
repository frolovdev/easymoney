module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  preset: "ts-jest",
  testMatch: [`**/__tests__/*.test.ts`, `**/__tests__/*.propbased-test.ts`],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // modulePathIgnorePatterns: ["dist"],
  moduleNameMapper: {
    "^@easymoney\\/((?!config)[^\\/]+)": "<rootDir>/../$1/src",
  },

  coveragePathIgnorePatterns: ["(tests/.*.mock).(jsx?|tsx?)$"],
  verbose: true,
};
