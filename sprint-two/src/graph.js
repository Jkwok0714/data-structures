

// Instantiate a new graph
var Graph = function() {
  this.value = '';
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  let newNode = new Graph();
  newNode.value = value;
  this.edges.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  return this.edges.some((ele, index, array) => {
    return target === ele.value;
  });
  // for (let i = 0; i < this.edges.length; i++) {
  //   if (target === this.edges[i].value) {
  //     return true;
  //   }
  // }
  // return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  for (let i = 0; i < this.edges.length; i++) {
    delete this.edges[i];
    this.edges.splice(i, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
