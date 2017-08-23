var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
}
stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
}
stackMethods.pop = function(value) {
  let result = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length > 0 ? this.length-- : this.length = 0;
  return result;
}
