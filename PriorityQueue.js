// With this priorty queue the lower the priority value
// that the value that will be dequeue first
class PriorityQueue {
    constructor() {
        this.values = []
    }

    enQueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
        return this.values
    }
    // while the last index is less than the parent element 
    // switch the index with its parent element in the array
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]

            if (element.priority >= parent.priority) break;

            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex

        }
    }

    // take the first element which is the root and replace it
    // with the last item
    // then find the correct position in the priority queue
    // thats what the sinkDown() method is doing 
    deQueue() {
        const min = this.values[0]
        const end = this.values.pop()

        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }

        return min
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0]

        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex]
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex
                }
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}


const hospital = new PriorityQueue()
hospital.enQueue('Gun shot', 1)
hospital.enQueue('flu', 5)
hospital.enQueue('fever', 5)
hospital.enQueue('deliver baby', 1)
hospital.enQueue('surgery', 1)
hospital.enQueue('broken arm', 3)
