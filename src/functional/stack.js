var makeStack = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var last = 0; // Hint: set an initial value here

  // Implement the methods below
  var stack = {};

  stack.add = function(value){
    stack[last] = value;
    last ++;
  };

  stack.remove = function(){
    var length = stack.size();
    var returnVariable = stack[length-1];
    delete stack[length-1];
    return returnVariable;
  };

  stack.size = function(){
    var sizeCheck = 0;
    for(var key in stack){
        if(!isNaN(key)){
          sizeCheck = sizeCheck + 1;
        }
    }
    return sizeCheck;
  };

  return stack;
};
