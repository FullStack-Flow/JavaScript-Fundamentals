// PARAMETERS VS ARGUMENTS
function greet(name) {  // 'name' is a parameter
  console.log("Hello, " + name);
}

greet("Sarah");  // "Sarah" is an argument

// USING PARAMETERS
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");  // Hello, Alice!
greet("Bob");    // Hello, Bob!
greet("Charlie"); // Hello, Charlie!

// MULTIPLE PARAMETERS
function calculateArea(width, height) {
  const area = width * height;
  console.log("The area is: " + area);
}

calculateArea(10, 5);  // The area is: 50
calculateArea(7, 3);   // The area is: 21

function introduce(name, age, city) {
  console.log(name + " is " + age + " years old and lives in " + city);
}

introduce("John", 25, "New York");
// John is 25 years old and lives in New York

// DEFAULT PARAMETERS
greet();  // Hello, undefined

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();          // Hello, Guest
greet("Sarah");   // Hello, Sarah

// MORE DEFAULT PARAMETER EXAMPLES
function createUser(username, role = "user", active = true) {
  console.log("Username: " + username);
  console.log("Role: " + role);
  console.log("Active: " + active);
}

createUser("john_doe");
// Username: john_doe
// Role: user
// Active: true

createUser("admin_user", "admin", false);
// Username: admin_user
// Role: admin
// Active: false

// THE ARGUMENTS OBJECT
function showArguments() {
  console.log(arguments);
}

showArguments(1, 2, 3, 4, 5);
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// ACCESSING ARGUMENTS OBJECT
function printArguments() {
  console.log("First argument: " + arguments[0]);
  console.log("Second argument: " + arguments[1]);
  console.log("Number of arguments: " + arguments.length);
}

printArguments("Hello", "World", 123);
// First argument: Hello
// Second argument: World
// Number of arguments: 3

// PRACTICAL USE OF ARGUMENTS OBJECT
function sum() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(10, 20, 30, 40));    // 100
console.log(sum(5));                 // 5
console.log(sum(1, 2, 3, 4, 5, 6));  // 21

// ANOTHER PRACTICAL EXAMPLE
function findMax() {
  let max = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }

  return max;
}

console.log(findMax(5, 12, 3, 9, 1));     // 12
console.log(findMax(100, 50, 200, 75));   // 200

// ARGUMENTS OBJECT LIMITATIONS
function demonstrateArguments() {
  // This won't work:
  // arguments.forEach(...)  // ERROR!

  // Convert to real array:
  const argsArray = Array.from(arguments);

  argsArray.forEach(arg => {
    console.log(arg);
  });
}

demonstrateArguments("apple", "banana", "cherry");
// apple
// banana
// cherry

// MIXING PARAMETERS AND ARGUMENTS OBJECT
function greetAll(greeting) {
  console.log(greeting);

  for (let i = 1; i < arguments.length; i++) {
    console.log("- " + arguments[i]);
  }
}

greetAll("Welcome:", "Alice", "Bob", "Charlie");
// Welcome:
// - Alice
// - Bob
// - Charlie

// PRACTICAL EXAMPLE
function log(level) {
  const timestamp = new Date().toLocaleTimeString();
  console.log("[" + timestamp + "] " + level.toUpperCase());

  for (let i = 1; i < arguments.length; i++) {
    console.log("  " + arguments[i]);
  }
}

log("info", "User logged in", "Session started", "Loading dashboard");
// [2:30:45 PM] INFO
//   User logged in
//   Session started
//   Loading dashboard

log("error", "Connection failed", "Retrying...");
// [2:30:46 PM] ERROR
//   Connection failed
//   Retrying...
