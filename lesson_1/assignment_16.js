// 1 - 2
{
  let x = '13';
  let y = 9;

  console.log(parseInt(x, 10) + y);
}

// 2 - Number, because operator is only defined for Number type so it
// implicitly coerces to number
{
  let x = '13';
  let y = 9;

  console.log(x * y); // produces a number
}

// 3
{
  let npa = 212;
  let nxx = 555;
  let num = 1212;

  console.log(String(npa) + String(nxx)+ String(num));
}

// 4 - see #3
// 5 - expected arr to include brackets
{
  let bool = true;
  let arr = [1, 2, 3];

  console.log(bool.toString())
  console.log(arr.toString())
}