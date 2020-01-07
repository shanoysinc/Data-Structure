//Stack is LIFO
class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    //Big O(1)
    //adding a newNode to the begining of the list
    add(val) {
        let newNode = new Node(val)
        if (this.first == null) {
            this.first = newNode
            this.last = newNode
        } else {
            //save the current head in a variable
            const oldHead = this.first
            //replace the head with the newnode
            this.first = newNode
            //change the head.next to the old head node
            this.first.next = oldHead
        }

        this.size += 1
        return this
    }

    //Big O(1)
    //removing nodes from the begining of the list 
    pop() {
        this.size -= 1
        if (this.size < 0) return undefined
        const oldHead = this.first
        const newHead = this.first.next

        this.first = newHead


        if (this.size == 0) this.last = null
        return oldHead
    }
}

const stack = new Stack()
stack.add(4)
stack.add(3)
stack.add(2)
stack.add(1)


// STACKS are last in first out(LIFO)
// insertion O(1)
// remove O(1)
//SEARCHING O(N)
//access O(N)
