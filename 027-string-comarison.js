// 1: STRING COMPARISON
    // Basic Comparison with Equality Operators:
    // const str1 = "hello";
    // const str2 = "hello";
    // const str3 = "Hello";

    // console.log(str1 === str2); // true
    // console.log(str1 === str3); // false

    // Comparing with Relational Operators:
    // console.log("apple" < "banana"); // true
    // console.log("zebra" > "apple");  // true

    // console.log("a" < "b"); // true
    // console.log("A" < "a"); // true - uppercase comes before lowercase
    // console.log("10" < "2"); // true - string comparison, not numeric!

    // // The localeCompare Method:
    // const word1 = "apple";
    // const word2 = "banana";

    // console.log(word1.localeCompare(word2)); // -1 (apple comes before banana)
    // console.log(word2.localeCompare(word1)); // 1 (banana comes after apple)
    // console.log(word1.localeCompare("apple")); // 0 (they're equal)

// 2: ESSENTIAL STRING METHODS
    // 1. charAt() and charCodeAt():
    // const text = "JavaScript";

    // console.log(text.charAt(0));     // "J"
    // console.log(text.charAt(4));     // "S"
    // console.log(text.charCodeAt(0)); // 74 (Unicode value of "J")

    // 2. indexOf() and lastIndexOf():
    // const sentence = "JavaScript is awesome, JavaScript is fun";

    // console.log(sentence.indexOf("JavaScript"));      // 0
    // console.log(sentence.lastIndexOf("JavaScript"));  // 23
    // console.log(sentence.indexOf("Python"));          // -1 (not found)

    // console.log(sentence.indexOf("is", 15)); // 37 (starts searching from index 15)
    
    // 3. includes(), startsWith(), endsWith():
    // const message = "Learn JavaScript Today";

    // console.log(message.includes("JavaScript")); // true
    // console.log(message.startsWith("Learn"));    // true
    // console.log(message.endsWith("Today"));      // true
    // console.log(message.includes("Python"));     // false

    // 4. slice(), substring(), substr():
    // const text = "JavaScript";

    // console.log(text.slice(0, 4));      // "Java"
    // console.log(text.slice(4));         // "Script"
    // console.log(text.slice(-6));        // "Script" (negative index)

    // console.log(text.substring(0, 4));  // "Java"
    // console.log(text.substring(4, 0));  // "Java" (swaps if start > end)

    // 5. toLowerCase() and toUpperCase():
    // const text = "JavaScript";

    // console.log(text.toLowerCase()); // "javascript"
    // console.log(text.toUpperCase()); // "JAVASCRIPT"

    // const input = "HELLO";
    // const expected = "hello";

    // console.log(input.toLowerCase() === expected); // true

    // 6. trim(), trimStart(), trimEnd():
    const messyText = "   Hello World   ";

    console.log(messyText.trim());      // "Hello World"
    console.log(messyText.trimStart()); // "Hello World   "
    console.log(messyText.trimEnd());   // "   Hello World"

    // 7. split():
    const csv = "apple,banana,orange";
    const fruits = csv.split(",");
    console.log(fruits); // ["apple", "banana", "orange"]

    const sentence = "Hello World";
    const words = sentence.split(" ");
    console.log(words); // ["Hello", "World"]

    const chars = "Hello".split("");
    console.log(chars); // ["H", "e", "l", "l", "o"]

    // 8. replace() and replaceAll():
    const text = "I love JavaScript. JavaScript is great!";

    console.log(text.replace("JavaScript", "JS"));
    // "I love JS. JavaScript is great!" (only first occurrence)

    console.log(text.replaceAll("JavaScript", "JS"));
    // "I love JS. JS is great!" (all occurrences)

    // 9. repeat():
    console.log("Ha".repeat(3)); // "HaHaHa"
    console.log("*".repeat(10)); // "**********"

    // 10. concat():
    const firstName = "John";
    const lastName = "Doe";

    console.log(firstName.concat(" ", lastName)); // "John Doe"

// 3: PRACTICAL EXAMPLES
    // Example 1: Validating Email Format
    function isValidEmail(email) {
        return email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") < email.lastIndexOf(".");
    }

    console.log(isValidEmail("user@example.com")); // true
    console.log(isValidEmail("invalid.email"));     // false

    // Example 2: Capitalizing Words
    function capitalizeWords(sentence) {
        const words = sentence.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }

    console.log(capitalizeWords("hello world")); // "Hello World"

    // Example 3: Censoring Profanity
    function censorText(text, badWord) {
        const censored = "*".repeat(badWord.length);
        return text.replaceAll(badWord, censored);
    }

    console.log(censorText("This is bad word bad", "bad"));
    // "This is *** word ***"

// 4: CONCLUSION