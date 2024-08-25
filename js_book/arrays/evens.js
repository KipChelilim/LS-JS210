let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

function evenNumber(num) {
  return num % 2 === 0
};

myArray.forEach(n => {
  if (evenNumber(n)) console.log(n);
});