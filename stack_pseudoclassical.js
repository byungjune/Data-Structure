var Stack = function() {
  this.storage = {};
};

Stack.prototype.countAdd = function() {
	var count = 0;
  for (var key in this.storage) {
  	count++;
	}
	return count;
}

Stack.prototype.push = function(value) {
	if(value) {
		this.storage[this.countAdd()] = value;
	}
	return this.storage;
}

Stack.prototype.pop = function() {
	var result;
	if (this.storage[0]) {
    result = this.storage[this.countAdd()-1];
    delete this.storage[this.countAdd()-1]
  }
  return result;
}

Stack.prototype.size = function() {
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

/* ES6 ver.

class Stack {
    constructor() {
      this.storage = {};
    }

    countAdd() {
        let count = 0;
      for (const key in this.storage) {
        count++;
        }
        return count;
    }

    push(value) {
        if(value) {
            this.storage[this.countAdd()] = value;
        }
        return this.storage;
    }

    pop() {
        let result;
        if (this.storage[0]) {
        result = this.storage[this.countAdd()-1];
        delete this.storage[this.countAdd()-1]
      }
      return result;
    }

    size() {
        return this.countAdd()
    }

}

*/