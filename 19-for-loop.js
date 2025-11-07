// 1: WHAT IS A FOR LOOP?
// 2: FOR LOOP SYNTAX
// 3: HOW IT WORKS - STEP BY STEP
// 4: PRACTICAL EXAMPLES
    // Example 1: Print numbers 1 to 10
        // for (let i = 0; i < 10; i++) {
        //     console.log(i);
        // }
    // Example 2: Print even numbers from 0 to 20
    // let sum = 0;

    // for (let i = 0; i <= 20; i += 2) {
    //     sum += i;
    // }

    // console.log("Total:", sum) // 110

    // Example 3: Counting backwards
    // for (let i = 10; i >= 1; i--) {
    //     console.log(i);
    // }
    // console.log("Blast off!");

    // Example 4: Sum of numbers from 1 to 100
    // let sum = 0;
    // for (let i = 1; i <= 100; i++) {
    //     sum += i;
    // }
    // console.log("Sum:", sum); // 5050

// 5: LOOP VARIABLE NAMING & BEST PRACTICES
for (let studentIndex = 0; studentIndex < 30; studentIndex++) {
    console.log("Processing student", studentIndex);
}

// 6: COMMON MISTAKES
    // Mistake 1: Off-by-one errors
    // for (let i = 0; i <= 5; i++) // Runs 6 times, not 5!

    // Mistake 2: Modifying the loop variable incorrectly
    // for (let i = 0; i < 5; i++) {
    //     i = i + 2; // Don't do this! Unpredictable behavior
    // }

    // Mistake 3: Forgetting semicolons
    // for (let i = 0 i < 5 i++) // Syntax error!

// 7: WHEN TO USE FOR LOOPS