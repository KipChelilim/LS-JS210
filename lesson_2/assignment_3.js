// 1 & 2
// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }

// console.log(average(1, 2, 3));

// function sum(a, b, c) {
// return a + b + c;
// }

// 3 & 4
function sum(valuesArray) {
  total = 0
  for (let idx = 0; idx < valuesArray.length; idx += 1) {
    total += valuesArray[idx];
  }

  return total;
}

function average(valuesArray) {
  return sum(valuesArray) / valuesArray.length;
}

// console.log(average([1, 2, 3, 4, 4]));

// 5
let temperatures = [74, 83, 87, 85, 78];
console.log(average(temperatures));