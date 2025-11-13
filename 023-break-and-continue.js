// 1: THE BREAK STATEMENT
// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

// let numbers = [3, 7, 12, 45, 23, 67, 89, 34];
// let target = 45;
// let found = false;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) {
//         console.log("Found " + target + " at index " + i);
//         found = true;
//         break; // No need to continue searching
//     }
// }

// if (!found) {
//     console.log("Number not found");
// }


// 2: BREAK WITH NESTED LOOPS
// for (let i = 1; i <= 3; i++) {
//     console.log("Outer loop: " + i);

//     for (let j = 1; j <= 5; j++) {
//         if (j === 3) {
//             break; // Only breaks the inner loop
//         }
//         console.log("  Inner loop: " + j);
//     }
// }

// 3: THE CONTINUE STATEMENT 
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Skip even numbers
//     }
//     console.log(i);
// }

// let scores = [45, 67, 32, 89, 12, 56, 78, 90, 23];
// let passingGrade = 50;

// console.log("Students who passed:");
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < passingGrade) {
//         continue; // Skip failing grades
//     }
//     console.log("Score: " + scores[i]);
// }

// 4: CONTINUE WITH DIFFERENT LOOP TYPES
// let i = 0;
// while (i < 10) {
//     i++; // IMPORTANT: increment before continue!

//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let j = 0;
// do {
//     j++;

//     if (j === 5) {
//         continue;
//     }
//     console.log(j);
// } while (j < 10);


// 5: BREAK VS CONTINUE - COMPARISON 
console.log("Testing Break:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
// Output: 1, 2, 3, 4

console.log("\nTesting Continue:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}
// Output: 1, 2, 3, 4, 6, 7, 8, 9, 10 (skips 5)

// 6: PRACTICAL EXAMPLES
    // Example 1: Validating user input
    // let password = "abc123";
    // let hasNumber = false;

    // for (let i = 0; i < password.length; i++) {
    //     let char = password[i];

    //     if (char >= '0' && char <= '9') {
    //         hasNumber = true;
    //         break; // Found a number, no need to check further
    //     }
    // }

    // console.log("Password has number: " + hasNumber);

    // Example 2: Processing valid data only
    // let temperatures = [22, -999, 25, 28, -999, 30, 24];
    // let sum = 0;
    // let count = 0;

    // for (let i = 0; i < temperatures.length; i++) {
    //     if (temperatures[i] === -999) {
    //         continue; // Skip invalid readings
    //     }
    //     sum += temperatures[i];
    //     count++;
    // }

    // let average = sum / count;
    // console.log("Average temperature: " + average);

    // Example 3: Finding prime numbers
    for (let num = 2; num <= 20; num++) {
        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break; // Found a divisor, not prime
            }
        }

        if (isPrime) {
            console.log(num + " is prime");
        }
    }

// COMMON MISTAKES & BEST PRACTICES
    // Mistake 1: Using continue before increment in while loops
    // WRONG - Infinite loop!
    // let i = 0;
    // while (i < 10) {
    //     if (i % 2 === 0) {
    //         continue;
    //     }
    //     i++; // Never reached for even numbers
    // }

    // // CORRECT
    // let i = 0;
    // while (i < 10) {
    //     i++;
    //     if (i % 2 === 0) {
    //         continue;
    //     }
    // }

    // Mistake 2: Overusing break/continue
    // Instead of this:
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) continue;
        console.log(i);
    }

    // This might be clearer:
    for (let i = 0; i < 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
