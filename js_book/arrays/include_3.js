// Custom function
function include3(array) {
  length = array.filter(n => n ===3).length
  return length > 0 ? true : false;
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(include3(numbers1))
console.log(include3(numbers2))
console.log(include3(numbers3))

// Simple solution
console.log(numbers1.includes(3))
console.log(numbers2.includes(3))
console.log(numbers3.includes(3))