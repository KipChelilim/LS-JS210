function multiplesOfThreeAndFive() {
  for (let num = 3; num <= 100; num += 1) {
    multipleOfThree = num % 3 === 0;
    multipleOfFive = num % 5 === 0;

    if ( multipleOfThree && multipleOfFive) {
      console.log(`'${num}!'`);
    } else if ( multipleOfThree || multipleOfFive) {
      console.log(`'${num}'`);
    }
  }
}

multiplesOfThreeAndFive();