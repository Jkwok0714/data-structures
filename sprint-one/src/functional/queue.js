var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    length++;
  };

  someInstance.dequeue = function() {
    (length > 0) ? length-- : length = 0;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
