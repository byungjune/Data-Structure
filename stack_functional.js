var Stack = function(){
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

  someInstance.push = function(value){
    if(value) {
      storage[countAdd()] = value;
    }
  };

  someInstance.pop = function(){
    var result ;
    if (storage[0]) {
      result = storage[countAdd()-1];
      delete storage[countAdd()-1]
    }
    return result;
  };

  someInstance.size = function(){
    return countAdd();
  };

  return someInstance;
};

//

var a = new Stack;
a.push('a');
a.push('b');
console.log(a.size())
console.log(a.pop())
console.log(a.size())

