module.exports = {
  extends: "dependency-cruiser/configs/recommended-strict",
  forbidden: [
    {
      name: "not-to-unresolvable",
      comment:
        "This module tried to depend on something that can't be resolved to disk. Revise yer code",
      from: {},
      to: {
        couldNotResolve: true,
        exoticallyRequired: false
      }
    },
    {
      name: "cli-to-main-only",
      comment:
        "This cli module depends on something not in the public interface - which means it either doesn't belong in cli, or the main public interface needs to be expanded.",
      severity: "error",
      from: {
        path: "(^src/cli/)",
        pathNot: "^(src/cli/compile-config/index\\.js)$"
      },
      to: {
        pathNot: "^src/main/|^node_modules|^fs$|^path$|$1|^package.json$"
      }
    },
    {
      name: "cli-to-main-only-warn",
      comment:
        "This cli module depends on something not in the public interface - which means it either doesn't belong in cli, or the main public interface needs to be expanded (this warn-only rule is a temporary exception for the compileConfig depending on the resolver).",
      severity: "warn",
      from: { path: "^(src/cli/compile-config/index\\.js)$" },
      to: {
        pathNot: "$1|^src/(cli|main)|^node_modules|^(fs|path|package.json)$"
      }
    },
    {
      name: "report-stays-in-report",
      comment:
        "This reporting module depends directly on a non-reporting one that is not a utility. That is odd as reporting modules should only read dependency cruiser output json.",
      severity: "error",
      from: {
        path: "(^src/report/)"
      },
      to: {
        pathNot: "$1|^node_modules|^(path|package.json)$|^src/utl"
      }
    },
    {
      name: "extract-to-validate-only",
      comment:
        "This extraction module depends on something outside extraction that is not a utility or validation. Which is odd, given the goal of the extraction step.",
      severity: "error",
      from: {
        path: "(^src/extract/)"
      },
      to: {
        pathNot:
          "$1|^node_modules|^(path|fs|module|package.json)$|^src/(utl|validate)",
        exoticallyRequired: false
      }
    },
    {
      name: "bin-to-cli-only",
      comment:
        "This module in the bin/ folder depends on something not in the cli interface. This means it either contains code that doesn't belong in bin/, or the thing it depends upon should be put in the cli interface. ",
      severity: "error",
      from: { path: "(^bin/)" },
      to: { pathNot: "^src/cli|^node_modules|^package.json$" }
    },
    {
      name: "restrict-fs-access",
      comment:
        "This module depends on a the node 'fs' module, and it resides in a spot where that is not allowed.",
      severity: "error",
      from: {
        pathNot:
          "^src/(extract/parse|extract/resolve|extract/gather-initial-sources\\.js|cli)|^test|^utl"
      },
      to: { path: "^fs$" }
    },
    {
      name: "no-inter-module-test",
      comment:
        "This test depends on something in the test tree that is neither a utility, nor a mock nor a fixture.",
      severity: "error",
      from: { path: "(^test/[^\\/]+/)[^\\.]+\\.spec\\.js" },
      to: { path: "^test/[^\\/]+/.+", pathNot: "utl|$1.+\\.json$" }
    },
    {
      name: "prefer-lodash-individuals",
      comment:
        "This module directly depends on 'lodash' as a whole. Preferably don't include lodash as a whole, but use individual lodash packages instead e.g. 'lodash/get' - this keeps the download of the package small(er)",
      severity: "info",
      from: {},
      to: { path: "lodash\\.js$" }
    },
    {
      name: "no-dep-on-test",
      comment:
        "This module depends on a spec files. A spec file should have a single responsibility (testing whether a module function correctly). If there's something in a spec that's of use, factor it out into (e.g.) a separate utility/ helper or mock",
      severity: "error",
      from: { path: "^(src|bin)" },
      to: { path: "^test|\\.spec\\.js$" }
    },
    {
      name: "no-external-to-here",
      comment:
        "Apparently something outside of the src/ test/ and bin/ points to something inside them. That's incredibly odd and might denote a security problem.",
      severity: "error",
      from: { pathNot: "^(src|test|bin)" },
      to: { path: "^(src|test)" }
    },
    {
      name: "not-to-dev-dep",
      severity: "error",
      comment:
        "In production code do not depend on external ('npm') modules not declared in your package.json's dependencies - otherwise a production only install (i.e. 'npm ci') will break. If this rule triggers on something that's only used during development, adapt the 'from' of the rule in the dependency-cruiser configuration.",
      from: { path: "^(bin|src)" },
      to: {
        dependencyTypes: ["npm-dev"],
        exoticallyRequired: false
      }
    },
    {
      name: "only-try-require-exotic",
      severity: "error",
      comment: "The only 'exotic' require allowed is tryRequire",
      from: {},
      to: {
        exoticRequireNot: "^tryRequire$",
        exoticallyRequired: true
      }
    },
    {
      name: "optional-deps-used",
      severity: "error",
      comment:
        "This module uses an external dependency that in package.json shows up as an optional dependency. In dependency-cruiser optional dependencies donot make sense - and are hence forbidden. Either make it a regular dependency (if it's production code) or a dev one (if it's for development only)",
      from: {},
      to: { dependencyTypes: ["npm-optional"] }
    },
    {
      name: "peer-deps-used",
      comment:
        "This module uses an external dependency that in package.json shows up as a peer dependency. In dependency-cruiser peer dependencies donot make sense - and are hence forbidden. Either make it a regular dependency (if it's production code) or a dev one (if it's for development only)",
      severity: "error",
      from: {},
      to: { dependencyTypes: ["npm-peer"] }
    },
    {
      name: "no-unvetted-license",
      comment:
        "This module uses an external dependency that has license that's not vetted. The license itself might be OK, but bigcorp legal departments might get jittery over anything other than MIT (or ISC).",
      severity: "error",
      from: {},
      to: { licenseNot: "MIT|ISC|Apache-2\\.0" }
    },
    {
      name: "not-unreachable-from-cli",
      severity: "error",
      comment:
        "This module in the src/ tree is not reachable from the cli - and is likely dead wood. Either use it or remove it. If a module is flagged for which it's logical it is not reachable from cli (i.e. a configuration file), add it to the pathNot in the 'to' of this rule.",
      from: { path: "^bin/" },
      to: { path: "^src", reachable: false }
    },
    {
      name: "not-unreachable-from-test",
      comment:
        "This module in src is not reachable by any test. Please provide a test that covers this (poor man's test coverage - this task is better suited for a proper test coverage tool :-) )",
      severity: "error",
      from: { path: "\\.spec\\.js$" },
      to: { path: "^src", reachable: false }
    }
  ],
  options: {
    /* pattern specifying which files not to follow further when encountered
      (regular expression)
      no need to specify here as well as we use the same as is in the
      recommended preset anyway
    */
    // "doNotFollow": "node_modules",

    /* pattern specifying which files to exclude (regular expression) */
    exclude: "mocks|fixtures|test/integration|__tests__",

    /* list of module systems to cruise */
    // "moduleSystems": ["amd", "cjs", "es6", "tsd"],

    /* prefix for links in html and svg output (e.g. https://github.com/you/yourrepo/blob/develop/) */
    prefix: "https://github.com/frolovdev/easymoney/blob/master/",

    /* if true detect dependencies that only exist before typescript-to-javascript compilation */
    tsPreCompilationDeps: true,

    /* if true leave symlinks untouched, otherwise use the realpath */
    // "preserveSymlinks": false,

    /* Typescript project file ('tsconfig.json') to use for
      (1) compilation and
      (2) resolution (e.g. with the paths property)

      The (optional) fileName attribute specifies which file to take (relative to dependency-cruiser's
      current working directory. When not provided defaults to './tsconfig.json'.
    */
    tsConfig: {
      fileName: "./tsconfig.json"
    },

    /* Webpack configuration to use to get resolve options from.

      The (optional) fileName attribute specifies which file to take (relative to dependency-cruiser's
      current working directory. When not provided defaults to './webpack.conf.js'.

      The (optional) `env` and `args` attributes contain the parameters to be passed if
      your webpack config is a function and takes them (see webpack documentation
      for details)
    */
    // "webpackConfig": {
    //    "fileName": "./webpack.conf.js",
    //    "env": {},
    //    "args": {}
    // },
    exoticRequireStrings: ["tryRequire"],
    reporterOptions: {
      archi: {
        collapsePattern: "^(node_modules|src|test|__tests__)/[^/]+|^bin/"
      },
      dot: {
        theme: {
          replace: false,
          graph: {
            splines: "ortho"
          },
          modules: [
            {
              criteria: { source: "^src/cli" },
              attributes: { fillcolor: "#ccccff" }
            },
            {
              criteria: { source: "^src/report" },
              attributes: { fillcolor: "#ffccff" }
            },
            {
              criteria: { source: "^src/extract" },
              attributes: { fillcolor: "#ccffcc" }
            },
            {
              criteria: { source: "^src/validate" },
              attributes: { fillcolor: "#ccccff" }
            },
            {
              criteria: { source: "^src/main" },
              attributes: { fillcolor: "#ffcccc" }
            },
            {
              criteria: { source: "^src/utl" },
              attributes: { fillcolor: "#cccccc" }
            },
            {
              criteria: { source: "\\.schema\\.js$" },
              attributes: {
                color: "darkgreen",
                fillcolor: "darkgreen",
                fontcolor: "#ffffcc"
              }
            },
            {
              criteria: { source: "\\.template\\.js$" },
              attributes: { style: "filled" }
            },
            {
              criteria: { source: "\\.json$" },
              attributes: { shape: "cylinder" }
            },
            {
              criteria: { source: "\\-type\\.js$" },
              attributes: {
                fillcolor: "white",
                fontcolor: "darkgrey",
                color: "darkgrey",
                shape: "underline"
              }
            }
          ],
          dependencies: [
            {
              criteria: { "rules[0].severity": "error" },
              attributes: { fontcolor: "red", color: "red" }
            },
            {
              criteria: { "rules[0].severity": "warn" },
              attributes: { fontcolor: "orange", color: "orange" }
            },
            {
              criteria: { "rules[0].severity": "info" },
              attributes: { fontcolor: "blue", color: "blue" }
            },
            {
              criteria: { valid: false },
              attributes: { fontcolor: "red", color: "red" }
            },
            {
              criteria: { resolved: "^src/cli" },
              attributes: { color: "#0000ff77" }
            },
            {
              criteria: { resolved: "^src/report" },
              attributes: { color: "#ff00ff77" }
            },
            {
              criteria: { resolved: "^src/extract" },
              attributes: { color: "#00770077" }
            },
            {
              criteria: { resolved: "^src/validate" },
              attributes: { color: "#0000ff77" }
            },
            {
              criteria: { resolved: "^src/main" },
              attributes: { color: "#77000077" }
            },
            {
              criteria: { resolved: "^src/utl" },
              attributes: { color: "#aaaaaa77" }
            }
          ]
        }
      }
    }
  }
};
