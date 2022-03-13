"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
        this.root = null;
    }
    BinarySearchTree.prototype.insertNode = function (node) {
        if (this.root === null) {
            this.root = node;
            return;
        }
        this.insert(this.root, node);
    };
    BinarySearchTree.prototype.maxNode = function (startNode) {
        if (!startNode.rightChild)
            return startNode;
        return this.maxNode(startNode.rightChild);
    };
    BinarySearchTree.prototype.minNode = function (startNode) {
        if (!startNode.rightChild)
            return startNode;
        return this.maxNode(startNode.leftChild);
    };
    BinarySearchTree.prototype.deleteNode = function (node) { };
    BinarySearchTree.prototype.insert = function (currentNode, newNode) {
        if (newNode.data < currentNode.data) {
            if (!currentNode.leftChild) {
                currentNode.leftChild = newNode;
                return;
            }
            this.insert(currentNode.leftChild, newNode);
            return;
        }
        if (!currentNode.rightChild) {
            return (currentNode.rightChild = newNode);
        }
        return this.insert(currentNode.rightChild, newNode);
    };
    BinarySearchTree.prototype.inorder = function (node) {
        if (node) {
            this.inorder(node.leftChild);
            console.log(node.data);
            this.inorder(node.rightChild);
        }
    };
    BinarySearchTree.prototype.preorder = function (node) {
        if (node) {
            console.log(node.data);
            this.preorder(node.leftChild);
            this.preorder(node.rightChild);
        }
    };
    BinarySearchTree.prototype.postorder = function (node) {
        if (node) {
            this.postorder(node.leftChild);
            this.postorder(node.rightChild);
            console.log(node.data);
        }
    };
    BinarySearchTree.prototype.getRoot = function () {
        return this.root;
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
//# sourceMappingURL=BinarySearchTree.js.map