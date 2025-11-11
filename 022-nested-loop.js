// 1: WHAT ARE NESTED LOOPS?
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// i =1; j=1... i=1, j=2... i=1, j=3

// 2: PRACTICAL EXAMPLE - MULTIPLICATION TABLE
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= 5; j++) {
//         row += (i * j) + '\t';
//     }
//     console.log(row);
// }

// 3: PATTERN PRINTING
// Stars Pattern
// for (let i = 1; i <= 5; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }

// Square pattern
// for (let i = 1; i <= 4; i++) {
//     let pattern = '';
//     for (let j = 1; j <= 4; j++) {
//         pattern += '* ';
//     }
//     console.log(pattern);
// }

// 4: NESTED LOOPS WITH ARRAYS
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`Element at [${i}][${j}]: ${matrix[i][j]}`);
//     }
// }

// 5: PERFORMANCE CONSIDERATIONS
// This runs 10,000 times!
// for (let i = 0; i < 100; i++) {
//     for (let j = 0; j < 100; j++) {
//         console.log(i + j);
//     }
// }

// 6: MIXING LOOP TYPES
// let i = 1;
// while (i <= 3) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
//     i++;
// }

// PRACTICE EXERCISE
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
for (let i = 5; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}
