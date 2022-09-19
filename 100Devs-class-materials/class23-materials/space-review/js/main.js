//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [0, 1, 2, 3, 4, 5];
let sum = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let sqrd = (arr) => arr.map((arr) => arr.Math.pow());

//Create a function that takes string
//Print the reverse of that string to the console
// function takesStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(takesStr(hye, hyuj, hdkj));

let takesStr = (str) => console.log(str.split("").reverse().join(""));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const palindromeChck = (str) => alert(str === takesStr(str));

palindromeChck("iets");
