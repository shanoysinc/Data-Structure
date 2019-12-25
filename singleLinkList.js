class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}



class singlyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    };

    addNode(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            list.tail = this.head;

        } else {
            list.tail.next = newNode;
            list.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        return current;
    };

    unshift(val) {

        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current
    }

    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return foundNode
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.addNode(val)
        if (index === 0) return this.unshift(val)
        let newNode = new Node(val)
        let previousNode = this.get(index - 1)
        let temp = previousNode.next
        previousNode.next = newNode
        newNode.next = temp
        this.length++
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index == this.length - 1) return this.pop()
        if (index == 0) this.shift();
        let previousNode = this.get(index - 1)
        let remove = previousNode.next;
        previousNode.next = remove.next;
        this.length--;
        return remove;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next
        }
    }
}
let list = new singlyLinkedList()









