class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) return this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const path = [] // RETURN AT END
        let smallest;

        //build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0
                nodes.enQueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enQueue[vertex, Infinity]
            }
            previous[vertex] = null;
        }
        //as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.deQueue().val
            if (smallest === finish) {
                //we are done
                //build up a path to return at the end
                while (previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]

                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if (candidate < distances[nextNeighbor]) {
                        //updating the new smallest distance to neighbor
                        distances[nextNeighbor] = candidate
                        //updating previous how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enQueue in priority queue with new priority
                        nodes.enQueue(nextNeighbor, candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }

}


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



let graph = new WeightedGraph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)