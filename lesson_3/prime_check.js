/*
problem
  accept a non-negative integer
  check if its prime and return true or false
algorithm
  if its even return false
    16 -> false
    17 -> keep executing
    65 -> keep executing
  if its 2 return true
  get square root of number
    -17 -> 4.12310...
    -65 -> 8.06225....
  truncate it and decrement to odd integer as potentailFactor
    4.12310 -> 4 -> 3
    8.06225 -> 8 -> 7
  iterate from potentialFactor down to 2, by 2
    check if potentialFactor is a factor
      -> 17 / 3 -> no
      -> 65 / 7 -> no
         65 / 4 -> yes
    return false if potential factor is a factor
       17 -> never runs
       65 -> return false
  return true
*/

function isPrime(integer) {
  if (integer === 2) return true;
  if (integer % 2 === 0 || integer === 0 || integer === 1) return false;

  maxPotentialFactor = Math.floor(Math.sqrt(integer));
  if (maxPotentialFactor % 2 === 0) maxPotentialFactor -= 1;

  for (let factor = maxPotentialFactor; factor > 2; factor -= 2) {
    if (integer % factor === 0) return false;
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false