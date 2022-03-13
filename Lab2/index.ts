import LinkedList from "./LinkedList";
import ListNode from "./ListNode";

let linkedList = new LinkedList(new ListNode<number>(11));

// linkedList.insertAtStart(new ListNode<number>(2));
// linkedList.insertAtStart(new ListNode<number>(3));
// linkedList.insertAtStart(new ListNode<number>(4));

linkedList.insertSorted(new ListNode<number>(211));
linkedList.insertSorted(new ListNode<number>(13));
linkedList.insertSorted(new ListNode<number>(47));
linkedList.insertSorted(new ListNode<number>(417));
linkedList.insertSorted(new ListNode<number>(42));
linkedList.insertSorted(new ListNode<number>(1));
linkedList.insertAt(1, new ListNode(100));

linkedList.iterate();
// linkedList.removeAt(1);
// linkedList.iterate();

// linkedList.sort((a, b) => a < b);

// import BinarySearchTree from "./BinarySearchTree";
// import TreeNode from "./TreeNode";

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insertNode(new TreeNode(10));
// binarySearchTree.insertNode(new TreeNode(1));
// binarySearchTree.insertNode(new TreeNode(5));
// binarySearchTree.insertNode(new TreeNode(120));

// binarySearchTree.inorder(binarySearchTree.getRoot());
