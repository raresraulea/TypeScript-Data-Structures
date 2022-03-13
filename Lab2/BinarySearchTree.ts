import TreeNode, { Nullable } from "./TreeNode";

export default class BinarySearchTree<T> {
  private root: Nullable<TreeNode<T>> = null;

  constructor() {
    this.root = null;
  }

  public insertNode(node: Nullable<TreeNode<T>>) {
    if (this.root === null) {
      this.root = node;
      return;
    }

    this.insert(this.root, node);
  }

  public maxNode(startNode: Nullable<TreeNode<T>>) {
    if (!startNode.rightChild) return startNode;

    return this.maxNode(startNode.rightChild);
  }

  public minNode(startNode: Nullable<TreeNode<T>>) {
    if (!startNode.rightChild) return startNode;

    return this.maxNode(startNode.leftChild);
  }

  public deleteNode(node: Nullable<TreeNode<T>>) {}

  private insert(
    currentNode: Nullable<TreeNode<T>>,
    newNode: Nullable<TreeNode<T>>
  ) {
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
  }

  public inorder(node: Nullable<TreeNode<T>>) {
    if (node) {
      this.inorder(node.leftChild);
      console.log(node.data);
      this.inorder(node.rightChild);
    }
  }

  public preorder(node: Nullable<TreeNode<T>>) {
    if (node) {
      console.log(node.data);
      this.preorder(node.leftChild);
      this.preorder(node.rightChild);
    }
  }

  public postorder(node: Nullable<TreeNode<T>>) {
    if (node) {
      this.postorder(node.leftChild);
      this.postorder(node.rightChild);
      console.log(node.data);
    }
  }

  public getRoot() {
    return this.root;
  }
}
