// queue is FIFO
class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Big O(1)
    //add node to the end of the last node
    enQueue(val) {
        const newNode = new Node(val)
        if (this.first == null) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        this.size++
        return this
    }

    //Big O(1)
    //removing the node at the begining
    deQueue() {
        if (this.size == 0) {
            this.last = null
            return undefined
        }
        if (this.size >= 0) {
            this.size -= 1
            const oldHead = this.first
            this.first = this.first.next


            return oldHead
        }
    }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
//QUEUE first in first first out(FIFO)

//BIG O of Queue
// insertion O(1)
//remove O(1)
//search O(n)
// access O(n)