// WHAT ARE CONDITIONAL STATEMENTS?
// THE IF STATEMENT
// if (condition) {
//   // code to execute if condition is true
// }

// let age = 20;

// if (age >= 18) {
//   console.log("You are an adult.");
// }

// let temperature = 35;

// if (temperature > 30) {
//   console.log("It's hot outside!");
// }

// THE ELSE STATEMENT
// let age = 16;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// let isRaining = true;

// if (isRaining) {
//   console.log("Take an umbrella.");
// } else {
//   console.log("Enjoy the sunshine!");
// }

// THE ELSE IF STATEMENT
// let score = 75;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }

// PRACTICAL EXAMPLES
    // Example 1: Login System
        // let username = "john";
        // let password = "1234";

        // if (username === "john" && password === "1234") {
        //     console.log("Login successful!");
        // } else {
        //     console.log("Invalid credentials.");
        // }

    // Example 2: Discount System
    // let purchaseAmount = 150;

    // if (purchaseAmount >= 200) {
    //     console.log("You get 20% discount!");
    // } else if (purchaseAmount >= 100) {
    //     console.log("You get 10% discount!");
    // } else {
    //     console.log("No discount.");
    // }

    // Example 3: Time-based Greeting
        // let hour = 14;

        // if (hour < 12) {
        //     console.log("Good morning!");
        // } else if (hour < 18) {
        //     console.log("Good afternoon!");
        // } else {
        //     console.log("Good evening!");
        // }

// COMMON MISTAKES TO AVOID
    // 1. Using assignment instead of comparison
    // let age = 18;

    // if (age = 20) {  // Wrong! This assigns 20 to age
    //     console.log("Adult");
    // }

    // 2. Forgetting curly braces
    // if (age >= 18)
    // console.log("Adult");  // Works, but not recommended

    // if (age >= 18) {
    //     console.log("Adult");  // Better!
    // }

    // 3. Order matters in else if chains
    // let score = 95;

    // if (score >= 70) {
    //     console.log("Pass");  // This will execute
    // } else if (score >= 90) {
    //     console.log("Excellent");  // This never runs!
    // }

// NESTED CONDITIONS
// let age = 25;
// let hasLicense = true;

// if (age >= 18) {
//   if (hasLicense) {
//     console.log("You can drive!");
//   } else {
//     console.log("You need a license.");
//   }
// } else {
//   console.log("You're too young to drive.");
// }

// PRACTICE CHALLENGE
    // Write a program that takes a number and determines:

    // - If it's positive, negative, or zero
    // - If it's even or odd