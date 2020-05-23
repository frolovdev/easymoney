module.exports = {
  rootDir: "./integration",
  // roots: ["<rootDir>", "<rootDir>/integration"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "<rootDir>/node_modules"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  preset: "ts-jest",
  testMatch: [`<rootDir>/**/*.test.ts`, `<rootDir>/**/*.propbased-test.ts`],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.integration.json"
    }
  },
  verbose: true
};
