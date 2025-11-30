// 1: RECAP
// const person = {
//   name: 'John',
//   age: 25,
//   city: 'New York'
// };

// 2: ACCESSING PROPERTIES - DOT NOTATION
// console.log(person.name); // John
// console.log(person.age); // 25
// console.log(person.city); // New York

// 3: ACCESSING PROPERTIES - BRACKET NOTATION
// console.log(person['name']); // John
// console.log(person['age']); // 25
// console.log(person['city']); // New York

// 4: WHEN TO USE BRACKET NOTATION
// const person = {
//   'first name': 'John',
//   'last-name': 'Doe',
//   'age@info': 25
// };

// Dot notation won't work here
// console.log(person.first name); // Syntax Error

// Bracket notation works perfectly
// console.log(person['first name']); // John
// console.log(person['last-name']); // Doe

// const anotherPerson = {
//   name: 'John',
//   age: 25,
//   city: 'New York'
// };

// const propertyName = 'age';
// console.log(anotherPerson[propertyName]); // 25

// This is incredibly useful in dynamic situations

// const getUserInfo = (obj, key) => {
//   return obj[key];
// };

// console.log(getUserInfo(anotherPerson, 'name')); // John
// console.log(getUserInfo(anotherPerson, 'city')); // New York

// 5: SETTING PROPERTIES 
// const person = {
//   name: 'John',
//   age: 25,
//   city: 'New York'
// };

// // Using dot notation
// person.age = 26;
// console.log(person.age); // 26

// // Using bracket notation
// person['city'] = 'Los Angeles';
// console.log(person.city); // Los Angeles

// const person = {
//   name: 'John',
//   age: 25
// };

// // Adding with dot notation
// person.city = 'New York';
// person.country = 'USA';

// console.log(person);
// { name: 'John', age: 25, city: 'New York', country: 'USA' }

// 6: DYNAMIC PROPERTY SETTING
// const person = {
//   name: 'John',
//   age: 25
// };

// const propertyName = 'profession';
// const propertyValue = 'Developer';

// person[propertyName] = propertyValue;

// console.log(person);
// { name: 'John', age: 25, profession: 'Developer' }

// 7: ACCESSING NON-EXISTENT PROPERTIES
// const person = {
//   name: 'John',
//   age: 25
// };

// console.log(person.city); // undefined
// console.log(person['country']); // undefined

// if (person.city !== undefined) {
//   console.log('City exists:', person.city);
// } else {
//   console.log('City property does not exist');
// }

// 8: PRACTICAL EXAMPLE
const product = {
  id: 101,
  name: 'Laptop',
  price: 999,
  brand: 'TechPro'
};

// Accessing properties
console.log('Product:', product.name);
console.log('Price: $' + product.price);

// Updating properties
product.price = 899;
console.log('New Price: $' + product.price);

// Adding new properties
product.inStock = true;
product.quantity = 50;

// Dynamic access
const displayProperty = (obj, key) => {
  if (obj[key] !== undefined) {
    console.log(`${key}: ${obj[key]}`);
  } else {
    console.log(`${key} not found`);
  }
};

displayProperty(product, 'brand'); // brand: TechPro
displayProperty(product, 'color'); // color not found

// 9: NESTED OBJECT ACCESS
const user = {
  name: 'Sarah',
  age: 28,
  address: {
    street: '123 Main St',
    city: 'Boston',
    zipCode: '02101'
  }
};

// Accessing nested properties
console.log(user.address.city); // Boston
console.log(user['address']['zipCode']); // 02101

// You can mix notation styles
console.log(user.address['street']); // 123 Main St
