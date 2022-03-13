import ListNode, { Nullable } from "./ListNode";

export default class LinkedList<T> {
  private head: Nullable<ListNode<T>> = null;
  private size: number = 0;

  constructor(head?: Nullable<ListNode<T>>) {
    if (!head) return;
    this.head = head;
    this.size = 1;
  }

  public insertAtStart(node: Nullable<ListNode<T>>) {
    node.next = this.getHead();
    this.head = node;

    this.size++;
  }

  public push(node: Nullable<ListNode<T>>) {
    let iterator = this.head;
    while (iterator.next) iterator = iterator.next;

    node.next = null;
    iterator.next = node;

    this.size++;
  }

  public insertAt(position: number, node: Nullable<ListNode<T>>) {
    if (position < 0 || position > this.size) return;

    if (position === 0) {
      this.insertAtStart(node);
      return;
    }

    if (position === this.size) {
      this.push(node);
      return;
    }

    let iterator = this.head;
    for (let i = 0; i < position - 1; i++) iterator = iterator.next;

    let savedNode = iterator.next;
    iterator.next = node;
    node.next = savedNode;

    this.size++;
  }

  public insertSorted(
    node: Nullable<ListNode<T>>,
    comparator: (item1, item2) => boolean = (item1, item2) => item1 > item2
  ) {
    if (this.size === 1) {
      comparator(node.data, this.head.data)
        ? this.push(node)
        : this.insertAtStart(node);
      return;
    }

    let position = 0;
    let iterator = this.head;

    while (iterator && comparator(node.data, iterator.data)) {
      position++;
      iterator = iterator.next;
    }

    this.insertAt(position, node);
  }

  public removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  public removeLast() {
    let iterator = this.head;
    while (iterator.next.next) iterator = iterator.next;

    iterator.next = null;
    this.size--;
  }

  public removeAt(position: number) {
    if (position < 0 || position > this.size) return;

    if (position === 0) {
      this.removeFirst();
      return;
    }

    if (position === this.size) {
      this.removeLast();
      return;
    }

    let iterator = this.head;
    for (let i = 0; i < position - 1; i++) iterator = iterator.next;

    iterator.next = iterator.next.next;

    this.size--;
  }

  public sort(
    needSwap: (item1, item2) => boolean = (item1, item2) => item1 > item2
  ) {
    let sorted = false;

    while (!sorted) {
      let current = this.head;
      let currentNext = current.next;
      sorted = true;

      while (currentNext) {
        if (needSwap(current.data, currentNext.data)) {
          let savedData = current.data;
          current.data = currentNext.data;
          currentNext.data = savedData;
          sorted = false;
        }

        current = current.next;
        currentNext = currentNext.next;
      }
    }
  }

  public iterate() {
    console.log("-------------------");
    let iterator = this.head;
    while (iterator) {
      console.log(iterator.data);
      iterator = iterator.next;
    }
    console.log("-------------------");
  }

  public isEmpty() {
    return this.size > 0;
  }

  public setHead(head: Nullable<ListNode<T>>) {
    this.head = head;
  }

  public getHead(): Nullable<ListNode<T>> {
    return this.head;
  }
}
