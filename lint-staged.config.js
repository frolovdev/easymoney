module.exports = {
  "**/*.ts?(x)": ["prettier --write", "git add"],
  "*.json": ["prettier --write", "git add"],
};
