var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  var countAdd = function() {
    var count =0;
      for (var key in storage) {
        count +=1;
      }
      return count;
  }

  someInstance.enqueue = function(value){
    if(value) {
      storage[countAdd()] = value;
    }
  };

  someInstance.dequeue = function(){
    var result ;
    if (storage[0]) {
      result = storage[0];
      for (var key in storage) {
        storage[key-1]=storage[key];
      }
      delete storage[-1]
      delete storage[countAdd()-1]
    }
    return result;
  };
  
  someInstance.size = function(){
    return countAdd();
  };
  
  return someInstance;
};

var a = new Queue;
a.enqueue('a');
a.enqueue('b');
a.enqueue('c');
console.log(a.size());
console.log(a.dequeue());
console.log(a.size());