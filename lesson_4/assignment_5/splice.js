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

function splice(arr, begin, length) {
  let newArray = [];

  for (let index = begin; newArray.length < length; index += 1) {
    push(newArray, arr[index]);
  }

  let remainingValues = slice(arr, begin + length, arr.length);
  arr.length -= newArray.length + 1;

  for (let index = 0; index < remainingValues.length; index += 1) {
    push(arr, remainingValues[index]);
  }

  return newArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]