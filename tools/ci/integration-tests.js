const fs = require("fs");
const path = require("path");

const { getPackages, getPackageJsonDataFromPackages } = require("./packages");

try {
  const rootPckJsonPath = path.join(
    __dirname,
    "../../integration",
    "package.json"
  );
  const packagesPath = path.join(__dirname, "../..", "packages");

  const rootPackageJson = fs.readFileSync(rootPckJsonPath, "utf8");

  const rootPackageData = JSON.parse(rootPackageJson);

  const { packages, paths } = getPackages(packagesPath);

  const packagesData = getPackageJsonDataFromPackages(packages, paths);

  const arrayWithNameVersion = packagesData.reduce((acc, { name, version }) => {
    acc[name] = version;
    return acc;
  }, {});

  const newDevDeps = {
    ...rootPackageData.devDependencies,
    ...arrayWithNameVersion
  };

  const newRootPackageJson = {
    ...rootPackageData,
    devDependencies: newDevDeps
  };

  // // save an old package json
  // fs.writeFileSync(
  //   path.join(root, "old-package.json"),
  //   rootPackageJson,
  //   "utf8"
  // );

  // console.log("successfullt save old package.json");

  // rewrite new one
  fs.writeFileSync(
    rootPckJsonPath,
    JSON.stringify(newRootPackageJson, null, 2),
    "utf8"
  );

  console.log("successfullt create new package.json");
} catch (error) {
  console.log("error", error);
  process.exit(1);
}
