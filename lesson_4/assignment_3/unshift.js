/*
  operation: insert value at beginning of the array
  mutate or copy: mutate
  return value: length of array
*/

function unshift(arr, newValue) {
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    arr[idx + 1] = arr[idx];
  }

  arr[0] = newValue;
  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]