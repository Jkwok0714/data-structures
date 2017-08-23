var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return 0;
}
