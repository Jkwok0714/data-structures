var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.length = 0;
  someInstance.numID = 0;
  someInstance.head = 0;
  someInstance.storage = {};
  extend(someInstance, queueMethods);
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
queueMethods.dequeue = function(value) {
  let result = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  this.length > 0 ? this.length-- : this.length = 0;
  return result;
}
