// Convert Celcius to Fahrenheit

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// Create a parameter that takes in an argument called Celsius representing a temperature in Celsius.  Use the algorithm mentioned above to help convert any given Celsius temperature to Fahrenheit.

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

console.log(celciusToFahrenheit(30));

//ES6 arrow function

let celciusToFahrenheit2 = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

console.log(celciusToFahrenheit2(35));
