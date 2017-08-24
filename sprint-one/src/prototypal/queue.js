var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.footer = 0;
  someInstance.storage = {};
  someInstance.header = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.footer - this.header;
}
queueMethods.enqueue = function(value) {
  this.storage[this.footer] = value;
  this.footer++;
}
queueMethods.dequeue = function() {
  if (this.footer - this.header > 0) {
    let result = this.storage[this.header];
    delete this.storage[this.header];
    this.header++;
    return result;
  }
}
