// Hey! Copy your code from src/functional-shared/queue.js and paste it here
// Hey! Copy your code from src/functional/queue.js and paste it here
var Queue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var queue = {};
  var queue = Object.create(masterFunctionsQueuePrototype);
  queue.last = 0;
  queue.first = 0;
  return queue;
};

var masterFunctionsQueuePrototype = {
  add : function(value){
    this[this.last] = value;
    this.last ++;
    return this;
  },
  remove : function(){
    var returnVariable = this[this.first];
    delete this[this.first];
    this.first ++;
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
