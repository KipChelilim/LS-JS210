// 1
function lastInArray(arr) {
  return arr[arr.length - 1];
}

// console.log(lastInArray([1, 2, 3, 4, 5]));

// 2
function rollCall(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    console.log(arr[idx]);
  }
}

// rollCall(['John', 'Jack', 'James']);

// 3
function reverseArr(arr) {
  let reverseArr = []
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    reverseArr.push(arr[idx]);
  }

  return reverseArr
}

console.log(reverseArr(['John', 'Jack', 'James', 'Kip']));

// 4
function arrJoin(arr) {
  let joinedArrString = ''

  for (let idx = 0; idx < arr.length; idx += 1) {
    joinedArrString += arr[idx].toString();
  }

  return joinedArrString;
}

// console.log(arrJoin([1, 'a', 4]));