var Stack = function() {
	var someInstance = Object.create(stackMethods) ;
	someInstance.storage = {} ;

	return someInstance;
};

var stackMethods = {};

stackMethods.countAdd = function() {
	var count = 0;
	for (var key in this.storage) {
  	count++;
	}
	return count;
}

stackMethods.push = function(value) {
	if(value) {
		this.storage[this.countAdd()] = value;
	}
	return this.storage;
}

stackMethods.pop = function() {
	var result;
	if (this.storage[0]) {
    result = this.storage[this.countAdd()-1];
    delete this.storage[this.countAdd()-1]
  }
  return result;
}

stackMethods.size = function() {
	return this.countAdd()
}

// Check the function

var check = new Stack;
check.push('a');
check.push('b');
check.push('c');
console.log(check.size()); //3
console.log(check.pop()); //c
console.log(check.size()); //2
