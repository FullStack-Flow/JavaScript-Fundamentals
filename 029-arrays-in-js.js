// 1: WHAT IS AN ARRAY?
const language1 = "JavaScript";
const language2 = "Python";
const language3 = "Java";

const languages = ["JavaScript", "Python", "Java"];


// 2: DECLARING ARRAYS
    // Method 1: Array Literal (Most Common)
    // const fruits = ["Apple", "Banana", "Orange"];

    // // Method 2: Array Constructor
    // const numbers = new Array(10, 20, 30);

    // const emptyArray = new Array(5);
    // console.log(emptyArray); // [empty × 5]
    // console.log(emptyArray.length); // 5


// 3: ARRAY ELEMENTS & INDEX
// const colors = ["Red", "Green", "Blue"];

// console.log(colors[0]); // "Red"
// console.log(colors[1]); // "Green"
// console.log(colors[2]); // "Blue"
// console.log(colors[5]); // undefined

// 4: ARRAY LENGTH 
// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits.length); // 3

// 5: ARRAYS CAN HOLD DIFFERENT TYPES
// const mixedArray = ["Hello", 42, true, null, undefined];
// console.log(mixedArray);

// 6: TRAVERSING ARRAYS
    // Example: Basic For Loop
    // const fruits = ["Apple", "Banana", "Orange", "Mango"];

    // for (let i = 0; i < fruits.length; i++) {
    //     console.log(fruits[i]);
    // }

// 7: TRAVERSING WITH WHILE LOOP
    // const numbers = [10, 20, 30, 40, 50];
    // let i = 0;

    // while (i < numbers.length) {
    //     console.log(numbers[i]);
    //     i++;
    // }

// 8: PRACTICAL EXAMPLE
// const prices = [29.99, 49.99, 19.99, 99.99];
// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total:", total); // Total: 199.96

// const numbers = [45, 12, 78, 33, 90, 23];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// console.log("Largest number:", largest); // 90

// IMPORTANT NOTES
    // 1. Empty Arrays
    // const tasks = [];
    // console.log(tasks.length); // 0

    // // 2. Accessing Last Element
    // const items = ["First", "Second", "Third"];
    // const lastItem = items[items.length - 1];
    // console.log(lastItem); // "Third"

    // // 3. const vs let for Arrays
    // const myArray = [1, 2, 3];
    // myArray[0] = 100; // This is fine!
    // console.log(myArray); // [100, 2, 3]

    // myArray = [4, 5, 6]; // ERROR!
