var Queue = function() {
	var someInstance = Object.create(queueMethods) ;
	someInstance.storage = {} ;
	
	return someInstance;
};

var queueMethods = {};

queueMethods.countAdd = function() {
	var count = 0;
	for (var key in this.storage) {
  	count++;
	}
	return count;
}

queueMethods.enqueue = function(value) {
	if(value) {
		this.storage[this.countAdd()] = value;
	}
	return this.storage;
}

queueMethods.dequeue = function() {
	var result;
	if (this.storage[0]) {
    result = this.storage[0];
    for (var key in this.storage) {
      this.storage[key-1]=this.storage[key];
    }
    delete this.storage[-1]
    delete this.storage[this.countAdd()-1]
  }
  return result;
}

queueMethods.size = function() {
	return this.countAdd()
}

// Check the function

var check = new Queue;
check.enqueue('a');
check.enqueue('b');
check.enqueue('c');
console.log(check.size()); // 3
console.log(check.dequeue()); // a
console.log(check.size()); // 2
