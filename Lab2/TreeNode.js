"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeNode = /** @class */ (function () {
    function TreeNode(data, leftChild, rightChild) {
        this._data = null;
        this._left = null;
        this._right = null;
        (this._data = data), (this._left = leftChild), (this._right = rightChild);
    }
    Object.defineProperty(TreeNode.prototype, "leftChild", {
        get: function () {
            return this._left;
        },
        set: function (node) {
            this._left = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "rightChild", {
        get: function () {
            return this._right;
        },
        set: function (node) {
            this._right = node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    return TreeNode;
}());
exports.default = TreeNode;
//# sourceMappingURL=TreeNode.js.map