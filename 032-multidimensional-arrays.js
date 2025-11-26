// 1: WHAT ARE MULTIDIMENSIONAL ARRAYS?
// 2: CREATING A TWO-DIMENSIONAL ARRAY
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(matrix);

// 3: ACCESSING ELEMENTS IN A MULTIDIMENSIONAL ARRAY
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[0][2]); // 3
console.log(matrix[1][1]); // 5
console.log(matrix[2][0]); // 7

// 4: MODIFYING ELEMENTS
matrix[0][1] = 20;
console.log(matrix[0]); // [1, 20, 3]

matrix[2][2] = 100;
console.log(matrix[2]); // [7, 8, 100]

// 5: TRAVERSING A MULTIDIMENSIONAL ARRAY
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// 6: PRACTICAL EXAMPLE: STORING STUDENT GRADES
const grades = [
  [85, 90, 78],  // Student 1
  [92, 88, 84],  // Student 2
  [76, 81, 89]   // Student 3
];

console.log(`Student 1, Subject 2: ${grades[0][1]}`); // 90
console.log(`Student 3, Subject 3: ${grades[2][2]}`); // 89

for (let i = 0; i < grades.length; i++) {
  let sum = 0;
  for (let j = 0; j < grades[i].length; j++) {
    sum += grades[i][j];
  }
  const average = sum / grades[i].length;
  console.log(`Student ${i + 1} Average: ${average}`);
}

// 7: IRREGULAR MULTIDIMENSIONAL ARRAYS
const irregular = [
  [1, 2],
  [3, 4, 5, 6],
  [7]
];

console.log(irregular[0].length); // 2
console.log(irregular[1].length); // 4
console.log(irregular[2].length); // 1

// 8: COMMON USE CASES