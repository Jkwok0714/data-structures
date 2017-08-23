var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.length = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

// let extend = function(target, origin) {
//   for (var key in origin) {
//     target[key] = origin[key];
//   }
// }

queueMethods.size = function() {
  return this.length;
}
queueMethods.enqueue = function() {
  this.length++;
}
queueMethods.dequeue = function() {
  this.length > 0 ? this.length-- : this.length = 0;
}
