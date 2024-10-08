function indexOf(array, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) return index;
  }

  return -1;
}

function lastIndexOf(array, value) {
  for (let index = array.length - 1; index > -1; index -= 1) {
    if (array[index] === value) return index;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1