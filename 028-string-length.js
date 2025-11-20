// 1: STRING LENGTH
    const message = "Hello World";
    console.log(message.length); // 11

    const password = "abc123";
    if (password.length < 8) {
        console.log("Password too short!");
    }

    const empty = "";
    console.log(empty.length); // 0

    const text = "Hello\nWorld";
    console.log(text.length); // 11 (not 12)

// 2: ACCESSING CHARACTERS
    const word = "JavaScript";
    console.log(word[0]); // "J"
    console.log(word[4]); // "S"
    console.log(word[9]); // "t"

    console.log(word[100]); // undefined

    console.log(word.charCodeAt(0)); // 74 (Unicode for "J")

// 3: CASE MANIPULATION
    // const message = "Hello World";
    // console.log(message.toUpperCase()); // "HELLO WORLD"
    // console.log(message.toLowerCase()); // "hello world"

    // case-insensitive
    const userInput = "JAVASCRIPT";
    if (userInput.toLowerCase() === "javascript") {
        console.log("Match!");
    }

    const original = "JavaScript";
    const upper = original.toUpperCase();
    console.log(original); // "JavaScript" (unchanged)
    console.log(upper); // "JAVASCRIPT"

// 4: TRIMMING WHITESPACE
    const messy = "   Hello World   ";
    console.log(messy.trim()); // "Hello World"
    console.log(messy.trimStart()); // "Hello World   "
    console.log(messy.trimEnd()); // "   Hello World"

    let username = "  john_doe  ";
    username = username.trim();
    console.log(username); // "john_doe"

// 5: REPLACING TEXT
    // const sentence = "I love JavaScript";
    // const newSentence = sentence.replace("JavaScript", "coding");
    // console.log(newSentence); // "I love coding"

    // const text = "cat cat cat";
    // console.log(text.replace("cat", "dog")); // "dog cat cat"

    // console.log(text.replaceAll("cat", "dog")); // "dog dog dog"

    // console.log(text.replace(/cat/g, "dog")); // "dog dog dog"

    // const numbers = "1 2 3";
    // const doubled = numbers.replace(/\d/g, function(match) {
    //     return match * 2;
    // });
    // console.log(doubled); // "2 4 6"

// 6: PADDING STRINGS
    const number = "5";
    console.log(number.padStart(3, "0")); // "005"
    console.log(number.padEnd(3, "0")); // "500"

    const day = "7";
    const month = "3";
    console.log(`${day.padStart(2, "0")}/${month.padStart(2, "0")}/2025`);  // "07/03/2025"

    console.log("Hi".padStart(5)); // "   Hi"

// 7: REPEATING STRINGS
    console.log("Ha".repeat(3)); // "HaHaHa"
    console.log("-".repeat(20)); // "--------------------"

    const stars = "*".repeat(5);
    console.log(stars); // "*****"

    const title = "Chapter 1";
    console.log(title);
    console.log("=".repeat(title.length));
    // // Chapter 1
    // // =========

// 8: PRACTICAL EXAMPLES
    // Example 1: Username Validation
    // function validateUsername(username) {
    //     username = username.trim();

    //     if (username.length < 3) {
    //         return "Username too short";
    //     }

    //     if (username.length > 20) {
    //         return "Username too long";
    //     }

    //     return "Valid username";
    // }

    // console.log(validateUsername("  john  ")); // "Valid username"
    // console.log(validateUsername("ab")); // "Username too short"

    // Example 2: Masking Credit Card
    function maskCard(cardNumber) {
        const visibleDigits = 4;
        const maskedLength = cardNumber.length - visibleDigits;
        const masked = "*".repeat(maskedLength);
        const lastFour = cardNumber[cardNumber.length - 4] +
                        cardNumber[cardNumber.length - 3] +
                        cardNumber[cardNumber.length - 2] +
                        cardNumber[cardNumber.length - 1];
        return masked + lastFour;
    }

    console.log(maskCard("1234567890123456")); // "************3456"

    // Example 3: Format Phone Number
    function formatPhone(phone) {
        const cleaned = phone.replaceAll("-", "").replaceAll(" ", "");

        if (cleaned.length !== 10) {
            return "Invalid phone number";
        }

        const area = cleaned[0] + cleaned[1] + cleaned[2];
        const prefix = cleaned[3] + cleaned[4] + cleaned[5];
        const line = cleaned[6] + cleaned[7] + cleaned[8] + cleaned[9];

        return `(${area}) ${prefix}-${line}`;
    }

    console.log(formatPhone("1234567890")); // "(123) 456-7890"