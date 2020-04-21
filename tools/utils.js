import { join, dirname, extname, relative } from "path";
import packageJson from "../package.json";
/* eslint-disable max-len */
/**
 * @example ../../src/react/createComponent.js -> effector-react/createComponent.js
 */

export const getSourcemapPathTransform = (name) =>
  function sourcemapPathTransform(relativePath) {
    let packagePath = join("../..", packageJson.alias[name]);
    if (extname(packagePath) !== "") {
      packagePath = dirname(packagePath);
    }
    return `${name}/${relative(packagePath, relativePath)}`;
  };
