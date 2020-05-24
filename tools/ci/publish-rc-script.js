const {
  default: fetchPackageJson,
  VersionNotFoundError,
  PackageNotFoundError
} = require("package-json");
const publishNpm = require("./publishNpm");
const { getPackages, getPackageJsonDataFromPackages } = require("./packages");
const path = require("path");
const Graph = require("./graph");
const { updatePackagesVersions, checkIsRc } = require("./version");
const { writeDataToDisk } = require("./updatePackageData");

const directoryPath = path.join(__dirname, "../..", "packages");

const { packages, paths } = getPackages(directoryPath);

const parsedPackagesJsonData = getPackageJsonDataFromPackages(packages, paths);

async function prepareData(parsedPackagesJsonData) {
  const packagesToUpdate = [];

  for (let i = 0; i < parsedPackagesJsonData.length; i++) {
    const packageData = parsedPackagesJsonData[i];

    const { version, name } = packageData;

    const pathToPck = paths[i];
    try {
      if (checkIsRc(version)) {
        packagesToUpdate.push({ packageData, pathToPck });
      } else {
        await fetchPackageJson(name, { version });
      }
    } catch (err) {
      if (err instanceof PackageNotFoundError) {
        console.log("need to publish the package", name);
        packagesToUpdate.push({ packageData, pathToPck });
      } else if (err instanceof VersionNotFoundError) {
        console.log("version not found");
        packagesToUpdate.push({ packageData, pathToPck });
      } else {
        console.log("Unhandled error", name, version, err);
        process.exit(1);
      }
    }
  }

  return packagesToUpdate;
}

(async () => {
  try {
    const packagesToUpdate = await prepareData(parsedPackagesJsonData);

    if (packagesToUpdate.length === 0) {
      throw new Error("nothing to update");
    }

    const packagesToUpdateData = packagesToUpdate.map(
      ({ packageData }) => packageData
    );

    const packagesToUpdatePaths = packagesToUpdate.map(
      ({ pathToPck }) => pathToPck
    );

    const updatedPackagesData = updatePackagesVersions(packagesToUpdateData);

    writeDataToDisk(updatedPackagesData, packagesToUpdatePaths);

    const priorityQueue = Graph.createGraphFromPackages(
      updatedPackagesData
    ).topologicalSort();

    priorityQueue.forEach(packageIndex => {
      publishNpm(packagesToUpdatePaths[packageIndex]);
    });
  } catch (error) {
    console.log("updatePackagesVersions", "problem", error);

    process.exit(1);
  }
})();

process.on("uncaughtException", err => {
  console.error(
    `${new Date().toUTCString()} uncaught exception: ${err.message}`
  );

  console.error(err);
  process.exit(1);
});
