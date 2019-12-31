//Every parent node has at most two children
// every node to the left of the parent is always less than the parent
// every node to the right of the parent is always greater than the parent

// BIG O of BinarySearchTree
// search O(log N)
// insert O(log N)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val)

        if (this.root == null) {
            this.root = newNode;
            return this
        } else {
            let current = this.root;
            while (current) {
                if (val == current.value) return undefined;

                if (val > current.value) {
                    if (current.right != null) {
                        current = current.right
                    } else {
                        current.right = newNode
                        return current.right
                    }
                } else if (val < current.value) {
                    if (current.left != null) {
                        current = current.left

                    } else {
                        current.left = newNode
                        return current.left
                    }
                }
            }

        }


    }


    find(val) {
        let current = this.root;

        if (this.root == null) return false;

        while (current) {
            if (val == current.value) return current;

            if (val > current.value) {
                current = current.right
            } else if (val < current.value) {
                current = current.left
            }
        }

        if (current == null) return false;
    }

    contains(val) {
        if (this.find(val)) {
            return true
        } else {
            return false
        }
    }

    // breadth first search
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root

        queue.push(node)
        while (queue.length) {
            node = queue.shift()
            data.push(node)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    // Depth first search  post order
    // traverse over the right side of the root first if there is a value
    DFSPostOrder() {
        let data = [];
        function traverse(node) {

            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value);
        }
        traverse(this.root)
        return data;
    }

    sort() {
        let data = [];
        function traverse(node) {

            if (node.left) traverse(node.left)
            data.push(node.value);
            if (node.right) traverse(node.right)

        }
        traverse(this.root)
        return data;
    }

    reverse() {
        let data = [];
        function traverse(node) {

            if (node.right) traverse(node.right)
            data.push(node.value);
            if (node.left) traverse(node.left)

        }
        traverse(this.root)
        return data;
    }
}


const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)