// What is the Math Object?
// 2: Math Properties - Constants
// console.log(Math.PI) // 3.141592653589793
// console.log(Math.E) // 2.718 
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.SQRT2)

// 3: Rounding Methods
// console.log(Math.round(4.7))
// console.log(Math.round(4.3))

// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.ceil(-4.1)); // -4 (up means toward positive)

// console.log(Math.floor(-4.1)); // -5 (down means toward negative)
// console.log(Math.floor(4.9)); // 4

// console.log(Math.trunc(4.9)); // 4
// console.log(Math.trunc(-4.1)); // -4

// 4: Math.abs() - Absolute Value
// console.log(Math.abs(-5)); // 5
// console.log(Math.abs(5)); // 5
// console.log(Math.abs(-3.7)); // 3.7

// 5: Math.pow() and Math.sqrt()
// console.log(Math.pow(2, 3)); // 8 (2 to the power of 3)
// console.log(Math.pow(5, 2)); // 25 (5 squared)

// console.log(Math.sqrt(16)); // 4
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(2)); // 1.4142135623730951

// console.log(Math.cbrt(27)); // 3

// 6: Math.min() and Math.max()
// console.log(Math.min(5, 10, 2, 8, 1)); // 1
// console.log(Math.max(5, 10, 2, 8, 1)); // 10

// let numbers = [5, 10, 2, 8, 1];
// console.log(Math.min(...numbers)); // 1
// console.log(Math.max(...numbers)); // 10

// 7: Math.random() - Generating Random Numbers
// console.log(Math.random())

// console.log(Math.floor(Math.random() * 10))
// console.log(Math.floor(Math.random() * 10) + 1)

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(5, 15)); // Random between 5 and 15

// 8: Trigonometric Methods (Brief Overview)
// console.log(Math.sin(Math.PI / 2)); // 1
// console.log(Math.cos(0)); // 1

// let degrees = 90;
// let radians = degrees * (Math.PI / 180);
// console.log(Math.sin(radians)); // 1


// 9: Practical Examples
    // Example 1: Calculating Circle Area
    let radius = 5;
    let area = Math.PI * Math.pow(radius, 2);
    console.log(area); // 78.53981633974483
    console.log(area.toFixed(2)); // 78.54 (rounded to 2 decimals)

    // Example 2: Dice Roll Simulator
    // function rollDice() {
    //     return Math.floor(Math.random() * 6) + 1;   
    // }

    // console.log(rollDice()); // Random number between 1 and 6

    // Example 3: Price Calculation with Rounding
    let price = 19.7654;
    let roundedPrice = Math.round(price * 100) / 100;
    console.log(roundedPrice); // 19.77

// 10: CONCLUSION