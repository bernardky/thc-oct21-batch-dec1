// Simple Array Sum

// Given an array of integers, find the sum of its elements.

// For example: [100,200,300,400] should return 1000.

randomArr = [100, 200, 300, 400];

//loop method

let arrSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(arraySum(randomArr));

//array method
let arraySum2 = (arr) => {
  return arr.reduce((currentSum, currentValue) => currentSum + currentValue);
};

console.log(arraySum2(randomArr));
