/*
  operation: remove first element
    store current first element
    reassign remaining elements to index - 1
    reduce size of array to truncate
  mutate or copy: mutate
  return value: element removed
*/

function shift(arr) {
  if (arr.length === 0) return undefined;

  let firstElement = arr[0];
  for (let idx = 1; idx < arr.length; idx += 1) {
    arr[idx - 1] = arr[idx];
  }

  arr.length -= 1;
  return firstElement;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]