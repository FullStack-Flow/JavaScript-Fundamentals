// 1: WHAT IS A STATEMENT?
// let age = 25;
// console.log("Hello World");

// 2: EXPRESSIONS VS STATEMENTS
// 5 + 3 = 8
// age > 18

// age

// 5 + 3

// const age = 25;

// console.log(age > 18); // Valid - age > 18 is an expression
// console.log(let x = 5); // Error - let x = 5 is a statement, not an expression

// 3: BLOCK STATEMENTS
// {
//     let name = "John";
//     let age = 30;
//     console.log(name);
//     console.log(age);
// }

// if (age > 18) {
//     console.log("You are an adult");
//     console.log("You can vote");
// }

// {
//     let message = "Hello";
//     console.log(message); // Works fine
// }

// console.log(message); // Error - message is not defined

// 4: SEMICOLONS IN JAVASCRIPT
// let name = "John"
// let age = 25
// console.log(name)
// console.log(age)

// let result = 10 + 5
// (2 + 3).toString()

// let result = 10 + 5(2 + 3).toString()

// 5: PRACTICAL EXAMPLES
//     Example 1: Multiple statements
        // let firstName = "Sarah";
        // let lastName = "Johnson";
        // let fullName = firstName + " " + lastName;
        // console.log(fullName);
//     Example 2: Block with an if statement
        // let score = 85;

        // if (score >= 80) {
        //     let grade = "A";
        //     console.log("Excellent work!");
        //     console.log("Your grade is: " + grade);
        // }
//     Example 3: Expression as a statement
        5 + 5; // This is valid but useless
//     Example 4: Semicolon importance
        let x = 10;
        let y = 20;
        let z = x + y;
        console.log(z); // 30