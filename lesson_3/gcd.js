/*
problem
  accept two positive integers
  identify largest number that evenly divides into both

algorithm
  identify smallest number
  iterate from smallest number down
    check if largest divided by smallest has no remainder
    if none, return number
    if remainder, keep going
euclidean algorithm
  find largest number
  compute remainder of largest / smallest
    if remainder = 0

*/

// function gcd(num1, num2) {
//   let minimum = Math.min(num1, num2);

//   for (divisor = minimum; divisor >= 1; divisor -= 1) {
//     if ( num1 %  divisor === 0 && num2 % divisor === 0) return divisor;
//   }
// }

// console.log(gcd(12, 4));   // 4
// console.log(gcd(15, 10));  // 5
// console.log(gcd(9, 2));    // 1

function gcdEuclidean(num1, num2) {
  let minimum = Math.min(num1, num2);
  let maximum = Math.max(num1, num2);
  let remainder = maximum % minimum;

  if (remainder === 0) {
    return minimum;
  } else {
    return gcdEuclidean(minimum, remainder);
  }
}

console.log(gcdEuclidean(12, 4));   // 4
console.log(gcdEuclidean(15, 10));  // 5
console.log(gcdEuclidean(9, 2));    // 1
console.log(gcdEuclidean(48, 18));    // 6