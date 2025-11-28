// 1: THE REVERSE METHOD
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [5, 4, 3, 2, 1]

// const fruits = ['apple', 'banana', 'orange'];
// const reversed = fruits.reverse();

// console.log(fruits); // ['orange', 'banana', 'apple']
// console.log(reversed); // ['orange', 'banana', 'apple']
// console.log(fruits === reversed); // true - same reference!

// const original = [1, 2, 3, 4, 5];
// const reversedCopy = [...original].reverse();

// console.log(original); // [1, 2, 3, 4, 5] - unchanged
// console.log(reversedCopy); // [5, 4, 3, 2, 1]

// 2: THE CONCAT METHOD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = arr1.concat(arr2);

// console.log(combined); // [1, 2, 3, 4, 5, 6]
// console.log(arr1); // [1, 2, 3] - original unchanged

// const letters = ['a', 'b'];
// const numbers = [1, 2];
// const symbols = ['!', '@'];

// const all = letters.concat(numbers, symbols);
// console.log(all); // ['a', 'b', 1, 2, '!', '@']

// const arr = [1, 2, 3];
// const result = arr.concat(4, 5, [6, 7]);
// console.log(result); // [1, 2, 3, 4, 5, 6, 7]

// 3: THE SLICE METHOD
// const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

// const someColors = colors.slice(1, 4);
// console.log(someColors); // ['blue', 'green', 'yellow']
// console.log(colors); // original array unchanged

// const lastThree = colors.slice(2);
// console.log(lastThree); // ['green', 'yellow', 'purple']

// const numbers = [1, 2, 3, 4, 5];
// const lastTwo = numbers.slice(-2);
// console.log(lastTwo); // [4, 5]

// const middlePart = numbers.slice(1, -1);
// console.log(middlePart); // [2, 3, 4]

// 4: THE SPLICE METHOD
// const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// // Remove 2 elements starting from index 1
// const removed = fruits.splice(1, 2);

// console.log(removed); // ['banana', 'orange'] - removed items
// console.log(fruits); // ['apple', 'mango', 'grape'] - modified original

// const numbers = [1, 2, 5, 6];

// // At index 2, remove 0 elements, add 3 and 4
// numbers.splice(2, 0, 3, 4);

// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// const animals = ['cat', 'dog', 'elephant', 'lion'];

// // At index 1, remove 2 elements, add new ones
// animals.splice(1, 2, 'rabbit', 'hamster', 'parrot');

// console.log(animals); // ['cat', 'rabbit', 'hamster', 'parrot', 'lion']

// 5: THE JOIN METHOD
// const words = ['Hello', 'World', 'from', 'JavaScript'];
// const sentence = words.join(' ');

// console.log(sentence); // "Hello World from JavaScript"
// console.log(typeof sentence); // "string"

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.join('-')); // "1-2-3-4-5"
// console.log(numbers.join('')); // "12345"
// console.log(numbers.join(', ')); // "1, 2, 3, 4, 5"

// const items = ['a', 'b', 'c'];
// console.log(items.join()); // "a,b,c"

// 6: THE SPLIT METHOD (BONUS STRING METHOD)
// const sentence = "JavaScript is awesome";
// const words = sentence.split(' ');

// console.log(words); // ['JavaScript', 'is', 'awesome']

// const csv = "apple,banana,orange,mango";
// const fruits = csv.split(',');

// console.log(fruits); // ['apple', 'banana', 'orange', 'mango']

// const text = "Hello";
// const chars = text.split('');

// console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 7: THE INDEXOF AND LASTINDEXOF METHODS
// const numbers = [1, 2, 3, 4, 2, 5, 2];

// console.log(numbers.indexOf(2)); // 1 - first occurrence
// console.log(numbers.lastIndexOf(2)); // 6 - last occurrence
// console.log(numbers.indexOf(10)); // -1 - not found

// const letters = ['a', 'b', 'c', 'b', 'd'];

// console.log(letters.indexOf('b')); // 1
// console.log(letters.indexOf('b', 2)); // 3 - starts searching from index 2

// 8: THE INCLUDES METHOD
// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('mango')); // false

// // Old way
// if (fruits.indexOf('banana') !== -1) {
//   console.log('Found!');
// }

// // Modern way
// if (fruits.includes('banana')) {
//   console.log('Found!');
// }

// 9: PRACTICAL EXAMPLE
const cart = ['shirt', 'shoes', 'hat'];

// Add a new item
cart.splice(1, 0, 'jacket');
console.log(cart); // ['shirt', 'jacket', 'shoes', 'hat']

// Remove the first item
cart.splice(0, 1);
console.log(cart); // ['jacket', 'shoes', 'hat']

// Check if an item exists
if (cart.includes('shoes')) {
  console.log('Shoes are in the cart!');
}

// Create a summary
const summary = cart.join(', ');
console.log(`Your cart: ${summary}`); // "Your cart: jacket, shoes, hat"

// Reverse the display order
const reversed = [...cart].reverse();
console.log(reversed); // ['hat', 'shoes', 'jacket']

// 10: CONCLUSION