function evenOrOdd(integer) {
 if (Number.isInteger(integer)) {
   console.log(integer % 2 === 0 ? 'even' : 'odd');
 } else {
   console.log('Please enter an integer');
   return;
 }
}