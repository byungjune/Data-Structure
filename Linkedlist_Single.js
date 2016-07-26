// In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes. 
// Each node, in turn, contains data and a pointer, which can point to another node.



function Node(data) {
	this.data = data;
	this.next = null;
}

function SinglyList() {
	this._length = 0;
	this.head = null;
}

SinglyList.prototype.add = function(value) {
	var node = New Node(value);
	var currentNode = this.head;

	if(!currentNode) {
		this.head = node;
		this._length++;

		return node;
	} else {
		while(currentNode.next) {
			currentNode = currentNode.next ;
		}

		currentNode.next = node;
		this._length++;

		return node;
	}

};

SinglyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 1;
	var message = {failure: 'Failure: non-existent node in this list.'};

	if(length === 0 || position<1 || position>length) {
		throw new Error(message.failure)
	}

	while(count < position) {
		currentNode = currentNode.next;
		count++;
	}
	return currentNode;
};

SinglyList.prototype.remove = function(position) {
	var currentNode = this.head;
	var length = this._length;
	var count = 0;
	var message = {failure: 'Failure: non-existent node in this list.'};
	var beforeNodeToDelete = null;
	var nodeToDelete = null;
	var deletedNode = null;

	if(position < 0 || position>length) {
		throw new Error(message.failure)
	}

	if(position === 1) {
		this.head = currentNode.next;
		deleteNode = currentNode;
		currentNode = null;
		this._length--;

		return deleteNode;
	}

	while(count < position) {
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deleteNode = nodeToDelete;
	nodeToDelete = null;
	this._length--;

	return deleteNode;
};

