const {
  updateVersionToRc,
  updateDeps,
  updatePackagesVersions,
  updateVersionFromRcToRelease
} = require("../version");

describe("version", () => {
  describe("updateVersionToRc", () => {
    it("should update version if its rc", () => {
      expect(updateVersionToRc("0.0.1-rc.0")).toEqual("0.0.1-rc.1");
    });

    it("should update version if its not rc", () => {
      expect(updateVersionToRc("0.0.1")).toEqual("0.0.1-rc.0");
    });

    it("should update version if ^", () => {
      expect(updateVersionToRc("^0.0.1")).toEqual("^0.0.1-rc.0");
      expect(updateVersionToRc("^0.0.1-rc.0")).toEqual("^0.0.1-rc.1");
    });
  });

  describe("updateVersionFromRcToRelease", () => {
    it("should update rc version", () => {
      expect(updateVersionFromRcToRelease("^0.0.1-rc.0")).toEqual("^0.0.1");
    });

    it("should update normal version", () => {
      expect(updateVersionFromRcToRelease("^0.0.1")).toEqual("^0.0.1");
    });
  });

  describe("updateDeps", () => {
    it("should update deps to ^", () => {
      const dependencies = {
        someDep: "51231",
        packageA: "0.0.1",
        packageB: "0.0.1"
      };

      const depToUpdate = { packageA: "1.0.0", packageB: "2.0.0" };

      expect(updateDeps(dependencies, depToUpdate)).toEqual({
        someDep: "51231",
        packageA: "^1.0.0",
        packageB: "^2.0.0"
      });
    });
  });

  describe("updatePackagesVersions", () => {
    let example1;

    beforeEach(() => {
      const packageA = {
        name: "packageA",
        version: "1.0.1",
        dependencies: {
          packageB: "1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageB = {
        name: "packageB",
        version: "1.0.1",
        dependencies: {
          packageD: "1.0.1",
          packageC: "1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageC = {
        name: "packageC",
        version: "1.0.1",
        dependencies: {},
        devDependencies: {},
        peerDependencies: {}
      };

      const packageD = {
        name: "packageD",
        version: "1.0.1",
        dependencies: {
          packageC: "1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      example1 = [packageA, packageB, packageC, packageD];
    });

    it("should update all deps", () => {
      const packageA = {
        name: "packageA",
        version: "1.0.1-rc.0",
        dependencies: {
          packageB: "^1.0.1-rc.0"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageB = {
        name: "packageB",
        version: "1.0.1-rc.0",
        dependencies: {
          packageD: "^1.0.1-rc.0",
          packageC: "^1.0.1-rc.0"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageC = {
        name: "packageC",
        version: "1.0.1-rc.0",
        dependencies: {},
        devDependencies: {},
        peerDependencies: {}
      };

      const packageD = {
        name: "packageD",
        version: "1.0.1-rc.0",
        dependencies: {
          packageC: "^1.0.1-rc.0"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const result = [packageA, packageB, packageC, packageD];

      const packageAA = {
        name: "packageA",
        version: "1.0.1",
        dependencies: {
          packageB: "^1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageBB = {
        name: "packageB",
        version: "1.0.1",
        dependencies: {
          packageD: "^1.0.1",
          packageC: "^1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };

      const packageCC = {
        name: "packageC",
        version: "1.0.1",
        dependencies: {},
        devDependencies: {},
        peerDependencies: {}
      };

      const packageDD = {
        name: "packageD",
        version: "1.0.1",
        dependencies: {
          packageC: "^1.0.1"
        },
        devDependencies: {},
        peerDependencies: {}
      };
      const result2 = [packageAA, packageBB, packageCC, packageDD];

      expect(updatePackagesVersions(example1)).toEqual(result);
      expect(
        updatePackagesVersions(example1, updateVersionFromRcToRelease)
      ).toEqual(result2);
    });
  });
});
