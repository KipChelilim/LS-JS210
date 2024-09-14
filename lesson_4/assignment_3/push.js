/*
  operation: append to arr
  mutate or copy: mutate
  return value: length of new array
*/

function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]