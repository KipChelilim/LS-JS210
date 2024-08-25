function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

// while (result <= 2) {
//   tries += 1;
//   result = randomNumberBetween(1, 6);
// }

// With do...while
do {
  tries += 1;
  result = randomNumberBetween(1, 6);
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');