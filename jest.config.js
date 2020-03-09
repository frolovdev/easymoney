module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  testMatch: [`<rootDir>/src/**/*.test.ts`]
};
