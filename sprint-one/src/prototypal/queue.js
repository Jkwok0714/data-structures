var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.storage = {};
  someInstance.header = 0;
  someInstance.numID = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}
queueMethods.enqueue = function(value) {
  this.storage[this.numID] = value;
  this.numID++;
  this.length++;
}
queueMethods.dequeue = function() {
  let result = this.storage[this.header];
  delete this.storage[this.header];
  this.header++;
  this.length > 0 ? this.length-- : this.length = 0;
  return result;
}
