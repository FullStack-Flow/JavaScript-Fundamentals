// WHAT ARE COMMENTS?
// SINGLE-LINE COMMENTS 
let price = 100;
let tax = 0.15; // 15% sales tax

let total = price + (price * tax);
console.log(total); // Output: 115

let username = "John";
// console.log(username); // Not running this right now

// MULTI-LINE COMMENTS

/* This is a
   multi-line comment
   that spans multiple lines */

/*
  Function: calculateDiscount
  Purpose: Calculates the final price after applying a discount
  Parameters:
    - price: original price of the item
    - discount: discount percentage (0-100)
  Returns: final price after discount
*/
function calculateDiscount(price, discount) {
  return price - (price * discount / 100);
}

/*
let oldCode = "something";
let moreOldCode = "testing";
console.log("This entire block is commented out");
*/

/* This is the start
   /* This won't work */
//    This is the end */

// WHEN TO USE COMMENTS
// Add 5 to x
// let x = x + 5;

// Adding buffer space to prevent edge collision
// let x = x + 5;

// TODO: Optimize this loop for large datasets
// WARNING: This will fail if user is not authenticated
// HACK: Temporary fix until API v2 is released

// BEST PRACTICES

// Step 1: Get user input
// Step 2: Validate the input
// Step 3: Process the data
// Step 4: Return the result


