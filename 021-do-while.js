// 1: WHAT IS A DO WHILE LOOP?
// do {
//     // code to be executed
// } while (condition);

// 2: DO WHILE VS WHILE LOOP
// let count = 5;

// while (count < 3) {
//     console.log("Count is: " + count);
//     count++;
// }

// console.log("Loop finished");

let count = 5;

do {
    console.log("Count is: " + count);
    count++;
} while (count < 3);

console.log("Loop finished");


// 3: PRACTICAL EXAMPLES
    // Example 1: User Input Validation
    let userInput;

    do {
        userInput = prompt("Please enter a number between 1 and 10:");
        userInput = Number(userInput);
    } while (userInput < 1 || userInput > 10 || isNaN(userInput));

    console.log("Thank you! You entered: " + userInput);

    // Example 2: Menu Systems
    let choice;

    do {
        console.log("=== Menu ===");
        console.log("1. Start Game");
        console.log("2. Settings");
        console.log("3. Exit");

        choice = prompt("Enter your choice (1-3):");

        if (choice === "1") {
            console.log("Starting game...");
        } else if (choice === "2") {
            console.log("Opening settings...");
        }

    } while (choice !== "3");

    console.log("Thanks for playing!");

// 4: COMMON PATTERNS & BEST PRACTICES
// let i = 1;

// do {
//     console.log("Iteration: " + i);
//     i++;
// } while (i <= 5);

// BAD - Infinite loop!
// let x = 0;
// do {
//     console.log(x);
//     // Forgot to increment x!
// } while (x < 5);


do {
    console.log("Hello");
} while (false); // Semicolon is required here!


// 5: WHEN TO USE DO WHILE