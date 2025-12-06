// 1: WHY ITERATE OVER OBJECTS?
// 2: THE FOR...IN LOOP
// const person = {
//   name: "Sarah",
//   age: 28,
//   city: "New York",
//   profession: "Developer"
// };

// for (const key in person) {
//   console.log(key);
// }

// for (const key in person) {
//   console.log(key + ": " + person[key]);
// }

// 3: OBJECT.KEYS() METHOD
// const keys = Object.keys(person);
// console.log(keys); // ["name", 'age', 'city']

// keys.forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });

// 4: OBJECT.VALUES() METHOD
// const values = Object.values(person);
// console.log(values); // ["Sarah", 28, "New York"]

// const scores = {
//   math: 85,
//   science: 92,
//   english: 78
// };

// const allScores = Object.values(scores);
// const average = allScores.reduce((sum, score) => sum + score, 0) / allScores.length;
// console.log("Average score:", average);

// 5: OBJECT.ENTRIES() METHOD
// const person = {
//   name: "Sarah",
//   age: 28,
//   city: "New York"
// };

// const entries = Object.entries(person);
// console.log(entries);
// Output: [
//   ["name", "Sarah"],
//   ["age", 28],
//   ["city", "New York"]
// ]

// Object.entries(person).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

// 6: ITERATING OVER METHODS
// const calculator = {
//   brand: "Casio",
//   model: "FX-991",
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract: function(a, b) {
//     return a - b;
//   }
// };

// for (const key in calculator) {
//   if (typeof calculator[key] === "function") {
//     console.log(`${key} is a method`);
//   } else {
//     console.log(`${key} is a property with value: ${calculator[key]}`);
//   }
// }

// 7: PRACTICAL EXAMPLE
// const cart = {
//   laptop: 1200,
//   mouse: 25,
//   keyboard: 75,
//   monitor: 300
// };

// let total = 0;

// for (const item in cart) {
//   total += cart[item];
// }

// console.log("Total: $" + total);

const total = Object.values(cart).reduce((sum, price) => sum + price, 0);
console.log("Total: $" + total);


// 8: COMMON PITFALLS
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ": " + person[key]);
  }
}
