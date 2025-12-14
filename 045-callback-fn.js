// SECTION 1: WHAT ARE CALLBACK FUNCTIONS?
// const greet = function(name) {
//   console.log("Hello, " + name);
// };

// const processUser = function(callback) {
//   const userName = "Sarah";
//   callback(userName);
// };

// processUser(greet); // Hello, Sarah

// SECTION 2: THE forEach METHOD
// array.forEach(function(element, index, array) {
//   // Your code here
// });

// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// Output:
// 10
// 20
// 30
// 40
// 50

// const fruits = ["Apple", "Banana", "Cherry"];

// fruits.forEach(function(fruit, index) {
//   console.log(index + ": " + fruit);
// });

// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// SECTION 3: THE map METHOD
// const newArray = array.map(function(element, index, array) {
//   return /* transformed element */;
// });

// const AArray = fruits.map((fruit) => fruit.name)

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubled); // [2, 4, 6, 8, 10]
// console.log(numbers); // [1, 2, 3, 4, 5] - original array unchanged


// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ];

// const names = users.map((user) => user.name);

// console.log(names); // ["Alice", "Bob", "Charlie"]

// SECTION 4: THE filter METHOD
// const newArray = array.filter(function(element, index, array) {
//   return /* condition */;
// });

// const numbers = [1, 2, 3, 4, 5, 6];

// const filtered = numbers.filter(function(number) {
//   return number > 3;
// });

// console.log(filtered); // [4, 5, 6]


// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Diana", age: 28 }
// ];

// const adults = users.filter(function(user) {
//   return user.age >= 30;
// });

// console.log(adults);
// [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// SECTION 5: CHAINING METHODS
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Diana", age: 28 }
// ];

// const adultNames = users
//   .filter(function(user) {
//     return user.age >= 30;
//   })
//   .map(function(user) {
//     return user.name;
//   });

// console.log(adultNames); // ["Bob", "Charlie"]

// SECTION 6: forEach vs map vs filter

// SECTION 7: PRACTICAL EXAMPLE
// const products = [
//   { name: "Laptop", price: 1000, inStock: true },
//   { name: "Phone", price: 500, inStock: false },
//   { name: "Tablet", price: 300, inStock: true },
//   { name: "Monitor", price: 200, inStock: true }
// ];

// const discountedProducts = products
//   .filter(function(product) {
//     return product.inStock;
//   })
//   .map(function(product) {
//     return {
//       name: product.name,
//       price: product.price * 0.9
//     };
//   });

// discountedProducts.forEach(function(product) {
//   console.log(product.name + ": $" + product.price);
// });

// Output:
// Laptop: $900
// Tablet: $270
// Monitor: $180
