var exercise1 = function (home, startingPoint, step) {
    while (startingPoint !== home) {
        console.log("Searching home at: ".concat(startingPoint, ", but it's not here."));
        startingPoint += step;
    }
    console.log("Arrived home. Home is: ".concat(home, " and current location is: ").concat(startingPoint));
};
var exercise2iterative = function (n) {
    var multiply = function (i, result) {
        var carry = 0;
        result.forEach(function (digit, index) {
            var product = digit * i + carry;
            result[index] = product % 10;
            carry = Math.floor(product / 10);
        });
        for (var carryNumber = carry; carryNumber; carryNumber = Math.floor(carryNumber / 10))
            result.push(carryNumber % 10);
    };
    var result = [1];
    for (var i = 2; i <= n; i++) {
        multiply(i, result);
    }
    console.log(result.reverse().join(""));
};
var exercise2recursive = function (n) {
    if (n === 2)
        return n;
    return n * exercise2recursive(n - 1);
};
var nthFibonacciIterative = function (n) {
    if (n === 1 || n === 2)
        return n - 1;
    var fibonacci = [0, 1];
    for (var i = 2; i < n; i++) {
        var currentFibo = fibonacci[0] + fibonacci[1];
        fibonacci[0] = fibonacci[1];
        fibonacci[1] = currentFibo;
    }
    return fibonacci[1];
};
var nthFibonacciRecursive = function (n) {
    if (n === 1 || n === 2)
        return n - 1;
    return nthFibonacciRecursive(n - 1) + nthFibonacciRecursive(n - 2);
};
var nthFiboConstantTime = function (n) {
    var goldenRatio = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(goldenRatio, n - 1) / Math.sqrt(5));
};
var maxRecursive = function (array) {
    if (array.length === 1)
        return array[0];
    return Math.max(array.shift(), maxRecursive(array));
};
var sumRecursive = function (array) {
    if (array.length === 1)
        return array[0];
    return array.shift() + sumRecursive(array);
};
var binarySearch = function (sortedArray, searchedNumber) {
    var left = 0;
    var right = sortedArray.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (sortedArray[mid] === searchedNumber)
            return {
                found: true,
                position: mid,
            };
        if (searchedNumber > sortedArray[mid])
            left = mid + 1;
        else
            right = mid - 1;
    }
    return {
        found: false,
        position: -1,
    };
};
(function app() {
    //   exercise1(20, 10, 2);
    //exercise2iterative(100);
    //console.log(exercise2recursive(5));
    //   console.log(nthFibonacciIterative(100));
    //   console.log(nthFibonacciRecursive(8));
    //   console.log(nthFiboConstantTime(8));
    //   console.log(maxRecursive([1, 2, 3, 4]));
    //   console.log(sumRecursive([1, 2, 3, 4]));
    //problema 3 suplimentara: base case-ul plasat dupa apelul recursiv => call stack size va fi depasit
    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1));
})();
//# sourceMappingURL=index.js.map