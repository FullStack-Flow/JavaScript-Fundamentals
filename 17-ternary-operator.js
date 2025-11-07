// 1: THE TERNARY OPERATOR
// let age = 20;
// let message;

// if (age >= 18) {
//     message = "You are an adult";
// } else {
//     message = "You are a minor";
// }

// let age = 20;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

// 2: PRACTICAL EXAMPLES
// Shipping cost
// let orderAmount = 45;
// let shipping = orderAmount >= 50 ? 0 : 5.99;

// // Even or odd
// let number = 7;
// let result = number % 2 === 0 ? "Even" : "Odd";

// Letter grades
// let score = 85;
// let grade = score >= 90 ? "A" :
//             score >= 80 ? "B" :
//             score >= 70 ? "C" : "D";

// 3: LOGICAL OR FOR DEFAULTS
// let username = "";
// let displayName = username || "Guest";
// console.log(displayName); // "Guest"

// function greet(name) {
//     name = name || "Friend";
//     console.log(`Hello, ${name}!`);
// }

// 4: LOGICAL AND FOR CONDITIONS
// let isLoggedIn = true;
// isLoggedIn && console.log("Welcome back!");

// // Prevents errors when checking nested properties
// let user = { name: "John" };
// user && user.name && console.log(user.name);

// 5: NULLISH COALESCING
// let count = 0;
// let result1 = count || 10;    // 10 (0 is falsy)
// let result2 = count ?? 10;    // 0 (0 is not null/undefined)

// // 6: OTHER SHORTHANDS
// counter++;      // counter = counter + 1
// counter--;      // counter = counter - 1
// counter += 5;   // counter = counter + 5
// counter *= 2;   // counter = counter * 2

// 7: BEST PRACTICES
// function getUserGreeting(user) {
//     let name = user?.name || "Guest";
//     let timeOfDay = new Date().getHours();
//     let greeting = timeOfDay < 12 ? "Good morning" :
//                    timeOfDay < 18 ? "Good afternoon" : "Good evening";

//     return `${greeting}, ${name}!`;
// }

// console.log(getUserGreeting({ name: "Alice" }));
// console.log(getUserGreeting(null));

// 8: COMMON MISTAKES
// WRONG - must have both cases
// let result = age >= 18 ? "Adult";

// BAD - don't use ternary for side effects
isValid ? saveData() : deleteData();  // Use if-else instead

// WATCH OUT - OR vs nullish coalescing
let value = 0;
let result = value || 100;  // 100 - might not be what you want!
