// Part 1: Removing Object Properties
    // The Delete Operator
    // const person = {
    //     name: 'Sarah',
    //     age: 28,
    //     city: 'New York',
    //     profession: 'Designer'
    // };

    // console.log(person);
    // { name: 'Sarah', age: 28, city: 'New York', profession: 'Designer' }

    // Now let's remove the 'city' property
    // delete person.city;

    // console.log(person);
    // { name: 'Sarah', age: 28, profession: 'Designer' }

    // const book = {
    //     title: 'JavaScript Basics',
    //     author: 'John Doe',
    //     pages: 350
    // };

    // Setting to undefined
    // book.pages = undefined;
    // console.log(book);
    
    // { title: 'JavaScript Basics', author: 'John Doe', pages: undefined }
    // console.log('pages' in book); // true - property still exists

    // Actually deleting
    // delete book.author;
    // console.log(book);
    // { title: 'JavaScript Basics', pages: undefined }
    // console.log('author' in book); // false - property is gone

    // The Delete Operator Returns a Boolean
    // const car = {
    //     brand: 'Toyota',
    //     model: 'Camry'
    // };

    // const result = delete car.model;
    // console.log(result); // true
    // console.log(car); // { brand: 'Toyota' }

// Part 2: What Can't Be Deleted?
// 1. You cannot delete variables
// let myVariable = 10;
// delete myVariable; // This won't work
// console.log(myVariable); // 10 - still exists

// 2. You cannot delete properties inherited from prototypes
// const obj = {};
// delete obj.toString; // Won't delete because it's inherited
// console.log(obj.toString); // Still exists

// 3. You CAN delete properties from objects
// const user = { username: 'john123' };
// delete user.username; // This works
// console.log(user); // {}

// Part 3: Comparing Object Properties
    // Comparing Object Properties Manually
        // Primitive values
    //     const num1 = 5;
    //     const num2 = 5;
    //     console.log(num1 === num2); // true

    //     const str1 = 'hello';
    //     const str2 = 'hello';
    //     console.log(str1 === str2); // true

    //     // Objects - this is different!
    //     const obj1 = { name: 'Alice' };
    //     const obj2 = { name: 'Alice' };
    //     console.log(obj1 === obj2); // false

    // const person1 = { name: 'Bob' };
    // const person2 = person1; // person2 references the same object

    // console.log(person1 === person2); // true - same reference


    const laptop1 = {
        brand: 'Dell',
        ram: 16,
        processor: 'Intel i7'
    };

    const laptop2 = {
        brand: 'Dell',
        ram: 16,
        processor: 'Intel i7'
    };

    // Manual comparison
    const areEqual =
    laptop1.brand === laptop2.brand &&
    laptop1.ram === laptop2.ram &&
    laptop1.processor === laptop2.processor;

    console.log(areEqual); // true

// Part 4: Comparing Objects with a Function
function compareObjects(obj1, obj2) {
  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If they have different number of properties, they're not equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all properties and values match
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Testing our function
const product1 = { id: 1, name: 'Phone', price: 599 };
const product2 = { id: 1, name: 'Phone', price: 599 };
const product3 = { id: 2, name: 'Laptop', price: 1299 };

console.log(compareObjects(product1, product2)); // true
console.log(compareObjects(product1, product3)); // false

// Part 5: Checking If a Property Exists
const smartphone = {
  brand: 'Samsung',
  model: 'Galaxy S21',
  price: 799
};

// Method 1: Using 'in' operator
console.log('brand' in smartphone); // true
console.log('color' in smartphone); // false

// Method 2: Using hasOwnProperty()
console.log(smartphone.hasOwnProperty('model')); // true
console.log(smartphone.hasOwnProperty('storage')); // false

// Method 3: Checking if undefined
console.log(smartphone.price !== undefined); // true
console.log(smartphone.warranty !== undefined); // false

// Practical Example
const userProfile = {
  username: 'coder123',
  email: 'coder@example.com',
  age: 25,
  tempPassword: 'abc123',
  isVerified: false
};

// Remove temporary data after user verification
if (userProfile.isVerified) {
  delete userProfile.tempPassword;
  delete userProfile.isVerified;
}

// Check if sensitive data exists before accessing
if ('tempPassword' in userProfile) {
  console.log('Warning: Temporary password still present!');
} else {
  console.log('Profile is clean.');
}

console.log(userProfile);
