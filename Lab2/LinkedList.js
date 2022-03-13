"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = /** @class */ (function () {
    function LinkedList(head) {
        this.head = null;
        this.size = 0;
        if (!head)
            return;
        this.head = head;
        this.size = 1;
    }
    LinkedList.prototype.insertAtStart = function (node) {
        node.next = this.getHead();
        this.head = node;
        this.size++;
    };
    LinkedList.prototype.push = function (node) {
        var iterator = this.head;
        while (iterator.next)
            iterator = iterator.next;
        node.next = null;
        iterator.next = node;
        this.size++;
    };
    LinkedList.prototype.insertAt = function (position, node) {
        if (position < 0 || position > this.size)
            return;
        if (position === 0) {
            this.insertAtStart(node);
            return;
        }
        if (position === this.size) {
            this.push(node);
            return;
        }
        var iterator = this.head;
        for (var i = 0; i < position - 1; i++)
            iterator = iterator.next;
        var savedNode = iterator.next;
        iterator.next = node;
        node.next = savedNode;
        this.size++;
    };
    LinkedList.prototype.insertSorted = function (node, comparator) {
        if (comparator === void 0) { comparator = function (item1, item2) { return item1 > item2; }; }
        if (this.size === 1) {
            comparator(node.data, this.head.data)
                ? this.push(node)
                : this.insertAtStart(node);
            return;
        }
        var position = 0;
        var iterator = this.head;
        while (iterator && comparator(node.data, iterator.data)) {
            position++;
            iterator = iterator.next;
        }
        this.insertAt(position, node);
    };
    LinkedList.prototype.removeFirst = function () {
        this.head = this.head.next;
        this.size--;
    };
    LinkedList.prototype.removeLast = function () {
        var iterator = this.head;
        while (iterator.next.next)
            iterator = iterator.next;
        iterator.next = null;
        this.size--;
    };
    LinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position > this.size)
            return;
        if (position === 0) {
            this.removeFirst();
            return;
        }
        if (position === this.size) {
            this.removeLast();
            return;
        }
        var iterator = this.head;
        for (var i = 0; i < position - 1; i++)
            iterator = iterator.next;
        iterator.next = iterator.next.next;
        this.size--;
    };
    LinkedList.prototype.sort = function (needSwap) {
        if (needSwap === void 0) { needSwap = function (item1, item2) { return item1 > item2; }; }
        var sorted = false;
        while (!sorted) {
            var current = this.head;
            var currentNext = current.next;
            sorted = true;
            while (currentNext) {
                if (needSwap(current.data, currentNext.data)) {
                    var savedData = current.data;
                    current.data = currentNext.data;
                    currentNext.data = savedData;
                    sorted = false;
                }
                current = current.next;
                currentNext = currentNext.next;
            }
        }
    };
    LinkedList.prototype.iterate = function () {
        console.log("-------------------");
        var iterator = this.head;
        while (iterator) {
            console.log(iterator.data);
            iterator = iterator.next;
        }
        console.log("-------------------");
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size > 0;
    };
    LinkedList.prototype.setHead = function (head) {
        this.head = head;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map