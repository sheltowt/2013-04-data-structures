// Hey! Copy your code from src/functional/stack.js and paste it here
var makeStack = function(){
  var storage = {};

  // Implement the methods below
  var stack = {};
  stack.last = 0;
  _.extend(stack, masterFunctions);
  return stack;
};

var masterFunctions = {
  add : function(value){
    this[this.last] = value;
    this.last ++;
  },
  remove : function(){
    var length = this.size();
    var returnVariable = this[length-1];
    delete this[length-1];
    return returnVariable;
  },
  size : function(){
    var sizeCheck = 0;
    for(var key in this){
        if(!isNaN(key)){
          sizeCheck = sizeCheck + 1;
        }
    }
    return sizeCheck;
  }
};