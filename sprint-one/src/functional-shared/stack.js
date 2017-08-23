var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, stackMethods);
  someInstance.numItems = 0;
  someInstance.storage = {};
  return someInstance;
};

let extend = function(destination, origin) {
  for (var key in origin) {
    destination[key] = origin[key];
  }
}

var stackMethods = {};

stackMethods.size = function() {
  return this.numItems;
}
stackMethods.push = function(value) {
  this.storage[this.numItems] = value;
  this.numItems++;
}
stackMethods.pop = function(value) {
  let result = this.storage[this.numItems-1];
  delete this.storage[this.numItems-1];
  (this.numItems > 0) ? this.numItems-- : this.numItems = 0;
  return result;
}
