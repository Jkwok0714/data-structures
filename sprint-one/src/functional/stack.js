var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    let result = storage[length-1];
    delete storage[length-1];
    (length > 0) ? length-- : length = 0;
    return result;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
