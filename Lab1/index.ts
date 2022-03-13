const exercise1 = (home: number, startingPoint: number, step: number) => {
  while (startingPoint !== home) {
    console.log(`Searching home at: ${startingPoint}, but it's not here.`);
    startingPoint += step;
  }

  console.log(
    `Arrived home. Home is: ${home} and current location is: ${startingPoint}`
  );
};

const exercise2iterative = (n: number) => {
  const multiply = (i: number, result: number[]) => {
    let carry = 0;

    result.forEach((digit, index) => {
      let product = digit * i + carry;
      result[index] = product % 10;
      carry = Math.floor(product / 10);
    });

    for (
      let carryNumber = carry;
      carryNumber;
      carryNumber = Math.floor(carryNumber / 10)
    )
      result.push(carryNumber % 10);
  };

  const result = [1];

  for (let i = 2; i <= n; i++) {
    multiply(i, result);
  }

  console.log(result.reverse().join(""));
};

const exercise2recursive = (n: number) => {
  if (n === 2) return n;

  return n * exercise2recursive(n - 1);
};

const nthFibonacciIterative = (n: number) => {
  if (n === 1 || n === 2) return n - 1;

  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    let currentFibo = fibonacci[0] + fibonacci[1];
    fibonacci[0] = fibonacci[1];
    fibonacci[1] = currentFibo;
  }

  return fibonacci[1];
};

const nthFibonacciRecursive = (n: number) => {
  if (n === 1 || n === 2) return n - 1;

  return nthFibonacciRecursive(n - 1) + nthFibonacciRecursive(n - 2);
};

const nthFiboConstantTime = (n: number) => {
  let goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(goldenRatio, n - 1) / Math.sqrt(5));
};

const maxRecursive = (array: Array<number>) => {
  if (array.length === 1) return array[0];
  return Math.max(array.shift(), maxRecursive(array));
};

const sumRecursive = (array: Array<number>) => {
  if (array.length === 1) return array[0];
  return array.shift() + sumRecursive(array);
};

const binarySearch = (sortedArray: Array<number>, searchedNumber: number) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === searchedNumber)
      return {
        found: true,
        position: mid,
      };

    if (searchedNumber > sortedArray[mid]) left = mid + 1;
    else right = mid - 1;
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
