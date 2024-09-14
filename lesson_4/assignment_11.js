function missing(sortedArray) {
  let missingValues = [];

  for (let index = 1; index < sortedArray.length; index += 1) {
    let nextValue = sortedArray[index - 1] + 1
    while (nextValue < sortedArray[index]) {
      missingValues.push(nextValue);
      nextValue += 1;
    }
  }

  return missingValues;
};

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []