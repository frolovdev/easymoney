const depsFields = ["dependencies", "devDependencies", "peerDependencies"];

class Graph {
  constructor(adjacencyList, vertices) {
    this.graph = adjacencyList;
    this.vertices = vertices;
  }

  dfs(v, isVisitedArray, visitedNodes, graph) {
    isVisitedArray[v] = true;
    const vertex = graph[v];

    for (let destIndex = 0; destIndex < vertex.length; destIndex++) {
      const destVertex = vertex[destIndex];
      if (isVisitedArray[destVertex] === false) {
        this.dfs(destVertex, isVisitedArray, visitedNodes, graph);
      }
    }

    visitedNodes.push(v);
  }

  topologicalSort() {
    const isVisitedArray = this.vertices.map(() => false);

    const visitedNodes = [];
    for (let v = 0; v < this.vertices.length; v++) {
      if (isVisitedArray[v] === false) {
        this.dfs(v, isVisitedArray, visitedNodes, this.graph);
      }
    }

    return visitedNodes.reverse();
  }

  getGraph() {
    return this.graph;
  }

  static createGraphFromPackages(packages) {
    const length = packages.length;

    const packagesNames = packages.map(mypackage => mypackage.name);
    const adjacencyList = packagesNames.map(() => []);

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const src = packages[i];
        const dest = packages[j];

        const searches = [];

        depsFields.forEach(depType => {
          const deps = dest[depType];

          if (deps) {
            const search = Object.keys(deps).find(dep => dep === src.name);

            searches.push(search);
          }
        });

        const search = searches.find(search => search !== undefined);

        if (search) {
          adjacencyList[i].push(j);
        }
      }
    }

    return new Graph(adjacencyList, packages);
  }
}

module.exports = Graph;
