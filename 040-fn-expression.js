// 1: RETURN VALUES
// function add(a, b) {
//   return a + b;
// }

// const result = add(5, 3);
// console.log(result); // 8

// 2: FUNCTIONS WITHOUT RETURN
// function greet(name) {
//   console.log("Hello, " + name);
// }

// const greeting = greet("Sarah");
// console.log(greeting); // undefined

// 3: RETURN STOPS EXECUTION 
function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Welcome!";
  console.log("This will never run"); // Unreachable code
}

const message = checkAge(15);
console.log(message); // "Too young"

// 4: RETURNING DIFFERENT DATA TYPES
// Returning a boolean
// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(4)); // true

// Returning an array
// function getColors() {
//   return ["red", "green", "blue"];
// }

// const colors = getColors();
// console.log(colors[0]); // "red"

// // Returning an object
// function createUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     active: true
//   };
// }

// const user = createUser("John", 25);
// console.log(user.name); // "John"

// 5: FUNCTION EXPRESSIONS
// const sayHello = function() {
//   console.log("Hello!");
// };

// sayHello(); // "Hello!"

// 6: DECLARATION VS EXPRESSION
// This works - function declaration
greet();

function greet() {
  console.log("Hello from declaration!");
}

// This causes an error - function expression
sayGoodbye(); // Error: Cannot access 'sayGoodbye' before initialization

const sayGoodbye = function() {
  console.log("Goodbye from expression!");
};

// 7: NAMED FUNCTION EXPRESSIONS
const factorial = function calculateFactorial(n) {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
};

console.log(factorial(5)); // 120

// 8: PRACTICAL EXAMPLE 
const calculateDiscount = function(price, discountPercent) {
  if (price <= 0) {
    return 0;
  }

  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;

  return finalPrice;
};

const originalPrice = 100;
const discountedPrice = calculateDiscount(originalPrice, 20);

console.log("Original: $" + originalPrice); // "Original: $100"
console.log("After discount: $" + discountedPrice); // "After discount: $80"

// 9: WHEN TO USE EACH STYLE 