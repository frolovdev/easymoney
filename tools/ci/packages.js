const fs = require("fs");
const path = require("path");

function getPackageJsonDataFromPackages(packages, paths) {
  const regEXP = /package.json/;
  const packageJsons = packages
    .flatMap(x => x)
    .filter(file => regEXP.test(file));

  const packagesJsonData = packageJsons.map((file, i) =>
    fs.readFileSync(`${paths[i]}/${file}`, { encoding: "utf8" })
  );

  const parsedPackagesJsonData = packagesJsonData.map(data => JSON.parse(data));

  return parsedPackagesJsonData;
}

function getPackages(dir) {
  const files = fs.readdirSync(dir);

  const paths = [];
  const packages = [];
  files
    .filter(file => fs.statSync(`${dir}/${file}`).isDirectory())
    .forEach(file => {
      const localDir = `${dir}/${file}`;

      const package = fs.readdirSync(localDir);

      paths.push(localDir);
      packages.push(package);
    });

  return { packages, paths };
}

module.exports = { getPackages, getPackageJsonDataFromPackages };
