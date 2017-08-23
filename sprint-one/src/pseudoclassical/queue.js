var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.numID = 0;
  this.header = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.length;
}
Queue.prototype.enqueue = function(value) {
  this.storage[this.numID] = value;
  this.length++;
  this.numID++;
}
Queue.prototype.dequeue = function() {
  let result = this.storage[this.header];
  delete this.storage[this.header];
  this.header++;
  this.length > 0 ? this.length-- : this.length = 0;
  return result;
}
