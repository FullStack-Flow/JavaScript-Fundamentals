// SECTION 1: RECURSIVE FUNCTIONS
// const factorial = (n) => {
//   // Base case
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   // Recursive case
//   return n * factorial(n - 1);
// };

// console.log(factorial(5)); // 120

// const countdown = (num) => {
//   if (num < 0) {
//     return;
//   }

//   console.log(num);
//   countdown(num - 1);
// };

// countdown(5); // 5, 4, 3, 2, 1, 0

// const sumArray = (arr) => {
//   if (arr.length === 0) {
//     return 0;
//   }

//   return arr[0] + sumArray(arr.slice(1));
// };

// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// const flatten = (arr) => {
//   let result = [];

//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   });

//   return result;
// };

// console.log(flatten([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]

// SECTION 2: CURRYING
// Regular function
// const add = (a, b, c) => {
//   return a + b + c;
// };

// console.log(add(2, 3, 4)); // 9

// // Curried version
// const addCurried = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// console.log(addCurried(2)(3)(4)); // 9

// const addCurried = (a) => (b) => (c) => a + b + c;

// console.log(addCurried(2)(3)(4)); // 9


// const multiply = (a) => (b) => a * b;

// const double = multiply(2);
// const triple = multiply(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15


// const greet = (greeting) => (name) => {
//   return `${greeting}, ${name}!`;
// };

// const sayHello = greet("Hello");
// const sayGoodbye = greet("Goodbye");

// console.log(sayHello("Alice")); // Hello, Alice!
// console.log(sayGoodbye("Bob")); // Goodbye, Bob!



// const discount = (discountPercent) => (price) => {
//   return price - (price * discountPercent / 100);
// };

// const tenPercentOff = discount(10);
// const twentyPercentOff = discount(20);

// console.log(tenPercentOff(100)); // 100 - (100*10/100) = 90
// console.log(twentyPercentOff(100)); // 100 - (100*20/100) = 80

// const curry = (fn) => {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return (...nextArgs) => {
//         return curried(...args, ...nextArgs);
//       };
//     }
//   };
// };

// const sum = (a, b, c) => a + b + c;
// const curriedSum = curry(sum);

// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6

// SECTION 3: FUNCTION COMPOSITION

// const add5 = (num) => num + 5;
// const multiply3 = (num) => num * 3;
// const subtract2 = (num) => num - 2;

// Manual composition
// const result = subtract2(multiply3(add5(10)));
// console.log(result); // 43
// 10 + 5 = 15, 15 * 3 = 45, 45 - 2 = 43


// const compose = (...functions) => {
//   return (value) => {
//     return functions.reduceRight((acc, fn) => fn(acc), value);
//   };
// };

// const calculate = compose(subtract2, multiply3, add5);
// console.log(calculate(10)); // 43


// const pipe = (...functions) => {
//   return (value) => {
//     return functions.reduce((acc, fn) => fn(acc), value);
//   };
// };

// const calculatePipe = pipe(add5, multiply3, subtract2);
// console.log(calculatePipe(10)); // 43

// 10 
// add5(10) -> 15
// multiply3(15) -> 45
// subtract2(45) -> 43
// Final result: 43

// User Data
const trim = (str) => str.trim();
const lowercase = (str) => str.toLowerCase();
const removeSpaces = (str) => str.replace(/\s/g, '');

const processUsername = pipe(trim, lowercase, removeSpaces);

console.log(processUsername("  John Doe  ")); // johndoe

const numbers = [1, 2, 3, 4, 5, 6];

// Working with arrays
const double = (arr) => arr.map(x => x * 2);
const filterEven = (arr) => arr.filter(x => x % 2 === 0);
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

const processNumbers = pipe(double, filterEven, sum);

console.log(processNumbers(numbers)); // 24
// [2, 4, 6, 8, 10, 12] -> [2, 4, 6, 8, 10, 12] -> 42... wait let me recalculate
// Actually: double gives [2,4,6,8,10,12], all are even, sum is 42

// Combining curring and composition:
const multiply = (multiplier) => (num) => num * multiplier;
const add = (addend) => (num) => num + addend;
const subtract = (subtrahend) => (num) => num - subtrahend;

const calculate = pipe(
  multiply(2),
  add(10),
  subtract(5)
);

console.log(calculate(5)); // 15
// 5 * 2 = 10, 10 + 10 = 20, 20 - 5 = 15

