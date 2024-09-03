/*
problem:
  prompt user for 3 grades through separate prompts
    'Enter score ${n}: '
  calculate an average score and translate to letter grade
    90 or more = A
    70 and up B
    50 and up C
    all else F
  output message
    'Based on the average of your 3 scores your letter grade is "${grade}".'
  assume all valid positive integers as an input

algorithm
  create array to store grades
  iterate 3 times and ask for input
  calculate average of grades
  convert to letter grade
  output final grade

*/

const readlineSync = require('readline-sync');
scores = [];

for (scoreCount = 1; scoreCount <= 3; scoreCount += 1) {
  score = readlineSync.question(`Enter score ${scoreCount}: `)
  scores.push(parseInt(score, 10));
}

let average = scores.reduce((total, score) => total += score) / scores.length;

let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

msg = `Based on the average of your 3 scores your letter grade is "${grade}".`;
console.log(msg);