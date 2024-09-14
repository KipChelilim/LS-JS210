// 1
function oddElementsOf(arr) {
  let newArray = [];
  for (let index = 1; index < arr.length; index += 2) {
    newArray.push(arr[index]);
  }

  return newArray;
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));

// 2
function concatReversed(arr) {
  let reversedArray = Array.from(arr).reverse()
  return arr.concat(reversedArray);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(concatReversed(digits));

// 3
function sortDescending(arr) {
  return Array.from(arr).sort((a, b) => b - a);
}

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 4
function matrixSums(arr) {
  const getSum = (total, element) => total += element;
  return arr.map(subArray => subArray.reduce(getSum, 0));
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));

// 5
function uniqueElements(arr) {
  let uniqueElements = [];
  arr.forEach((element) => {
    if (uniqueElements.indexOf(element) < 0) uniqueElements.push(element);
  });

  return uniqueElements;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]