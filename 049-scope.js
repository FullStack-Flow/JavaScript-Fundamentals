// SECTION 1: WHAT IS SCOPE?
    // 1. Global Scope
    const globalVar = "I'm global";

    function showGlobal() {
    console.log(globalVar); // Accessible
    }

    showGlobal(); // "I'm global"
    console.log(globalVar); // "I'm global"

    // 2. Function Scope (Loca Scope)
    function myFunction() {
        const functionVar = "I'm inside a function";
        console.log(functionVar); // Accessible here
    }

    myFunction(); // "I'm inside a function"
    console.log(functionVar); // ReferenceError: functionVar is not defined

    // 3. Block Scope
    if (true) {
        const blockVar = "I'm in a block";
        console.log(blockVar); // Accessible here
    }

    console.log(blockVar); // ReferenceError: blockVar is not defined

// SECTION 2: NESTED SCOPE
const outerVar = "Outer";

function outer() {
  const middleVar = "Middle";

  function inner() {
    const innerVar = "Inner";
    console.log(outerVar);  // Accessible
    console.log(middleVar); // Accessible
    console.log(innerVar);  // Accessible
  }

  inner();
  console.log(innerVar); // ReferenceError: innerVar is not defined
}

outer();

function processData() {
  const data = "Important data";

  if (true) {
    const tempResult = "Processing...";

    for (let i = 0; i < 3; i++) {
      const loopVar = i * 2;
      console.log(data);      // Accessible
      console.log(tempResult); // Accessible
      console.log(loopVar);    // Accessible
    }

    console.log(loopVar); // ReferenceError
  }

  console.log(tempResult); // ReferenceError
}

processData();


// SECTION 3: LEXICAL SCOPE (also called static scope)
const name = "Alice";

function greet() {
  console.log(`Hello, ${name}`);
}

function anotherFunction() {
  const name = "Bob";
  greet(); // What will this print?
}

anotherFunction(); // "Hello, Alice"

// lexed or determined at write-time

function outer() {
  const outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

const myFunction = outer();
myFunction(); // "I'm from outer"

// SECTION 4: THE SCOPE CHAIN
const level1 = "Global";

function firstLevel() {
  const level2 = "First";

  function secondLevel() {
    const level3 = "Second";

    function thirdLevel() {
      console.log(level3); // Found in parent scope
      console.log(level2); // Found in grandparent scope
      console.log(level1); // Found in global scope
    }

    thirdLevel();
  }

  secondLevel();
}

firstLevel();
// "Second"
// "First"
// "Global"

// SECTION 5: VARIABLE SHADOWING
const message = "Global message";

function outer() {
  const message = "Outer message";

  function inner() {
    const message = "Inner message";
    console.log(message); // Which one?
  }

  inner();
  console.log(message);
}

outer();
// "Inner message"
// "Outer message"
console.log(message); // "Global message"

// SECTION 6: SCOPE CHAIN IN ACTION
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined

// API configuration Example:
function createAPI(baseURL) {
  const apiKey = "secret-key-12345";

  function get(endpoint) {
    console.log(`GET ${baseURL}${endpoint} with key: ${apiKey}`);
  }

  function post(endpoint, data) {
    console.log(`POST ${baseURL}${endpoint} with key: ${apiKey}`);
    console.log("Data:", data);
  }

  return { get, post };
}

const api = createAPI("https://api.example.com");
api.get("/users"); // GET https://api.example.com/users with key: secret-key-12345
api.post("/users", { name: "John" });


// SECTION 7: SCOPE AND PERFORMANCE
function level1() {
  const a = 1;

  function level2() {
    const b = 2;

    function level3() {
      const c = 3;

      function level4() {
        // Accessing 'a' here requires traversing the entire chain
        console.log(a + b + c);
      }

      level4();
    }

    level3();
  }

  level2();
}

// SECTION 8: COMMON PITFALLS
// Problem
// const functions = [];

// for (var i = 0; i < 3; i++) {
//   functions.push(function() {
//     console.log(i);
//   });
// }

// functions[0](); // 3 (not 0!)
// functions[1](); // 3 (not 1!)
// functions[2](); // 3 (not 2!)

// Solution
// const functions = [];

// for (let i = 0; i < 3; i++) {
//   functions.push(function() {
//     console.log(i);
//   });
// }

// functions[0](); // 0
// functions[1](); // 1
// functions[2](); // 2


// SECTION 9: SCOPE CHAIN VISUALIZATION
    // - Global scope is the ground floor—everyone can access it
    // - Each function creates a new floor
    // - You can look down from your floor to see lower floors (outer scopes)
    // - But you can't look up to see higher floors (inner scopes)
    // - When you need something, you check your floor first, then go down floor by floor until you find it
// Ground Floor (Global)
const ground = "Ground floor";

function firstFloor() {
  const first = "First floor";

  function secondFloor() {
    const second = "Second floor";

    // From the second floor, I can see:
    console.log(second); // My floor
    console.log(first);  // One floor down
    console.log(ground); // Ground floor
  }

  secondFloor();
  // From the first floor, I cannot see the second floor
  console.log(second); // ReferenceError
}

firstFloor();
