// WHAT IS A CLOSURE?
// const outerFunction = () => {
//   const outerVariable = "I'm from outer scope";

//   const innerFunction = () => {
//     console.log(outerVariable);
//   };

//   return innerFunction;
// };

// const myClosure = outerFunction();
// myClosure(); // Output: I'm from outer scope

// WHY DO CLOSURES EXIST?

// PRACTICAL EXAMPLE: COUNTER
// const createCounter = () => {
//   let count = 0;

//   return {
//     increment: () => {
//       count++;
//       console.log(count);
//     },
//     decrement: () => {
//       count--;
//       console.log(count);
//     },
//     getCount: () => {
//       return count;
//     }
//   };
// };

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// console.log(counter.getCount()); // 1

// const counter2 = createCounter();
// counter2.increment(); // 1
// console.log(counter.getCount()); // Still 1 - separate closure!

// CLOSURE IN LOOPS - THE CLASSIC PROBLEM
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}

// SOLUTION 1: USING LET
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
// Output: 1, 2, 3 (with delays)

// SOLUTION 2: IIFE (OLD SCHOOL WAY)
for (var i = 1; i <= 3; i++) {
  ((currentI) => {
    setTimeout(() => {
      console.log(currentI);
    }, currentI * 1000);
  })(i);
}
// Output: 1, 2, 3 (with delays)

// SOLUTION 3: HELPER FUNCTION
const delayLog = (value, time) => {
  setTimeout(() => {
    console.log(value);
  }, time);
};

for (var i = 1; i <= 3; i++) {
  delayLog(i, i * 1000);
}
// Output: 1, 2, 3 (with delays)

// ANOTHER LOOP EXAMPLE
const createMultipliers = () => {
  const multipliers = [];

  for (let i = 1; i <= 3; i++) {
    multipliers.push((num) => {
      return num * i;
    });
  }

  return multipliers;
};

const funcs = createMultipliers();
console.log(funcs[0](10)); // 10
console.log(funcs[1](10)); // 20
console.log(funcs[2](10)); // 30

// Key Points:
