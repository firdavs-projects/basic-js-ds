const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.head = null;
    }

    root() {
        return this.head;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            this.addTo(this.head, data);
        }
    }

    addTo(node, data) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
            } else {
                this.addTo(node.left, data);
            }
        } else {
            if (node.right === null) {
                node.right = new Node(data);
            } else {
                this.addTo(node.right, data);
            }
        }
    }

    has(data) {
        if (this.head === null) {
            return false;
        } else {
            return this.hasIn(this.head, data);
        }
    }

    hasIn(node, data) {
        if (node === null) {
            return false;
        } else if (node.data === data) {
            return true;
        } else if (data < node.data) {
            return this.hasIn(node.left, data);
        } else {
            return this.hasIn(node.right, data);
        }
    }

    find(data) {
        return this.findIn(this.head, data);
    }

    findIn(node, data) {
        if (node === null) {
            return null;
        } else if (node.data === data) {
            return node;
        } else if (data < node.data) {
            return this.findIn(node.left, data);
        } else {
            return this.findIn(node.right, data);
        }
    }

    remove(data) {
        this.removeFrom(this.head, data);
    }

    removeFrom(node, data) {
        if (node === null) {
            return;
        } else if (data < node.data) {
            this.removeFrom(node.left, data);
        } else if (data > node.data) {
            this.removeFrom(node.right, data);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                node.data = this.findMin(node.right).data;
                this.removeFrom(node.right, node.data);
            }
        }
    }

    findMin(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMin(node.left);
        }
    }

    findMax(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.findMax(node.right);
        }
    }

    min() {
        return this.findMin(this.head).data;
    }

    max() {
        return this.findMax(this.head).data;
    }
}

module.exports = {
    BinarySearchTree
};
