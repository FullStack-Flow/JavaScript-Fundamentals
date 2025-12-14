// 1: WHAT ARE INNER FUNCTIONS?
function outerFunction() {
  console.log("I'm the outer function");

  function innerFunction() {
    console.log("I'm the inner function");
  }

  innerFunction();
}

outerFunction();

innerFunction(); // Error: innerFunction is not defined

// 2: UNDERSTANDING SCOPE IN INNER FUNCTIONS
function outer() {
  const outerVariable = "I'm from the outer function";

  function inner() {
    const innerVariable = "I'm from the inner function";
    console.log(outerVariable); // Can access outer variable
    console.log(innerVariable); // Can access own variable
  }

  inner();
  // console.log(innerVariable); // Error: innerVariable is not defined
}

outer();

// 3: MULTIPLE LEVELS OF NESTING
function level1() {
  const var1 = "Level 1";

  function level2() {
    const var2 = "Level 2";

    function level3() {
      const var3 = "Level 3";
      console.log(var1); // Can access
      console.log(var2); // Can access
      console.log(var3); // Can access
    }

    level3();
  }

  level2();
}

level1();

// 4: PRACTICAL EXAMPLE - COUNTER WITH INNER FUNCTION
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }

  return increment;
}

const counter = createCounter();
counter(); // Current count: 1
counter(); // Current count: 2
counter(); // Current count: 3

// 5: WHY USE INNER FUNCTIONS?
// Here are a few reasons:
    // 1. Encapsulation: Inner functions help you hide implementation details. You can create helper functions that are only relevant to the outer function, keeping your global scope clean.
    // 2. Organization: They help you organize related functionality together in one place.
    // 3. Access to Parent Variables: Inner functions can access and manipulate variables from their parent scope, which is useful for creating specialized behaviors.

    function calculator(operation) {
        function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        if (operation === "add") {
            return add;
        } else if (operation === "subtract") {
            return subtract;
        }
    }

    const addFunc = calculator("add");
    console.log(addFunc(5, 3)); // 8

    const subtractFunc = calculator("subtract");
    console.log(subtractFunc(10, 4)); // 6


// 6: IMPORTANT POINTS TO REMEMBER