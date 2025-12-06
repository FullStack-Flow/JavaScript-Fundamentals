// 1: WHAT IS A FUNCTION?
// 2: FUNCTION DEFINITION
// function greet() {
//   console.log("Hello, welcome to JavaScript!");
// }

// 3: FUNCTION INVOCATION 

// Invoking the function
// greet();

// function showMessage() {
//   console.log("Functions are awesome!");
//   console.log("You can write multiple lines of code here.");
// }

// showMessage();
// showMessage();
// showMessage();

// 4: FUNCTION NAMING CONVENTIONS
// Good exmaples:
    // calculateTotal
    // getUserData
    // displayMessage

// Bad examples:
    // `x` (not descriptive)
    // `data` (not a verb)
    // `DoSomething` (should be camelCase)

// 5: MULTIPLE FUNCTIONS
// function greetUser() {
//   console.log("Welcome to the app!");
// }

// function calculateSum() {
//   const num1 = 10;
//   const num2 = 20;
//   const sum = num1 + num2;
//   console.log("Sum is: " + sum);
// }

// function showCurrentTime() {
//   const now = new Date();
//   console.log("Current time: " + now.toLocaleTimeString());
// }

// // Calling each function
// greetUser();
// calculateSum();
// showCurrentTime();

// 6: FUNCTIONS AND VARIABLES
// function showAge() {
//   const age = 25;
//   console.log("Age is: " + age);
// }

// showAge();

// 7: WHY USE FUNCTIONS?
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");
// console.log("Welcome to JavaScript!");

// function welcome() {
//   console.log("Welcome to JavaScript!");
// }

// welcome();
// welcome();
// welcome();
// welcome();
// welcome();

// 8: PRACTICAL EXAMPLE
function addNumbers() {
  const a = 15;
  const b = 25;
  const result = a + b;
  console.log("Addition: " + result);
}

function subtractNumbers() {
  const a = 50;
  const b = 20;
  const result = a - b;
  console.log("Subtraction: " + result);
}

function multiplyNumbers() {
  const a = 6;
  const b = 7;
  const result = a * b;
  console.log("Multiplication: " + result);
}

// Calling the functions
addNumbers();
subtractNumbers();
multiplyNumbers();

// 9: KEY TAKEAWAYS