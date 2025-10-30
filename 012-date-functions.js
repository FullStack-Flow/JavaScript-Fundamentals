// 1: UNDERSTANDING THE DATE OBJECT 
// let currentDate = new Date();
// console.log(currentDate);

// let birthday = new Date('1995-08-15');
// let specificDate = new Date(2025, 0, 1); // January 1, 2025


// 2: CREATING DATES - DIFFERENT METHODS
// let currentDate = new Date();
// let date1 = new Date('October 14, 2025');
// let date2 = new Date('2025-10-14');
// let date3 = new Date('2025-10-14T10:30:00');
// console.log(date1, date2, date3)

// // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// let date4 = new Date(2025, 9, 14); // October 14, 2025
// let date5 = new Date(2025, 9, 14, 10, 30, 0); // with time

// let date6 = new Date(0); // January 1, 1970
// let date7 = new Date(1697280000000); // specific timestamp

// 3: GETTING DATE COMPONENTS
let today = new Date();

// Getting date components
// console.log(today.getFullYear());    // 2025
// console.log(today.getMonth());       // 9 (October, remember 0-indexed!)
// console.log(today.getDate());        // 14 (day of month)
// console.log(today.getDay());         // 2 (Tuesday, Sunday is 0)

// // Getting time components
// console.log(today.getHours());       // Current hour (0-23)
// console.log(today.getMinutes());     // Current minutes
// console.log(today.getSeconds());     // Current seconds
// console.log(today.getMilliseconds()); // Milliseconds

// console.log(today.getTime()); // Milliseconds since January 1, 1970
// console.log(Date.now());      // Same thing, but simpler for current time


// 4: SETTING DATE COMPONENTS
// let myDate = new Date();

// myDate.setFullYear(2026);
// myDate.setMonth(11);          // December
// myDate.setDate(25);           // Christmas!
// myDate.setHours(12);
// myDate.setMinutes(30);
// myDate.setSeconds(0);

// console.log(myDate);

// myDate.setFullYear(2026, 11, 25); // Year, Month, Day


// 5: DATE FORMATTING 
// let date = new Date();

// console.log(date.toString());
// // "Tue Oct 14 2025 10:30:45 GMT+0600"

// console.log(date.toDateString());
// // "Tue Oct 14 2025"

// console.log(date.toTimeString());
// // "10:30:45 GMT+0600"

// console.log(date.toLocaleDateString());
// // "10/14/2025" (format depends on locale)

// console.log(date.toLocaleTimeString());
// // "10:30:45 AM"

// console.log(date.toLocaleString());
// // "10/14/2025, 10:30:45 AM"

// console.log(date.toISOString());
// "2025-10-14T04:30:45.000Z"
// let date = new Date();
// let options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric'
// };

// console.log(date.toLocaleDateString('en-US', options));
// // "Tuesday, October 14, 2025"

// console.log(date.toLocaleDateString('bn-BD', options));
// // "মঙ্গলবার, ১৪ অক্টোবর, ২০২৫"


// 6: PRACTICAL EXAMPLES 
    // Example 1: Age Calculator
    // function calculateAge(birthDate) {
    //     let today = new Date();
    //     let birth = new Date(birthDate);
    //     let age = today.getFullYear() - birth.getFullYear();
    //     let monthDiff = today.getMonth() - birth.getMonth();

    //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    //         age--;
    //     }

    //     return age;
    // }

    // console.log(calculateAge('1995-08-15')); // Age in years

    // Example 2: Days Until Event
    // function daysUntil(eventDate) {
    //     let today = new Date();
    //     let event = new Date(eventDate);
    //     let difference = event.getTime() - today.getTime();
    //     let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    //     return days;
    // }

    // console.log(daysUntil('2025-12-31')); // Days until New Year

    // Example 3: Greeting Based on Time
    // function getGreeting() {
    //     let hour = new Date().getHours();

    //     if (hour < 12) {
    //         return "Good Morning!";
    //     } else if (hour < 18) {
    //         return "Good Afternoon!";
    //     } else {
    //         return "Good Evening!";
    //     }
    // }

    // console.log(getGreeting());

// 7: COMMON PITFALLS 
    // Pitfall 1: Month Index
        // WRONG - This is November, not October!
        let wrong = new Date(2025, 10, 14);

        // CORRECT - October
        let correct = new Date(2025, 9, 14);

    // Pitfall 2: Date Strings
    console.log(new Date('2025-10-14')); // Might be UTC
    console.log(new Date('10/14/2025')); // Local time

    // Pitfall 3: Date Mutation
    let date1 = new Date();
    let date2 = date1; // Reference, not copy!
    date2.setFullYear(2026);
    console.log(date1.getFullYear()); // 2026! date1 changed too

// CONCLUSION