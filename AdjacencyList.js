//node or vertex
//one connection to another is called an edge
// when you assign a value to the edges it is called a 
// weighted graph
//undirected graph  two way graph
//directed graph one way graph
//traversal mean visiting every node in a graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = []
        return this.adjacencyList
    }

    addEdge(vertex1, vertex2) {

        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2)
            if (this.adjacencyList[vertex2]) {
                this.adjacencyList[vertex2].push(vertex1)
            } else {
                this.addVertex(vertex2)
                this.adjacencyList[vertex2].push(vertex1)
            }
        }

    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => {
            return vertex != vertex2
        })
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => {
            return vertex != vertex1
        })
        return this.adjacencyList
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            let list = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, list)
        }

        delete this.adjacencyList[vertex]
        return this.adjacencyList
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList

        function dfs(vertex, des) {
            if (!vertex) return null;
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {

                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }

            });
        }
        dfs(start)
        return result
    }

    route(start, end) {
        let result = this.breadthFirst(start);
        let endIndex = result.indexOf(end) + 1
        return result.splice(0, endIndex)
    }

    depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex;

        visited[start] = true
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result
    }


    breadthFirst(start) {
        const queue = [start]
        const result = []
        const visited = {}
        visited[start] = true

        while (queue.length) {

            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

}
const direction = new Graph()
direction.addVertex('junction')
direction.addVertex('thackwalk')
direction.addVertex('bull sav')
direction.addVertex('southfield')
direction.addVertex('mandeville')
direction.addVertex('town')
direction.addVertex('groove place')
direction.addVertex('nain')

direction.addEdge('bull sav', 'junction')
direction.addEdge('bull sav', 'thackwalk')
direction.addEdge('junction', 'southfield')
direction.addEdge('junction', 'nain')
direction.addEdge('junction', 'mandeville')
direction.addEdge('mandeville', 'groove place')
direction.addEdge('mandeville', 'town')



// direction.addVertex('A')
// direction.addVertex('B')
// direction.addVertex('C')
// direction.addVertex('D')
// direction.addVertex('E')
// direction.addVertex('F')

// direction.addEdge('A', 'B')
// direction.addEdge('A', 'C')
// direction.addEdge('B', 'D')
// direction.addEdge('C', 'E')
// direction.addEdge('D', 'E')
// direction.addEdge('D', 'F')
// direction.addEdge('E', 'F')




