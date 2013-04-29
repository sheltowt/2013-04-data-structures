var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    stack[size] = value;
    size ++;
    return stack;
  };

  stack.remove = function(){
    var length = stack.size();
    return stack[length-1];
  };

  stack.size = function(obj){
    var sizeCheck = 0;
    for(var key in obj){
      if(obj.hasOwnProperty(key)){
        sizeCheck++;
      }
    }
    return size;
  };

  return stack;
};
