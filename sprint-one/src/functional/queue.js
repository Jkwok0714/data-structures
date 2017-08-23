var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var idNum = 0;
  var header = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[idNum] = value;
    idNum++;
    length++;
  };

  someInstance.dequeue = function() {
    (length > 0) ? length-- : length = 0;
    let result = storage[header];
    delete storage[header];
    header++;
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
