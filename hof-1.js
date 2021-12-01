//https://edabit.com/challenge/6QNPoEjY8DLGKPiqr

randomArr = [
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"],
];

let letterCounter = (letter) => {
  return randomArr.flat().filter((x) => x === letter).length;
};

console.log(letterCounter("D"));
