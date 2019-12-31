class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //adding a item to the begining of the last
    push(val) {

        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.size++
        return this
    }
    //removing the item from the begining of the list
    pop(val) {
        if (!this.first) return undefined;
        let current = this.first;
        this.first = current.next
        this.size--
        if (this.size == 0) {

            this.last = null
        }
        return current.value;
    }

}
// STACKS are last in first out(LIFO)
// insertion O(1)
// remove O(1)
//SEARCHING O(N)
//access O(N)
let stack = new Stack()