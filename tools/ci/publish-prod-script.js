const publishNpm = require("./publishNpm");
const { getPackages, getPackageJsonDataFromPackages } = require("./packages");
const path = require("path");
const Graph = require("./graph");
const {
  updatePackagesVersions,
  updateVersionFromRcToRelease,
  checkIsRc
} = require("./version");
const { writeDataToDisk } = require("./updatePackageData");

const directoryPath = path.join(__dirname, "../..", "packages");

const { packages, paths } = getPackages(directoryPath);

const parsedPackagesJsonData = getPackageJsonDataFromPackages(packages, paths);

async function prepareData(parsedPackagesJsonData) {
  const packagesToUpdate = [];

  for (let i = 0; i < parsedPackagesJsonData.length; i++) {
    const packageData = parsedPackagesJsonData[i];

    const { version } = packageData;
    const pathToPck = paths[i];
    if (checkIsRc(version)) {
      packagesToUpdate.push({ packageData, pathToPck });
    }
  }

  return packagesToUpdate;
}

(async () => {
  const packagesToUpdate = await prepareData(parsedPackagesJsonData);

  try {
    const packagesToUpdateData = packagesToUpdate.map(
      ({ packageData }) => packageData
    );

    const packagesToUpdatePaths = packagesToUpdate.map(
      ({ pathToPck }) => pathToPck
    );

    const updatedPackagesData = updatePackagesVersions(
      packagesToUpdateData,
      updateVersionFromRcToRelease
    );

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
