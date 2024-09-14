/*
  operation: delete last element
  mutate or copy: mutate
  return value: element deleted

  missed the control statement for empty arrays
*/

function pop(arr) {
  if (arr.length === 0) return undefined; // missed this

  let lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]