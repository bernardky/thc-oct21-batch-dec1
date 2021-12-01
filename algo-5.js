// Factorialize a Number

// Return the factorial of a provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function as arguments.

// recursion method
let findFactorial = (num) => {
  if (num === 0) return 1;
  else {
    return num * findFactorial(num - 1);
  }
};

console.log(findFactorial(5));

//loop
let findFactorial2 = (num) => {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

console.log(findFactorial2(5));
