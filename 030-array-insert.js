// 1: INSERTING ELEMENTS
    // 1. Using push() - Add to the End
    // const fruits = ['apple', 'banana'];
    // fruits.push('orange');
    // console.log(fruits); // ['apple', 'banana', 'orange']

    // fruits.push('mango', 'grape');
    // console.log(fruits); // ['apple', 'banana', 'orange', 'mango', 'grape']

    // 2. Using unshift() - Add to the Beginning
    // const numbers = [2, 3, 4];
    // numbers.unshift(1);
    // console.log(numbers); // [1, 2, 3, 4]

    // numbers.unshift(-1, 0);
    // console.log(numbers); // [-1, 0, 1, 2, 3, 4]

    // 3. Using splice() - Insert at Specific Position
    // array.splice(startIndex, deleteCount, item1, item2, ...)
    // const colors = ['red', 'blue', 'green'];
    // colors.splice(1, 0, 'yellow', 'purple');
    // console.log(colors); // ['red', 'yellow', 'purple', 'blue', 'green']

// 2: REMOVING ELEMENTS
    // 1. Using pop() - Remove from the End
    // const animals = ['cat', 'dog', 'elephant'];
    // const removed = animals.pop();
    // console.log(removed); // 'elephant'
    // console.log(animals); // ['cat', 'dog']

    // 2. Using shift() - Remove from the Beginning
    // const weekdays = ['Monday', 'Tuesday', 'Wednesday'];
    // const firstDay = weekdays.shift();
    // console.log(firstDay); // 'Monday'
    // console.log(weekdays); // ['Tuesday', 'Wednesday']

    // 3. Using splice() - Remove from Specific Position
    // const cities = ['New York', 'Paris', 'Tokyo', 'London'];
    // cities.splice(1, 2); // Remove 2 elements starting at index 1
    // console.log(cities); // ['New York', 'London']

    // const months = ['Jan', 'Feb', 'Mar', 'Apr'];
    // const removed = months.splice(2, 1);
    // console.log(removed); // ['Mar']
    // console.log(months); // ['Jan', 'Feb', 'Apr']

    // 4. Using delete Operator
    // const items = ['a', 'b', 'c', 'd'];
    // delete items[1];
    // console.log(items); // ['a', empty, 'c', 'd']
    // console.log(items.length); // 4

// 3: REPLACING ELEMENTS
    // 1. Direct Assignment
    // const scores = [85, 90, 78, 92];
    // scores[2] = 88; // Replace the element at index 2
    // console.log(scores); // [85, 90, 88, 92]

    // 2. Using splice() - Replace Elements
    // const languages = ['Python', 'Java', 'C++', 'Ruby'];
    // languages.splice(1, 2, 'JavaScript', 'TypeScript');
    // console.log(languages); // ['Python', 'JavaScript', 'TypeScript', 'Ruby']

// PRACTICAL EXAMPLE
const cart = ['shirt', 'shoes', 'hat'];

// User adds a new item
cart.push('jacket');
console.log('After adding:', cart);

// User removes the first item
cart.shift();
console.log('After removing first:', cart);

// User replaces 'shoes' with 'sneakers'
const shoesIndex = cart.indexOf('shoes');
if (shoesIndex !== -1) {
  cart[shoesIndex] = 'sneakers';
}
console.log('After replacing:', cart);

// User wants to insert 'socks' at position 1
cart.splice(1, 0, 'socks');
console.log('Final cart:', cart);
