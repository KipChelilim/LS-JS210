/*
problem
  accept an argument
  log the multiples of that argument between 1 & 100 inclusive
  only log the odd numbers
  log values in descending order
  assume integer is between 0 and 100
algorithm
  return if number is even
  divide 100 by argument
  truncate result as start
  if its even, decrease by 1
  for number down to 1, log num x integer
*/

function logMultiples(number) {
  if (number % 2 === 0) return;

  max = Math.floor(100 / number);
  if (max % 2 === 0) max -= 1;

  for (let multiplier = max; multiplier > 0; multiplier -= 2) {
    console.log(number * multiplier);
  }
}

logMultiples(17);
logMultiples(21);