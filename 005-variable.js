// 1. What are Variables?
// 2. Var -  The old way of declaring variables
// var name = "John";
// var age = 30;
// console.log(name);
// console.log(age);

// var score = 100;
// console.log(score);
// score = 150; // Re-assigning the value
// console.log(score);

// function test() {
//   if (true) {
//     var message = "Hello";
//   }
//   console.log(message); // This works! Prints "Hello"
// }
// test();

// console.log(greeting); // Undefined due to hoisting
// var greeting = "Hi";

// 3. Let - The new way of declaring variables (can be changed)
// let city = "New York";
// let population = 8000000;
// city = "Los Angeles"; // Re-assigning the value

// if(true){
//     let localMessage = "Welcome!";
//     console.log(localMessage); // This works! Prints "Welcome!"
// }
// console.log(localMessage); // Error: localMessage is not defined

// console.log(city); // Error: Cannot access 'city' before initialization
// let city = "New York";

// 4. Const - For constants values (cannot be changed)
// const country = "USA";
// const pi = 3.14;
// country = "Canada"; // Error: Assignment to constant variable

// const taxRate;

// const number = [1, 2, 3];
// number.push(4);
// console.log(number); // Prints [1, 2, 3, 4]

// 5. var vs let vs const
    // - Avoid var in modern code.
    // - Default to const.
    // - Use let only when necessary.

    // const userName = "Sarah";  // Won't change
    // let score = 0;             // Will increase during game
    // const maxScore = 1000;     // Fixed limit

    // During game
    // score = score + 50;  // OK
    // score = score + 30;  // OK

    // userName = "John";  // Would cause error
    // maxScore = 2000;    // Would cause error

// 6. Variable Naming Conventions
// let firstName = "Alice"; // camelCase
// let _private = "valid";
// let $dollar = "also valid";
// let user123 = "valid";

// const 123user = "invalid"; // Cannot start with a number
// const user-name = "invalid"; // Hyphens are not allowed
// const function = "invalid

// const MAX_ATTEMPTS = 5; // UPPER_SNAKE_CASE for constants