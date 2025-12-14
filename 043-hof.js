// 1: FIRST CLASS FUNCTIONS
// 1. Assigning a function to a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Sarah')); // Hello, Sarah!

// 2. Storing functions in data structures
const operations = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; },
  multiply: function(a, b) { return a * b; }
};

console.log(operations.add(5, 3)); // 8
console.log(operations.multiply(4, 2)); // 8

// 3. Passing functions as arguments
function executeOperation(operation, a, b) {
  return operation(a, b);
}

const sum = function(x, y) {
  return x + y;
};

console.log(executeOperation(sum, 10, 5)); // 15

// 4. Returning functions from other functions
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 2: HIGHER ORDER FUNCTIONS
    // 1. Takes one or more funtions as arguments
    // 2. Returns a funtions as it's result

    // Example 1: Function that accepts another function
    function repeatOperation(n, operation) {
        for (let i = 0; i < n; i++) {
            operation(i);
        }
    }

    repeatOperation(3, function(index) {
        console.log(`Iteration ${index}`);
    });
    // Iteration 0
    // Iteration 1
    // Iteration 2


    // Example 2: Function that returns a function
    function createGreeting(greeting) {
        return function(name) {
            return `${greeting}, ${name}!`;
        };
    }

    const sayHello = createGreeting('Hello');
    const sayHi = createGreeting('Hi');

    console.log(sayHello('Alex')); // Hello, Alex!
    console.log(sayHi('Jordan')); // Hi, Jordan!

// 3: PRACTICAL EXAMPLES
// Custom filter function
function filterArray(arr, testFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (testFunction(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = filterArray(numbers, function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

const greaterThanFive = filterArray(numbers, function(num) {
  return num > 5;
});

console.log(greaterThanFive); // [6, 7, 8, 9, 10]


// Custom map function
function mapArray(arr, transformFunction) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(transformFunction(arr[i]));
  }

  return result;
}

const prices = [10, 20, 30, 40];

const pricesWithTax = mapArray(prices, function(price) {
  return price * 1.15;
});

console.log(pricesWithTax); // [11.5, 23, 34.5, 46]

// 4: FUNCTION COMPOSITION
// Simple transformation functions
function addTax(price) {
  return price * 1.15;
}

function applyDiscount(price) {
  return price * 0.9;
}

function formatCurrency(price) {
  return `$${price.toFixed(2)}`;
}

// Higher order function that composes other functions
function composePricing(price, ...operations) {
  let result = price;

  for (let i = 0; i < operations.length; i++) {
    result = operations[i](result);
  }

  return result;
}

const finalPrice = composePricing(100, applyDiscount, addTax, formatCurrency);
console.log(finalPrice); // $103.50

// 5: REAL-WORLD SCENARIOS
// Event handler setup (common in web development)
function createClickHandler(message) {
  return function() {
    console.log(message);
  };
}

// Imagine these are button handlers
const button1Handler = createClickHandler('Button 1 was clicked!');
const button2Handler = createClickHandler('Button 2 was clicked!');

button1Handler(); // Button 1 was clicked!
button2Handler(); // Button 2 was clicked!

// Validation pipeline
function createValidator(rules) {
  return function(value) {
    for (let i = 0; i < rules.length; i++) {
      if (!rules[i](value)) {
        return false;
      }
    }
    return true;
  };
}

const isNotEmpty = value => value.length > 0;
const isLongEnough = value => value.length >= 8;
const hasNumber = value => /\d/.test(value);

const validatePassword = createValidator([isNotEmpty, isLongEnough, hasNumber]);

console.log(validatePassword('pass')); // false
console.log(validatePassword('password123')); // true

// 6: KEY BENEFITS
    // 1. Code Reusability
    // 2. Abstraction
    // 3. Flexibility
    // 4. Functional Programming

    