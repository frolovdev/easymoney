module.exports = {
  // p: ["<rootDir>/packages/*"],
  projects: ["<rootDir>/packages/*/jest.config.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  modulePathIgnorePatterns: ["dist"],
  testMatch: [`**/*.test.ts`, `**/*.propbased-test.ts`],
};
