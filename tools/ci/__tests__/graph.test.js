const Graph = require("../graph");

describe("graph", () => {
  let example1;
  let example2;
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
    example2 = [[1, 3], [4], [5], [4, 5], [6, 7], [6, 8], [8, 9], [9], [], []];
  });
  it("should create Graph from packages array", () => {
    const graph = Graph.createGraphFromPackages(example1).getGraph();

    expect(graph).toEqual([[], [0], [1, 3], [1]]);
  });

  it("should make right topological sort", () => {
    const priorityQueue = new Graph(example2, [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J"
    ]).topologicalSort();

    expect(priorityQueue).toEqual([2, 0, 3, 5, 1, 4, 7, 6, 9, 8]);

    expect(Graph.createGraphFromPackages(example1).topologicalSort()).toEqual([
      2,
      3,
      1,
      0
    ]);
  });
});
