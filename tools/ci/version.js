function checkIsRc(version) {
  const isRc = /[0-9]-rc.\d+/.test(version);

  return isRc;
}

function updateVersionToRc(version) {
  if (checkIsRc(version)) {
    const prefix = "-rc.";
    const resultStringIndex = version.indexOf(prefix);

    const oldVersion = Number(version.slice(resultStringIndex + 4));
    const newVersion = oldVersion + 1;

    const newVersionString = `${version.slice(
      0,
      resultStringIndex
    )}${prefix}${newVersion}`;

    return newVersionString;
  } else {
    return `${version}-rc.0`;
  }
}

function updateVersionFromRcToRelease(version) {
  if (checkIsRc(version)) {
    const prefix = "-rc.";
    const resultStringIndex = version.indexOf(prefix);

    return version.slice(0, resultStringIndex);
  } else {
    return version;
  }
}

const depsFields = ["dependencies", "devDependencies", "peerDependencies"];

function updatePackagesVersions(
  packageArrayExmplToUpdate,
  versionUpdater = updateVersionToRc
) {
  const updatedPackagesWithUpdatedVersion = packageArrayExmplToUpdate.map(
    mypackage => ({
      ...mypackage,
      version: versionUpdater(mypackage.version)
    })
  );

  const versionsMap = updatedPackagesWithUpdatedVersion.reduce((acc, val) => {
    acc[val.name] = val.version;
    return acc;
  }, {});

  const updatedPackagesWithUpdatedDeps = updatedPackagesWithUpdatedVersion.map(
    mypackage => {
      const mapOfDeps = depsFields.reduce((acc, val) => {
        const depType = val;

        const updatedDeps =
          mypackage[depType] && updateDeps(mypackage[depType], versionsMap);

        if (updatedDeps) mypackage[depType] = updatedDeps;

        return acc;
      }, {});

      const result = Object.keys(mapOfDeps).reduce((acc, val) => {
        acc[val] = mapOfDeps[val];
        return acc;
      }, mypackage);

      return result;
    }
  );

  return updatedPackagesWithUpdatedDeps;
}

function updateDeps(packageDeps, depsToUpdate) {
  return Object.keys(depsToUpdate).reduce((acc, val) => {
    if (acc[val]) {
      acc[val] = `^${depsToUpdate[val]}`;
    }

    return acc;
  }, packageDeps);
}

module.exports = {
  checkIsRc,
  updateDeps,
  updatePackagesVersions,
  updateVersionToRc,
  updateVersionFromRcToRelease
};
