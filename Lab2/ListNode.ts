export type Nullable<T> = T | null;

export default class ListNode<T> {
  private _data: Nullable<T> = null;
  private _next: Nullable<ListNode<T>> = null;

  constructor(data: T, next?: Nullable<ListNode<T>>) {
    (this._data = data), (this._next = next);
  }

  public set next(next: Nullable<ListNode<T>>) {
    this._next = next;
  }

  public get next(): Nullable<ListNode<T>> {
    return this._next;
  }

  public set data(data: T) {
    this._data = data;
  }

  public get data(): T {
    return this._data;
  }
}
