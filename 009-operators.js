// 1: ARITHMETIC OPERATORS
// let a = 10;
// let b = 3;

// console.log(a + b);  // Addition: 13
// console.log(a - b);  // Subtraction: 7
// console.log(a * b);  // Multiplication: 30
// console.log(a / b);  // Division: 3.333...

// console.log(10 % 3);  // 1
// console.log(15 % 4);  // 3

// console.log(2 ** 3);   // 8 (2 to the power of 3)
// console.log(5 ** 2);   // 25 (5 squared)

// console.log(5 + 3 * 2);      // 11 (multiplication first)
// console.log((5 + 3) * 2);    // 16 (parentheses first)

// 2: ASSIGNMENT OPERATORS
// let num = 10;

// num += 5;   // Same as: num = num + 5
// console.log(num);  // 15

// num -= 3;   // Same as: num = num - 3
// console.log(num);  // 12

// num *= 2;   // Same as: num = num * 2
// console.log(num);  // 24

// num /= 4;   // Same as: num = num / 4
// console.log(num);  // 6

// num %= 4;   // Same as: num = num % 4
// console.log(num);  // 2

// let counter = 5;

// counter++;  // Same as: counter = counter + 1
// console.log(counter);  // 6

// counter--;  // Same as: counter = counter - 1
// console.log(counter);  // 5

// let a = 5;
// console.log(a++);  // Prints 5, THEN increments to 6
// console.log(a);    // 6

// let b = 5;
// console.log(++b);  // Increments to 6, THEN prints 6
// console.log(b);    // 6

// 3: COMPARISON OPERATORS
// let x = 10;
// let y = 5;

// console.log(x > y);   // Greater than: true
// console.log(x < y);   // Less than: false
// console.log(x >= 10); // Greater than or equal: true
// console.log(y <= 5);  // Less than or equal: true

// console.log(5 == "5");   // true (loose equality)
// console.log(5 === "5");  // false (strict equality)

// console.log(5 != "5");   // false (loose inequality)
// console.log(5 !== "5");  // true (strict inequality)

// console.log(0 == false);   // true (type coercion!)
// console.log(0 === false);  // false (different types)

// console.log("" == false);  // true (type coercion!)
// console.log("" === false); // false (different types)

// 4: REAL-WORLD EXAMPLE
// let price = 100;
// let discount = 20;
// let taxRate = 0.1;

// // Calculate discounted price
// let discountedPrice = price - discount;

// // Apply tax
// let finalPrice = discountedPrice + (discountedPrice * taxRate);

// console.log("Final Price:", finalPrice);  // 88

// // Check if eligible for free shipping
// let isFreeShipping = finalPrice >= 50;
// console.log("Free Shipping:", isFreeShipping);  // true

// 5: CONCLUSION