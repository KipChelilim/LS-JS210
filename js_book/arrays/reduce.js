function sumOfSquares(array) {
  return array.reduce((result, n) => (result + n*n), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83