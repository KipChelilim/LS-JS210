let rlSync = require('readline-sync');
function getUserName (message) {
  return rlSync.question(message);
}

let firstName = getUserName('What is your first name? ');
let lastName = getUserName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);