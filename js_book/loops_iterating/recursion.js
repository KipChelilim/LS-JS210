/*
problem:
  function called factorial
  accept single positive integer
  return resulting factorial
  use console.log to print, not the function
algorithm
  function accepting integer
  break condition: when n <= 2
    return n
  else
    return n * factorial(n-1)
*/

function factorial(number) {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  };
};

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320