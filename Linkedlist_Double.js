/*
 * A doubly-linked list takes all the functionality of a singly-linked list and extends it for bi-directional movement in a list. 
 * We can traverse, in other words, a linked list from the first node in the list to the last node in the list; 
 * and we can traverse from the last node in the list to the first node in the list. 
 */

 function Node(value) {
 	this.data = value;
 	this.prev = null;
 	this.next = null;
 }

 function DoublyList() {
 	this._length = 0;
 	this.head = null;
 	this.next = null;
 }

 DoublyList.prototype.add = function(value) {
 	var node = new Node(value);

 	if(this._length) {
 		this.tail.next = node;
 		node.prev = this.tail;
 		this.tail = node;
 	} else {
 		this.head = node;
 		this.tail = node;
 	}

 	this._length++;

 	return node;
 };

 DoublyList.prototype.searchNodeAt = function(position) {
 	var currentNode = this.head;
 	var length = this._length;
 	var count = 1;
	var message = {failure: 'Failure: non-existent node in this list.'};

	if(length === 0 || position < 1 || position > length) {
		throw new Error(message.failure)
	}

	while ( count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
 };

 DoublyList.prototype.remove = function(position) {
 	var currentNode = this.head;
 	var length = this._length;
 	var count = 1;
 	var message = {failure: 'Failure: non-existent node in this list.'};
 	var beforeNodeToDelete = null;
 	var afterNodeToDelete = null;
 	var deletedNode = null;

 	if(length ===0 || position < 1 || position > length) {
 		throw new Error(message.failure)
 	}

 	if(position === 1) {
 		this.head = currentNode.next;
 		deletedNode = currentNode;
 		if(this.head) {
 			this.head.prev = null;
 		} else {
 			this.tail = null;
 		}
 	} else if(position === length) {
 		this.tail = this.tail.prev;
 		this.tail.next = null;
 		deletedNode = this.tail
 	} else {
 		while (count < position) {
 			currentNode = currentNode.next;
 			count++;
 		}

 		beforeNodeToDelete = currentNode.prev;
 		afterNodeToDelete = currentNode.next;

 		beforeNodeToDelete.next = afterNodeToDelete;
 		afterNodeToDelete.prev = beforeNodeToDelete;
 		deletedNode = currentNode;

 	}

 	this._length--;

 	return deletedNode;

 }

 var List = new DoublyList;
 List.add(3);
 List.add(5);
 List.add(7);
 List.remove(1);
 console.log(List.head)