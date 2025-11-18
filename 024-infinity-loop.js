// 1: WHAT IS AN INFINITE LOOP?
// while (true) {
//     console.log("This will run forever!");
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     // Oops! We forgot to increment i
// }

// // 2: WHEN ARE INFINITE LOOPS USEFUL?
// while (true) {
//     updateGameState();
//     renderGraphics();
//     checkUserInput();
// }

// 3: LOOP CONTROL TECHNIQUES 
    // 1. Using Break Properly
    // let count = 0;
    // while (true) {
    //     console.log("Count:", count);
    //     count++;

    //     if (count >= 5) {
    //         break; // Exit when we reach 5
    //     }
    // }
    // console.log("Loop finished!");

    // 2. Using Continue for Flow Control
    // for (let i = 0; i < 10; i++) {
    //     if (i % 2 === 0) {
    //         continue; // Skip even numbers
    //     }
    //     console.log(i); // Only odd numbers are printed
    // }

    // 3. Flag Variables for Control
    // let shouldContinue = true;
    // let attempts = 0;

    // while (shouldContinue) {
    //     attempts++;
    //     console.log("Attempt:", attempts);

    //     // Complex condition
    //     if (attempts > 10 || Math.random() > 0.9) {
    //         shouldContinue = false;
    //     }
    // }

    // 4. Labels for Nested Loop Control
    outerLoop: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(`i: ${i}, j: ${j}`);

            if (i === 1 && j === 1) {
                break outerLoop; // Breaks out of BOTH loops
            }
        }
    }
    console.log("Done!");

// 4: COMMON PITFALLS & DEBUGGING
    // Pitfall #1: Forgetting to Update the Loop Variable
    // let i = 0;
    // while (i < 10) {
    //     console.log(i);
    //     // Missing: i++
    // }

    // Pitfall #2: Wrong Comparison Operator
    // let i = 10;
    // while (i > 0) {
    //     console.log(i);
    //     i++; // Should be i-- to approach 0
    // }

    // Pitfall #3: Condition Never Becomes False
    // let x = 0;
    // while (x != 10) {
    //     console.log(x);
    //     x += 2; // Skips 10! Goes 8, 10, 12...
    // }

    // let safety = 0;
    // let i = 0;
    // while (i < 10) {
    //     console.log(i);
    //     // Your logic here

    //     safety++;
    //     if (safety > 1000) {
    //         console.error("Safety limit reached!");
    //         break;
    //     }
    // }


// 5: PRACTICAL EXAMPLES
    // Example 1: User Input Validation
    // let validInput = false;
    // let attempts = 0;
    // const MAX_ATTEMPTS = 3;

    // while (!validInput && attempts < MAX_ATTEMPTS) {
    //     let userInput = prompt("Enter a number between 1-10:");
    //     let num = parseInt(userInput);

    //     if (num >= 1 && num <= 10) {
    //         console.log("Valid input:", num);
    //         validInput = true;
    //     } else {
    //         attempts++;
    //         console.log(`Invalid! Attempts remaining: ${MAX_ATTEMPTS - attempts}`);
    //     }
    // }

    // if (!validInput) {
    //     console.log("Maximum attempts reached!");
    // }

    // Example 2: Finding First Match in Nested Data
    let products = [
        [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }],
        [{ name: "Keyboard", price: 50 }, { name: "Monitor", price: 300 }],
    ];

    let found = false;

    searchLoop: for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].length; j++) {
            if (products[i][j].price < 50) {
                console.log("Affordable product found:", products[i][j].name);
                found = true;
                break searchLoop;
            }
        }
    }
