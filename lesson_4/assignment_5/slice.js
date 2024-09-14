function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function slice(arr, startIndex, endIndex) {
  let arrCopy = []
  if (startIndex < 0 || (typeof startIndex) !== 'number') return arrCopy;

  for (let index = startIndex; index < endIndex; index += 1) {
    push(arrCopy, arr[index]);
  }

  return arrCopy;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
console.log(slice([1, 2, 3, 4, 5], -5, 2));                      // [ 1, 2 ]