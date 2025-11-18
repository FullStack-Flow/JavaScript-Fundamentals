// 1: WHAT ARE STRINGS?
"Hello"
'JavaScript'
"A"
"12345"
"Hello, my name is John and I'm learning JavaScript!"

// let str1 = "Hello World";
// let str2 = 'Hello World';
// let str3 = `Hello World`;


// 2: STRING LITERALS
let firstName = "John";
let lastName = 'Doe';
let greeting = `Hello there!`;

let city = "New York";
let country = 'USA';
let message = "Welcome to JavaScript programming!";
let emptyString = "";


// 3: STRING CONSTRUCTOR
// let str1 = new String("Hello");
// let str2 = new String('World');

let literal = "Hello";
let constructor = new String("Hello");

console.log(typeof literal);      // "string"
console.log(typeof constructor);  // "object"

let str1 = "Hello";
let str2 = "Hello";
let str3 = new String("Hello");
let str4 = new String("Hello");

console.log(str1 === str2);  // true
console.log(str3 === str4);  // false

// 4: WHY USE LITERALS?
// 5: PRIMITIVE WRAPPER
// let name = "John";
// console.log(name.toUpperCase());  // "JOHN"

// What you write:
// let name = "John";
// name.toUpperCase();

// // What JavaScript does behind the scenes:
// let name = "John";
// (new String(name)).toUpperCase();


// 6: PRACTICAL EXAMPLES
// String literals (recommended)
let username = "coder123";
let email = 'user@example.com';
let bio = `JavaScript developer learning every day`;

// These are all string primitives
console.log(typeof username);  // "string"
console.log(typeof email);     // "string"
console.log(typeof bio);       // "string"

// We can still use methods on them
console.log(username.length);        // 8
console.log(email.toUpperCase());    // "USER@EXAMPLE.COM"
console.log(bio.includes("JavaScript"));  // true

// Don't do this
let wrongWay = new String("Hello");
console.log(typeof wrongWay);  // "object" - not what we want!

// Do this instead
let rightWay = "Hello";
console.log(typeof rightWay);  // "string" - perfect!

