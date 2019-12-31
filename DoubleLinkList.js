class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = this.tail.next
        }
        this.length += 1
        return this
    }

    pop() {
        if (!this.head) return undefined;
        let popNoDE = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNoDE.prev;
            this.tail.next = null;
            popNoDE.prev = null;
        }
        this.length -= 1
        return popNoDE
    }

    shift() {
        if (this.length == 0) return undefined;
        let oldHead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail == null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
            this.length--;
            return oldHead
        }

    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.push(val)
        } else {
            this.head.prev = newNode;
            newNode.next = this.head
            this.head = newNode;
            this.length += 1

        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        if (index <= Math.floor(this.length / 2)) {
            //working from start
            let count = 0
            let current = this.head
            while (count != index) {
                current = current.next
                count += 1
            }
            return current
        } else {
            //working from end
            let count = this.length - 1
            let current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--
            }
            return current
        }
    }

    set(index, val) {
        let current = this.get(index)
        let newNode = new Node(val)
        if (current != null) {
            current.val = newNode
            return true
        }
        return false;

    }


    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val)

        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++;
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop()

        let removeNode = this.get(index)
        let beforeNode = removeNode.prev
        let afterNode = removeNode.next

        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        // removeNode.prev.next = removeNode.next
        // removeNode.next.prev = removeNode.prev;
        removeNode.next = null
        removeNode.prev = null
        this.length--;
        return removeNode;
    }
}

let list = new DoubleLinkedList()
