/* Binary heap are very useful fata
 structures for sorting and implementing
other data structures like priority queues
*/

class MaxBinaryHeap {
    constructor(val) {
        this.values = val
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
        return this.values
    }
    // while the last index is greater than the parent element 
    // switch the index with its parent element in the array
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]

            if (element <= parent) break;

            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex

        }
    }

    // take the first element which is the root and replace it
    // with the last item
    // then find the correct position in the heap
    // thats what the sinkDown() method is doing 
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()

        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown()
        }

        return max
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
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

const heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12])


