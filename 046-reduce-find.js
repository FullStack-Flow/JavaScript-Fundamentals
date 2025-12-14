// SECTION 1: THE REDUCE METHOD
// array.reduce(callback, initialValue)

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(sum); // Output: 15

// const scores = [85, 92, 78, 95, 88];

// const maxScore = scores.reduce((max, current) => {
//   return current > max ? current : max;
// }, scores[0]);

// console.log(maxScore); // Output: 95


// const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const fruitCount = fruits.reduce((accumulator, fruit) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(fruitCount);
// Output: { apple: 3, banana: 2, orange: 1 }

// SECTION 2: THE FIND METHOD
// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

// const user = users.find(user => user.id === 2);

// console.log(user);
// Output: { id: 2, name: 'Bob', age: 30 }

// const youngUser = users.find(user => user.age < 20);

// console.log(youngUser); // Output: undefined

// SECTION 3: THE FINDINDEX METHOD
// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 }
// ];

// const index = products.findIndex(product => product.name === 'Phone');

// console.log(index); // Output: 1

// const expensiveIndex = products.findIndex(product => product.price > 2000);

// console.log(expensiveIndex); // Output: -1

// SECTION 4: THE SORT METHOD
// const fruits = ['banana', 'apple', 'cherry', 'date'];

// fruits.sort();

// console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'date']

// const numbers = [10, 5, 40, 25, 1000, 1];

// numbers.sort();

// console.log(numbers);
// Output: [1, 10, 1000, 25, 40, 5]

// numbers.sort((a, b) => a - b); // Ascending order

// console.log(numbers);
// Output: [1, 5, 10, 25, 40, 1000]

// const students = [
//   { name: 'Alice', grade: 85 },
//   { name: 'Bob', grade: 92 },
//   { name: 'Charlie', grade: 78 }
// ];

// students.sort((a, b) => b.grade - a.grade);

// console.log(students);
// Bob (92), Alice (85), Charlie (78)

// SECTION 5: THE SOME METHOD
// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNumber = numbers.some(num => num % 2 === 0);

// console.log(hasEvenNumber); // Output: true

// const hasAdult = users.some(user => user.age >= 18);

// console.log(hasAdult); // Output: true

// SECTION 6: THE EVERY METHOD
// const allEven = numbers.every(num => num % 2 === 0);

// console.log(allEven); // Output: true

// const numbers = [2, 4, 5, 8, 10];

// const allEven = numbers.every(num => num % 2 === 0);

// console.log(allEven); // Output: false

// const products = [
//   { name: 'Laptop', inStock: true },
//   { name: 'Phone', inStock: true },
//   { name: 'Tablet', inStock: false }
// ];

// const allInStock = products.every(product => product.inStock);

// console.log(allInStock); // Output: false

// COMPARISON: SOME VS EVERY
// const scores = [85, 92, 78, 95, 88];

// Some: At least one score above 90?
// const hasHighScore = scores.some(score => score > 90);
// console.log(hasHighScore); // true

// Every: Are ALL scores above 90?
// const allHighScores = scores.every(score => score > 90);
// console.log(allHighScores); // false

// PRACTICAL EXAMPLE
// const orders = [
//   { id: 1, items: ['pizza', 'drink'], total: 25, paid: true },
//   { id: 2, items: ['burger'], total: 15, paid: false },
//   { id: 3, items: ['pasta', 'salad'], total: 30, paid: true }
// ];

// // Find unpaid order
// const unpaidOrder = orders.find(order => !order.paid);
// console.log('Unpaid order:', unpaidOrder.id);

// // Total revenue using reduce
// const totalRevenue = orders.reduce((sum, order) => {
//   return order.paid ? sum + order.total : sum;
// }, 0);
// console.log('Total revenue:', totalRevenue);

// // Check if some orders are unpaid
// const hasUnpaid = orders.some(order => !order.paid);
// console.log('Has unpaid orders:', hasUnpaid);

// // Check if all orders are paid
// const allPaid = orders.every(order => order.paid);
// console.log('All orders paid:', allPaid);

// // Sort by total (highest first)
// const sortedOrders = [...orders].sort((a, b) => b.total - a.total);
// console.log('Highest order:', sortedOrders[0].total);
