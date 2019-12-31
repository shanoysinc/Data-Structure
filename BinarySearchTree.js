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
}


const tree = new BinarySearchTree()