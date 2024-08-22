function getNumber (message) {
 let rlSync = require('readline-sync');
 number = rlSync.question(message);
 return Number(number);
}

function multiply(num1, num2) {
 return num1 * num2;
}

function displayResult (num1, num2) {
 console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

displayResult(firstNumber, secondNumber);