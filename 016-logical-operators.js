// 1: WHAT ARE LOGICAL OPERATORS?
// 2: THE AND OPERATOR (&&)
// let age = 25;
// let hasLicense = true;

// if (age >= 18 && hasLicense) {
//     console.log("You can drive!");
// }

// let temperature = 28;
// let isSunny = true;

// if (temperature > 25 && isSunny) {
//     console.log("Perfect day for the beach!");
// }

// 3: THE OR OPERATOR (||) 
// let isWeekend = false;
// let isHoliday = true;

// if (isWeekend || isHoliday) {
//     console.log("You can relax today!");
// }

// 4: THE NOT OPERATOR (!) 
// let isLoggedIn = false;

// if (!isLoggedIn) {
//     console.log("Please log in to continue");
// }

// let hasErrors = false;

// if (!hasErrors) {
//     console.log("Form submitted successfully!");
// }

// let age = 15;

// if (!(age >= 18)) {
//     console.log("You are not an adult");
// }

// 5: COMBINING LOGICAL OPERATORS
// let age = 20;
// let hasTicket = true;
// let hasID = false;

// if (age >= 18 && (hasTicket || hasID)) {
//     console.log("Entry allowed");
// }

let score = 85;
let isBonus = false;

if (score >= 80 && !isBonus) {
    console.log("You passed with a high score!");
}

// 6: TRUTHY AND FALSY VALUES
// **Falsy values** include:

    // - `false`
    // - `0`
    // - `""` (empty string)
    // - `null`
    // - `undefined`
    // - `NaN`

    // let username = "John";

    // if (username) {
    //     console.log("Welcome, " + username);
    // }

    let userColor = "";
    let defaultColor = "blue";

    let chosenColor = userColor || defaultColor;
    console.log(chosenColor); // "blue"


// 7: SHORT-CIRCUIT EVALUATION
    // With AND (&&):
    // let isActive = false;
    // let result = isActive && expensiveFunction();
    // expensiveFunction() is never called!

    // With OR (||):
    // let hasAccess = true;
    // let result = hasAccess || expensiveFunction();
    // expensiveFunction() is never called!

// PRACTICAL EXAMPLE
// let username = "admin";
// let password = "1234";
// let isActive = true;

// if ((username === "admin" || username === "superuser") &&
//     password.length >= 4 &&
//     isActive) {
//     console.log("Login successful!");
// } else {
//     console.log("Login failed");
// }
