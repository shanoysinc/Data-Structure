class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class singleLinkList {
    constructor() {
        this.head = null;
        this.tail = null
        this.length = 0
    }

    addNode(val) {
        const newNode = new Node(val)

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return newNode
    }


    pop() {
        //create a count varible to compare if its equal to lenght -1
        let count = 0;
        let current = this.head;
        //create a while loop that loop through the list
        while (current) {
            count++

            //if the count is equal to the length -1 you found the last item
            if (count == this.length) {

                const remove = current
                this.tail = current
                current.next = null
                this.length -= 1

                if (this.length == 1) {
                    this.head.next = null
                    this.tail = this.head
                } else if (this.length == 0) {
                    this.tail = null
                    this.head = null

                    return remove
                }
                return remove
            } else {
                current = current.next
            }

        }

    }
    shift(val) {
        const newNode = new Node(val)
        if (this.head == null) return this.addNode(val)
        // save the current head into a variable
        let currentHead = this.head;

        //save the current head in a variable
        let currentHeadNextNode = currentHead.next

        // change the head into the newNode
        this.head = newNode

        //this.head.next = currenthead
        this.head.next = currentHead
        //this.head.next.next = nextNode
        this.head.next.next = currentHeadNextNode

        this.length += 1
        //this.head = newNode
        return this
        //

    }

    unshift() {
        if (this.head == null) return undefined

        //save the current head next values in a variable
        let currentHead = this.head
        let HeadNextNode = this.head.next
        this.head = HeadNextNode
        this.length -= 1
        if (this.length == 0) {
            this.tail = null
        }
        return currentHead
        //change the head into the current head 
    }

    get(index) {
        if (this.head == null) return undefined
        if (index > this.length - 1) return undefined
        let count = 0;
        let current = this.head
        while (count <= index) {
            if (count == index) return current
            current = current.next
            count += 1
        }
    }

    set(index, value) {
        if (index > this.length - 1) return undefined
        this.get(index).val = value
        return this.get(index)
    }

    insert(index, val) {
        if (this.get(index) == undefined) return undefined

        //creating a new node to avoid modifying the original node because of by reference 
        let recreateNode = new Node(this.get(index).val)

        let IndxNextNode = this.get(index).next

        this.get(index).val = val
        this.get(index).next = recreateNode
        this.get(index).next.next = IndxNextNode

        if (index == this.length - 1) {
            this.tail = recreateNode
        }

        this.length += 1

        return this
    }

    //refactor code
    remove(index) {
        const currentIndx = this.get(index)
        if (index > this.length - 1 || index < 0) return undefined
        if (index == 0 && this.length == 1) {
            this.tail = null
            this.length = 0
        }

        this.length -= 1
        if (index == 0) {
            const headNextNode = this.head.next
            this.head = headNextNode
            return currentIndx
        }

        if (index == this.length - 1) {
            this.tail = this.get(index - 1)
        }
        let nextNode = this.get(index).next
        this.get(index - 1).next = nextNode

        return currentIndx
    }
    reverse() {
        // store the length prop in a variable 
        let length = this.length - 1
        let indexInsert = 0
        //store the pop off value into a variable 
        let lastIndex = this.pop().val
        //shift the last index to to the list 
        this.shift(lastIndex)
        // while length is greater than zero
        while (length > 0) {
            length -= 1
            //the index where we would start inserting from  which is 1
            indexInsert += 1
            lastIndex = this.pop().val
            // start insert from index one until the while loop ends
            this.insert(indexInsert, lastIndex)
        }
        this.length += 1
        return this
    }
}


const list = new singleLinkList()
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.addNode(4)
list.addNode(5)