class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0
    }

    enQueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.size++
        return this.size

    }
    deQueue() {

        if (!this.first) return null;

        let temp = this.first;

        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

let queue = new Queue()
//QUEUE first in first first out(FIFO)

//BIG O of Queue
// insertion O(1)
//remove O(1)
//search O(n)
// access O(n)