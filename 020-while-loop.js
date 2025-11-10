// 1: WHAT IS A WHILE LOOP?
// while (condition) {
//   // code to be executed
// }

// let count = 1;

// while (count <= 5) {
//   console.log("Count is: " + count);
//   count++;
// }

// Count is: 1
// Count is: 2
// Count is: 3
// Count is: 4
// Count is: 5

// 2: WHILE VS FOR LOOP
// let password = "";

// while (password !== "javascript123") {
//   password = prompt("Enter the password:");
// }

// console.log("Access granted!");

// 3: COMMON PATTERNS & EXAMPLES
    // Example 1: Reading through data until a condition is met
    // let numbers = [3, 7, 2, 9, 1, 5];
    // let index = 0;

    // while (index < numbers.length && numbers[index] !== 9) {
    //     console.log("Current number: " + numbers[index]);
    //     index++;
    // }

    // console.log("Found 9 at index: " + index);

    // Example 2: Countdown timer
    // let seconds = 5;

    // while (seconds > 0) {
    //     console.log("Time remaining: " + seconds + " seconds");
    //     seconds--;
    // }

    // console.log("Time's up!");

    // Example 3: Processing until a flag changes
    // let dataProcessed = false;
    // let attempts = 0;

    // while (!dataProcessed && attempts < 10) {
    //     console.log("Processing attempt: " + (attempts + 1));

    //     // Simulate some processing
    //     if (Math.random() > 0.7) {
    //         dataProcessed = true;
    //         console.log("Data processed successfully!");
    //     }

    //     attempts++;
    // }

    // if (!dataProcessed) {
    //     console.log("Failed to process data after 10 attempts");
    // }

// 4: COMMON PITFALLS
    // let i = 1;

    // while (i <= 5) {
    //     console.log(i);
    //     // Oops! Forgot to increment i
    // }

    // let x = 0;

    // while (x = 5) { // Should be x !== 5 or x < 5
    //     console.log(x);
    //     x++;
    // }


// 5: PRACTICAL EXERCISE
    let randomNumber = 0;
    let attempts = 0;

    while (randomNumber !== 7) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
    console.log("Attempt " + attempts + ": Generated " + randomNumber);
    }

    console.log("Finally got 7 after " + attempts + " attempts!");

// 6: CONCLUSION