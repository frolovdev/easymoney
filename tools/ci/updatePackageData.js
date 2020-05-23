const fs = require("fs");

function writeDataToDisk(updatedPackagesData, packagesToUpdatePaths) {
  updatedPackagesData.map((updatedPackageData, i) => {
    try {
      fs.writeFileSync(
        `${packagesToUpdatePaths[i]}/package.json`,
        JSON.stringify(updatedPackageData, null, 2),
        "utf8"
      );
    } catch (err) {
      console.log("can't update version of package");
      console.log(err);
      throw new Error("can't update version of package");
    }
  });
}

module.exports = { writeDataToDisk };
