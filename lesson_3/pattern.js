function generatePattern(nStars) {
  line = ''
  for (let num = 1; num <= nStars; num += 1) {
    line += String(num);
    extraPadding = nStars > 9 ? (nStars - 9) : 0;
    console.log(line.padEnd(nStars + extraPadding, '*'))
  }
}


generatePattern(10);
