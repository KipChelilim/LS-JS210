/*
problem:
  write program that takes console user input
    use `password` as the password
  if user inputs the correct password log
    'You have successfully logged in.`
  if they enter the incorrect password:
    reprompt with no message
  if user enters password wrong 3 times terminate the program
    log message saying 'You have been denied access.'
  to prompt for password, use 'What is the password: '
algorithm
  set password equal to 'password'
  wrap in function
    loop 3 times
      prompt for user input
      if input equals password
        log sign in message
        break
      if input does not equal do nothing
    log message saying denied access
*/

let password = 'password';
const readlineSync = require('readline-sync');

function guessPassword() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    guess = readlineSync.question('What is the password: ');

    if (guess === password) {
      console.log('You have successfully logged in.');
      return;
    }
  }

  console.log('You have been denied access.');
}

guessPassword();