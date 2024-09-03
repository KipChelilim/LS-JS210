/*
problem
  iterate from 1 to 100
  log fizz for multiples of 3
  log buzz for multiples of 5
  log fizzbuzz for multiples of both
  otherwise log number
*/

function fizzbuzz() {
  for (let num = 1; num <= 100; num += 1) {
    multipleOfThree = num % 3 === 0;
    multipleOfFive = num % 5 === 0;

    if (multipleOfThree && multipleOfFive) {
      console.log('FizzBuzz');
    } else if (multipleOfThree) {
      console.log('Fizz');
    } else if (multipleOfFive) {
      console.log('Buzz');
    } else {
      console.log(num)
    }
  }
}

fizzbuzz();