var makeQueue = function(){
  // Use an object with numeric keys to store values
  var storage = {};

  var last = 0; // Hint: set an initial value here
  var first = 0;

  // Implement the methods below
  var queue = {};

  queue.add = function(value){
    queue[last] = value;
    last ++;
    return queue;
  };

  queue.remove = function(){
    var length = queue.size();
    var returnVariable = queue[first];
    delete queue[first];
    first ++;
    return returnVariable;
  };

  queue.size = function(){
    var sizeCheck = 0;
    for(var key in queue){
        if(!isNaN(key)){
          sizeCheck = sizeCheck + 1;
        }
    }
    console.log(sizeCheck);
    return sizeCheck;
  };

  return queue;
};
