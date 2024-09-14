function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function concat(arr1, arr2) {
  let newArr = [];
  for (let index = 0; index < arr1.length; index += 1) {
    push(newArr, arr1[index]);
  }

  for (let index = 0; index < arr2.length; index += 1) {
    push(newArr, arr2[index]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]