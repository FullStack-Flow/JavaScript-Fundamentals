// SECTION 1: JAVASCRIPT ENGINE
    // - Parsing
    // - Execution

    // You write JavaScript code → The engine parses it → Creates an execution context → Executes the code.

// SECTION 2: EXECUTION CONTEXT
    // 1. Global Execution Context (GEC)
    // 2. Function Execution Context (FEC)
        // const name = "Alex";

        // const greet = () => {
        //     const message = "Hello";
        //     console.log(message + " " + name);
        // };

        // greet();

// SECTION 3: PHASES OF EXECUTION CONTEXT
    // Phase 1: Memory Creation Phase (Creation Phase)
    // Phase 2: Code Execution Phase
        console.log(age); // What do you think this will output?
        const age = 25;

        console.log(greeting); // undefined
        var greeting = "Hello World";
        console.log(greeting); // "Hello World"

// SECTION 4: HOISTING
    // Hoisting with var:
    console.log(x); // undefined
    var x = 10;
    console.log(x); // 10

    var x; // Declaration hoisted
    console.log(x); // undefined
    x = 10; // Initialization stays here
    console.log(x); // 10

    // Hoisting with let and const:
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 20;

// SECTION 5: FUNCTION HOISTING
    // Function Declarations:
    sayHello(); // "Hello!" - This works!

    function sayHello() {
        console.log("Hello!");
    }

    // Function Expressions with var:
    sayHi(); // TypeError: sayHi is not a function

    var sayHi = function() {
        console.log("Hi!");
    };

    // Function Expressions with const:
    greetUser(); // ReferenceError: Cannot access 'greetUser' before initialization

    const greetUser = function() {
        console.log("Greetings!");
    };

    // Arrow Functions:
    welcome(); // ReferenceError: Cannot access 'welcome' before initialization

    const welcome = () => {
        console.log("Welcome!");
    };

// SECTION 6: PRACTICAL EXAMPLE
console.log("1:", a); // undefined
console.log("2:", calculate(5)); // 25

var a = 10;

function calculate(num) {
  const result = num * num;
  return result;
}

console.log("3:", a); // 10
console.log("4:", multiply(4, 5)); // ReferenceError

const multiply = (x, y) => {
  return x * y;
};

// SECTION 7: THE CALL STACK
const first = () => {
  console.log("First function");
  second();
  console.log("First function again");
};

const second = () => {
  console.log("Second function");
  third();
  console.log("Second function again");
};

const third = () => {
  console.log("Third function");
};

first();

// Output
// First function
// Second function
// Third function
// Second function again
// First function again

// Temporal dead zone 