var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.footer = 0;
  this.header = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.footer - this.header;
}
Queue.prototype.enqueue = function(value) {
  this.storage[this.footer] = value;
  this.footer++;
}
Queue.prototype.dequeue = function() {
  if (this.footer - this.header > 0) {
    let result = this.storage[this.header];
    delete this.storage[this.header];
    this.header++;
    return result;
  }
}
