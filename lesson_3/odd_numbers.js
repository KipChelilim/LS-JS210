function logOddNumbers(num) {
  for (let int = 1; int <= num; int += 1) {
    if (int % 2 !== 0) console.log(int);
  }
}

logOddNumbers(19);