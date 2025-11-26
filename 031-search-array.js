// 1: WHY SEARCH IN ARRAYS?
// 2: THE INCLUDES METHOD
// const fruits = ['apple', 'banana', 'orange', 'mango'];

// const hasBanana = fruits.includes('banana');
// console.log(hasBanana); // true

// const hasGrapes = fruits.includes('grapes');
// console.log(hasGrapes); // false

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.includes(3)); // true
// console.log(numbers.includes('3')); // false - different type

// const colors = ['red', 'blue', 'green', 'blue', 'yellow'];

// console.log(colors.includes('blue')); // true
// console.log(colors.includes('blue', 3)); // true - starts from index 3
// console.log(colors.includes('blue', 4)); // false - starts from index 4

// 3: THE INDEXOF METHOD
// const animals = ['cat', 'dog', 'rabbit', 'dog', 'fish'];

// const dogIndex = animals.indexOf('dog');
// console.log(dogIndex); // 1

// const birdIndex = animals.indexOf('bird');
// console.log(birdIndex); // -1 (not found)

// const animals = ['cat', 'dog', 'rabbit', 'dog', 'fish'];

// const firstDog = animals.indexOf('dog');
// console.log(firstDog); // 1

// const secondDog = animals.indexOf('dog', 2);
// console.log(secondDog); // 3 - starts searching from index 2

// const users = ['alice', 'bob', 'charlie'];

// if (users.indexOf('david') === -1) {
//   console.log('User not found');
// }

// 4: THE LASTINDEXOF METHOD
// const numbers = [5, 2, 8, 2, 9, 2];

// const lastTwo = numbers.lastIndexOf(2);
// console.log(lastTwo); // 5 (last occurrence of 2)

// const firstTwo = numbers.indexOf(2);
// console.log(firstTwo); // 1 (first occurrence of 2)

const numbers = [5, 2, 8, 2, 9, 2];

const lastTwoBeforeIndex4 = numbers.lastIndexOf(2, 4);
console.log(lastTwoBeforeIndex4); // 3

// 5: SEARCHING WITH FIND
// const products = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 300 }
// ];

// const expensiveProduct = products.find(product => product.price > 600);
// console.log(expensiveProduct); // { id: 1, name: 'Laptop', price: 1000 }

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

// const user = users.find(user => user.name === 'Bob');
// console.log(user); // { id: 2, name: 'Bob', age: 30 }

// const youngUser = users.find(user => user.age < 20);
// console.log(youngUser); // undefined (no match found)

// 6: SEARCHING WITH FINDINDEX
// const products = [
//   { id: 1, name: 'Laptop', price: 1000 },
//   { id: 2, name: 'Phone', price: 500 },
//   { id: 3, name: 'Tablet', price: 300 }
// ];

// const index = products.findIndex(product => product.price < 400);
// console.log(index); // 2 (index of Tablet)

// const notFoundIndex = products.findIndex(product => product.price > 2000);
// console.log(notFoundIndex); // -1

// 7: PRACTICAL EXAMPLE
const cart = [
  { id: 1, name: 'Laptop', price: 1000, quantity: 1 },
  { id: 2, name: 'Mouse', price: 25, quantity: 2 },
  { id: 3, name: 'Keyboard', price: 75, quantity: 1 }
];

// Check if a product exists in cart
const hasLaptop = cart.find(item => item.name === 'Laptop');
if (hasLaptop) {
  console.log('Laptop is in your cart');
}

// Find expensive items
const expensiveItems = cart.filter(item => item.price > 50);
console.log('Expensive items:', expensiveItems);

// Find the index of an item to update it
const mouseIndex = cart.findIndex(item => item.name === 'Mouse');
if (mouseIndex !== -1) {
  cart[mouseIndex].quantity = 3;
  console.log('Updated mouse quantity');
}

console.log(cart);

// 8: WHICH METHOD TO USE?