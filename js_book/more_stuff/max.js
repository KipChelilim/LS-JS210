let list1 = [1, 6, 3, 2]
let list2 = [-1, -6, -3, -2]
let list3 = [2, 2]

function maxArray(arr) {
  return arr.reduce((a, b) => Math.max(a, b), -Infinity);
}

console.log(maxArray(list1))
console.log(maxArray(list2))
console.log(maxArray(list3))