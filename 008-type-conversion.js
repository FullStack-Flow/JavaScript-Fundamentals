// 1: WHAT IS TYPE CONVERSION?
// 2: EXPLICIT CONVERSION
    // Converting to String
        // const num = 42;
        // const str = String(num);
        // const str = num.toString();
        // console.log(str); // "42"
        // console.log(typeof str) // string

    // Converting to Number
        // const str = "42";
        // const num = Number(str);
        // console.log(num); // 42
        // console.log(typeof num) // number

        // const invalid = Number('hello')
        // console.log(invalid) // NaN (Not a number)

        // const str = "123px";
        // const num = parseInt(str)
        // console.log(num);

        // const str = "5.99";
        // const num = parseFloat(str)
        // console.log(num); // 5.99

        // const str = "456";
        // const num = +str;
        // console.log(num); // 456
    // Converting to Boolean
        // - false
        // - 0
        // - ""
        // - null
        // - undefined
        // - NaN

        // console.log(Boolean(0)); // false
        // console.log(Boolean("")); // false
        // console.log(Boolean(null)); // false
        // console.log(Boolean(undefined)); // false
        // console.log(Boolean(NaN)); // false

        // console.log(Boolean(1)); // true
        // console.log(Boolean("hello")); // true
        // console.log(Boolean([])); // true (even empty array!)
        // console.log(Boolean({})); // true (even empty object!)

// 3: IMPLICIT CONVERSION
// String Coercion
// const result = "The answer is " + 50;
// console.log(result)

// Numeric Coercion
    // console.log("10" - 5); // 5
    // console.log("10" * "2"); // 20
    // console.log("20" / "4"); // 5

// Boolean Coercion
    // if ("hello") {
    //     console.log("This runs!"); // This runs because "hello" is truthy
    // }

    // if (0) {
    //     console.log("This won't run"); // Won't run because 0 is falsy
    // }


// 4: COMMON PITFALLS & BEST PRACTICES
    // console.log("5" + 3 + 2); // "532" - left to right, string concatenation
    // console.log(3 + 2 + "5"); // "55" - adds first, then concatenates
    // console.log("5" - "2"); // 3 - subtraction forces numeric conversion
    // console.log("5" * "2"); // 10
    // console.log("five" * 2); // NaN - can't convert "five" to number

    // let userInput = "123abc";
    // let number = Number(userInput); // NaN

    // if (isNaN(number)) {
    //     console.log("Invalid number!");
    // } else {
    //     console.log("Valid number:", number);
    // }

// 5: PRACTICAL EXAMPLE
    // User enters values as strings
    let input1 = "25";
    let input2 = "10";

    // Wrong way - implicit conversion leads to concatenation
    let wrong = input1 + input2;
    console.log(wrong); // "2510"

    // Right way - explicit conversion
    let num1 = Number(input1);
    let num2 = Number(input2);
    let correct = num1 + num2;
    console.log(correct); // 35

    // Even better - with validation
    function safeAdd(a, b) {
        let num1 = Number(a);
        let num2 = Number(b);

        if (isNaN(num1) || isNaN(num2)) {
            return "Invalid input!";
        }

        return num1 + num2;
    }

    console.log(safeAdd("25", "10")); // 35
    console.log(safeAdd("hello", "10")); // "Invalid input!"

// 6: CONCLUSION
// - Explicit conversion: uses String(), Number(), Boolean(), parseInt(), parseFloat()
// - Implicit conversion: happens automatically with operators and conditions
// - Always be explicit when possible to avoid bugs
// - Remember the falsy values: false, 0, "", null, undefined, NaN
// - Validate conversions, especially with user input