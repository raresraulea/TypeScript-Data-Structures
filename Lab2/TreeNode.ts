export type Nullable<T> = T | null;

export default class TreeNode<T> {
  private _data: Nullable<T> = null;
  private _left: Nullable<TreeNode<T>> = null;
  private _right: Nullable<TreeNode<T>> = null;

  constructor(
    data: T,
    leftChild?: Nullable<TreeNode<T>>,
    rightChild?: Nullable<TreeNode<T>>
  ) {
    (this._data = data), (this._left = leftChild), (this._right = rightChild);
  }

  set leftChild(node: Nullable<TreeNode<T>>) {
    this._left = node;
  }

  get leftChild(): Nullable<TreeNode<T>> {
    return this._left;
  }

  set rightChild(node: Nullable<TreeNode<T>>) {
    this._right = node;
  }

  get rightChild(): Nullable<TreeNode<T>> {
    return this._right;
  }

  set data(value: T) {
    this._data = value;
  }

  get data(): T {
    return this._data;
  }
}
