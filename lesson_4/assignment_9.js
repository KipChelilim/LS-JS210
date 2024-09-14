// 1
function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));

// 2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));

// 3
function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));
// console.log(nthElementOf(digits, 8));
// console.log(nthElementOf(digits, -1));

// 4 - Negative indices are coerced to strings and treated as properties.

// 5
function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// 6
function lastNOf(arr, count) {
  let start = Math.max(arr.length - count, 0)
  return arr.slice(start);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));

// 7 - already solved above
// 8
function endsOf(beginningArr, endingArr) {
  let newArray = [];
  newArray.push(beginningArr[0]);
  newArray.push(endingArr[endingArr.length - 1]);
  return newArray;
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));