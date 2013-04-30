// Hey! Copy your code from src/prototypal/stack.js and paste it here
var Stack = function(){
  var storage = {};

  // Implement the methods below
  var stack = {}
  this.last = 0;
};

  Stack.prototype.add = function(value){
    this[this.last] = value;
    this.last ++;
  };
  Stack.prototype.remove = function(){
    var length = this.size();
    var returnVariable = this[length-1];
    delete this[length-1];
    return returnVariable;
  };
  Stack.prototype.size = function(){
    var sizeCheck = 0;
    for(var key in this){
        if(!isNaN(key)){
          sizeCheck = sizeCheck + 1;
        }
    }
    return sizeCheck;
  };
