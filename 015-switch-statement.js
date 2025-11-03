// WHAT IS A SWITCH STATEMENT?
// SWITCH SYNTAX
// switch (expression) {
//   case value1:
//     // code to execute
//     break;
//   case value2:
//     // code to execute
//     break;
//   default:
//     // code to execute if no case matches
// }

    // EXAMPLE
    // let day = "Monday";

    // switch (day) {
    // case "Monday":
    //     console.log("Start of the work week. Let's be productive!");
    //     break;
    // case "Tuesday":
    //     console.log("Keep the momentum going!");
    //     break;
    // case "Wednesday":
    //     console.log("Midweek checkpoint. You're halfway there!");
    //     break;
    // case "Thursday":
    //     console.log("Almost Friday. Stay focused!");
    //     break;
    // case "Friday":
    //     console.log("Last push before the weekend!");
    //     break;
    // case "Saturday":
    // case "Sunday":
    //     console.log("Enjoy your weekend!");
    //     break;
    // default:
    //     console.log("That's not a valid day.");
    // }

// THE IMPORTANCE OF BREAK
// let score = "B";

// switch (score) {
//   case "A":
//     console.log("Excellent!");
//   case "B":
//     console.log("Good job!");
//   case "C":
//     console.log("You passed!");
//   case "D":
//     console.log("You need improvement.");
//   default:
//     console.log("Invalid grade.");
// }

// SWITCH VS IF-ELSE
    // With if-else:
    // let fruit = "apple";

    // if (fruit === "apple") {
    //     console.log("Apples are $2 per pound");
    // } else if (fruit === "banana") {
    //     console.log("Bananas are $1 per pound");
    // } else if (fruit === "orange") {
    //     console.log("Oranges are $3 per pound");
    // } else if (fruit === "grape") {
    //     console.log("Grapes are $4 per pound");
    // } else {
    //     console.log("Fruit not available");
    // }

    // With switch:
    // let fruit = "apple";

    // switch (fruit) {
    // case "apple":
    //     console.log("Apples are $2 per pound");
    //     break;
    // case "banana":
    //     console.log("Bananas are $1 per pound");
    //     break;
    // case "orange":
    //     console.log("Oranges are $3 per pound");
    //     break;
    // case "grape":
    //     console.log("Grapes are $4 per pound");
    //     break;
    // default:
    //     console.log("Fruit not available");
    // }

// PRACTICAL EXAMPLE
// let operation = "+";
// let num1 = 10;
// let num2 = 5;
// let result;

// switch (operation) {
//   case "+":
//     result = num1 + num2;
//     console.log(`${num1} + ${num2} = ${result}`);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(`${num1} - ${num2} = ${result}`);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(`${num1} * ${num2} = ${result}`);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       result = num1 / num2;
//       console.log(`${num1} / ${num2} = ${result}`);
//     } else {
//       console.log("Cannot divide by zero!");
//     }
//     break;
//   default:
//     console.log("Invalid operation. Use +, -, *, or /");
// }

// SWITCH WITH EXPRESSIONS
// let age = 25;

// switch (true) {
//   case age < 13:
//     console.log("You're a child");
//     break;
//   case age < 20:
//     console.log("You're a teenager");
//     break;
//   case age < 60:
//     console.log("You're an adult");
//     break;
//   default:
//     console.log("You're a senior");
// }

// COMMON MISTAKES
    // Mistake 1: Forgetting break
    // Mistake 2: Using non-strict comparison
        let x = "1";
        switch (x) {
            case 1:  // won't match because "1" !== 1
            console.log("Matched");
        }

    // Mistake 3: Forgetting default