//https://edabit.com/challenge/EY4nTmp6SbAmtJz5C

randomArr = [-1, -2, -3, -4, -5, -6];

let sumOddAndEven = (arr) => {
  let result = [];
  let sumEven = randomArr
    .filter((num) => num % 2 === 0)
    .reduce((currentSum, currentValue) => currentSum + currentValue);
  result.push(sumEven);

  let sumOdd = randomArr
    .filter((num) => num % 2 !== 0)
    .reduce((currentSum, currentValue) => currentSum + currentValue);
  result.push(sumOdd);

  return result;
};

console.log(sumOddAndEven());

//1. filter even/odd
//2. add them together
//3. push to result array
