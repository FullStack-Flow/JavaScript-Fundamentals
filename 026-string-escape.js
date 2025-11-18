// 1: WHAT IS ESCAPE NOTATION?
// const sentence = "He said "Hello" to me"; // ERROR!

// const sentence = "He said \"Hello\" to me";
// console.log(sentence); // He said "Hello" to me

// 2: COMMON ESCAPE SEQUENCE
// Escaping double quotes
// let quote1 = "She said \"JavaScript is awesome!\"";

// // Escaping single quotes
// let quote2 = 'It\'s a beautiful day';

// console.log(quote1);
// console.log(quote2);

// let sentence = 'He said "Hello" to me';

// let path = "C:\\Users\\Documents\\file.txt";
// console.log(path); // C:\Users\Documents\file.txt

// let multiLine = "First line\nSecond line\nThird line";
// console.log(multiLine);

// First line
// Second line
// Third line

// let tabbed = "Name:\tJohn\nAge:\t30";
// console.log(tabbed);

// 3: UNICODE ESCAPE SEQUENCES
// let heart = "I \u2764 JavaScript";
// console.log(heart); // I ❤ JavaScript

// let copyright = "\u00A9 2024";
// console.log(copyright); // © 2024

// // For emojis, use extended syntax
// let rocket = "\u{1F680}";
// console.log(rocket); // 🚀

// 4: PRACTICAL EXAMPLES
    // File paths:
    // let windowsPath = "C:\\Program Files\\MyApp\\config.json";
    // console.log("File location:\n\t" + windowsPath);

    // // Formatted output:
    // let receipt = "Item\t\tPrice\n" +
    //           "Apple\t\t$1.50\n" +
    //           "Banana\t\t$0.75";
    // console.log(receipt);

    // // Dialogue:
    // let dialogue = "\"What's your name?\" he asked.\n\"I'm Sarah,\" she replied.";
    // console.log(dialogue);

// 5: TEMPLATE LITERALS ALTERNATIVE
// With escape sequences
// let old = "Line 1\nLine 2\nLine 3";

// // With template literals
// let modern = `Line 1
// Line 2
// Line 3`;

// COMMON MISTAKES
    // Mistake 1: Forgetting the backslash
    // let wrong = "He said "Hi""; // ERROR
    // let right = "He said \"Hi\""; // Correct

    // // Mistake 2: Too many backslashes
    // let oops = "C:\\\\Users"; // C:\\Users (double backslash)
    // let correct = "C:\\Users";  // C:\Users (single backslash)