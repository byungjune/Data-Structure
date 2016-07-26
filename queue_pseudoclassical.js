var Queue = function() {
	this.storage = {} ;
};

Queue.prototype.countAdd = function() {
	var count = 0;
	for (var key in this.storage) {
  	count++;
	}
	return count;
}

Queue.prototype.enqueue = function(value) {
	if(value) {
		this.storage[this.countAdd()] = value;
	}
	return this.storage;
}

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
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



/* ES6 ver.

class Stack {
    constructor() {
        this.storage = {};
    }

    count() {
        let count = 0;
        for (const key in this.storage) {
            count++;
        }
        return count;
    }

    push(value) {
        if(value) {
            this.storage[this.count()] = value;
        }
        return this.storage;
    }

    pop() {
        let delValue;
        if(this.storage[0]) {
            delValue = this.storage[this.count()-1];
            delete this.storage[this.count()-1];
        } else {
            delValue = 'No value in Stack';
        }
        return delValue
    }

    size() {
        return this.count();
    }
}

*/
