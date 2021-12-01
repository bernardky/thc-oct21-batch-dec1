// Reverse a String

// Create a function that takes in a string as an argument.

// This function should reverse any given string and return it.

// For example: "I love Javascript very much" should return

// "hcum os tpircsavaj evol I"

// Solve this with:

// Loops

randomStr = "I love Javascript very much";

let reverseStr = (str) => {
  reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseStr(randomStr));

// Built-in Array Methods
let reverseStr2 = (str) => {
  return str.split("").reverse().join("");
};

//spread operator
// let reverseStr2 = (str) => {
//   return [...str].reverse().join("");
// };

console.log(reverseStr2(randomStr));
