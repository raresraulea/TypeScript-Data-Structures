"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode(data, next) {
        this._data = null;
        this._next = null;
        (this._data = data), (this._next = next);
    }
    Object.defineProperty(ListNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: false,
        configurable: true
    });
    return ListNode;
}());
exports.default = ListNode;
//# sourceMappingURL=ListNode.js.map