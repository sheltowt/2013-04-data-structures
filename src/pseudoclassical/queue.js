// Hey! Copy your code from src/prototypal/queue.js and paste it here
var Queue = function(){
  var storage = {};

  // Implement the methods below
  var queue = {};
  this.last = 0;
  this.first = 0;
};

  Queue.prototype.add = function(value){
    this[this.last] = value;
    this.last ++;
    return this;
  };
  Queue.prototype.remove = function(){
    var returnVariable = this[this.first];
    delete this[this.first];
    this.first ++;
    return returnVariable;
  };
  Queue.prototype.size =  function(){
    var sizeCheck = 0;
    for(var key in this){
        if(!isNaN(key)){
          sizeCheck = sizeCheck + 1;
        }
    }
    return sizeCheck;
  };
