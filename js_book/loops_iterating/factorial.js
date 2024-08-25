/*
problem:
  function called factorial
  accept single positive integer
  return resulting factorial
  use console.log to print, not the function
algorithm
  function accepting integer
    initialize result variable to 1
    iterate down to 1
      multiply result by starting number and reassign
    return result
*/

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter
  };

  return result;
};

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320