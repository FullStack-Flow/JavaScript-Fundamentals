// 1: WHAT ARE OBJECTS?
const person = {
  name: "John",
  age: 25,
  isStudent: true
};

// 2: WHY USE OBJECTS? 
const personName = "John";
const personAge = 25;
const personIsStudent = true;

// 3: OBJECT LITERAL - THE STANDARD WAY
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Silver"
};

console.log(car);

const book = {};
console.log(book); // Empty object

// 4: OBJECT CONSTRUCTOR - THE OLD SCHOOL WAY
const student = new Object();
student.name = "Sarah";
student.age = 22;
student.major = "Computer Science";

console.log(student);

const teacher = new Object({
  name: "Mike",
  subject: "Math"
});

// 5: LITERAL VS CONSTRUCTOR - WHICH ONE TO USE?
// Object Literal - Modern, Preferred
// const product1 = {
//   name: "Laptop",
//   price: 999
// };

// Object Constructor - Old School, Avoid
// const product2 = new Object();
// product2.name = "Laptop";
// product2.price = 999;

// 6: PRACTICAL EXAMPLES
    // Example 1: User Profile
    const user = {
        username: "john_doe",
        email: "john@example.com",
        age: 28,
        isActive: true,
        followers: 1250
    };

    console.log(user);

    // Example 2: Product in E-commerce
    const product = {
        id: 101,
        title: "Wireless Headphones",
        price: 79.99,
        inStock: true,
        rating: 4.5
    };

    console.log(product);

    // Example 3: Blog Post
    const post = {
        title: "Introduction to JavaScript Objects",
        author: "Jane Smith",
        date: "2025-10-19",
        views: 3420,
        published: true
    };

    console.log(post);

// 7: OBJECTS CAN HOLD ANYTHING
const company = {
  name: "Tech Solutions",
  founded: 2020,
  employees: 150,
  departments: ["Engineering", "Sales", "HR"],
  ceo: {
    name: "Alice Johnson",
    age: 45,
    experience: 20
  }
};

console.log(company);
console.log(company.departments); // Array inside object
console.log(company.ceo.name); // Nested object property
