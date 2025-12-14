// 1: WHAT IS FUNCTIONAL PROGRAMMING?
// 2: WHAT ARE PURE FUNCTIONS?
// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(5, 3)); // 8
// console.log(add(5, 3)); // 8
// console.log(add(5, 3)); // 8

// 3: EXAMPLES OF IMPURE FUNCTIONS
//     Example 1: Modifying external variables
        // let total = 0;

        // const addToTotal = (value) => {
        //     total += value; // Modifying external variable
        //     return total;
        // };

        // console.log(addToTotal(5)); // 5
        // console.log(addToTotal(5)); // 10 - different output for same input!

//     Example 2: Functions that depend on external state
        // let discount = 10;

        // const calculatePrice = (price) => {
        //     return price - discount; // Depends on external variable
        // };

        // console.log(calculatePrice(100)); // 90

        // discount = 20;
        // console.log(calculatePrice(100)); // 80 - different output!

//     Example 3: Functions with side effects
        // const logAndDouble = (num) => {
        //     console.log(num); // Side effect: logging to console
        //     return num * 2;
        // };

// 4: WHY ARE PURE FUNCTIONS IMPORTANT?
    // 1. Predictable and Easy to Test
    // 2. No Hidden Dependencies
    // 3. Easier to Reason About
    // 4. Concurrency and Parallelization
// 5: CONVERTING IMPURE TO PURE
    // Impure version:
        // let count = 0;

        // const increment = () => {
        //     count++;
        //     return count;
        // };

    // Pure version:
        // const increment = (count) => {
        //     return count + 1;
        // };

        // let count = 0;
        // count = increment(count);
        // console.log(count); // 1
        // count = increment(count);
        // console.log(count); // 2

// 6: PRACTICAL EXAMPLE WITH ARRAYS
    // Impure approach:
        // const numbers = [1, 2, 3, 4, 5];

        // const doubleArray = (arr) => {
        //     for (let i = 0; i < arr.length; i++) {
        //         arr[i] = arr[i] * 2; // Modifying original array
        //     }
        //     return arr;
        // };

        // doubleArray(numbers);
        // console.log(numbers); // [2, 4, 6, 8, 10] - original array changed!

    // Pure approach:
        // const numbers = [1, 2, 3, 4, 5];

        // const doubleArray = (arr) => {
        //     return arr.map(num => num * 2); // Returns new array
        // };

        // const doubled = doubleArray(numbers);
        // console.log(numbers); // [1, 2, 3, 4, 5] - original unchanged
        // console.log(doubled); // [2, 4, 6, 8, 10] - new array

// 7: WHEN TO USE IMPURE FUNCTIONS

// 8: QUICK RECAP