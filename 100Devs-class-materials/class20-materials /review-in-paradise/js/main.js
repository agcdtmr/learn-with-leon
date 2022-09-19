// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "stampot";

faveFood = "sinigang";

alert(faveFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "More fun in the Philippines";
// alert(str[1])
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
alert(str.charAt[2]);
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNum(num1, num2, num3) {
  let product = (num1 / num2) * num3;
  alert(product);
}
threeNum(100, 50, 20);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function numOneCubeRt(num) {
  console.log(Math.cbrt(num).toFixed(4));
}

num(40);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const summerMonths = ["june", "july", "august"];
const notSummerMonth = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "september",
  "october",
  "november",
  "december",
];

function checkSeason(month) {
  if (summerMonths.includes(month)) {
    alert("yaaaay");
  } else if (notSummerMonth.includes(month)) {
    alert("boooo");
  } else {
    alert("not a month");
  }
}

checkSeason("june");

// function checkSeason(month) {
// let monthLowerCase = month.toLowerCase()
//   if (monthLowerCase === "june" || monthLowerCase === "july" || monthLowerCase === "august") {
//     alert("YAAAAAAY");
//   } else if (
//     monthLowerCase === "january" ||
//     monthLowerCase === "february" ||
//     monthLowerCase === "march" ||
//     monthLowerCase === "april" ||
//     monthLowerCase === "may" ||
//     monthLowerCase === "september" ||
//     monthLowerCase === "october" ||
//     monthLowerCase === "november" ||
//     monthLowerCase === "december"
//   ) {
//     alert("Booooo");
//   } else {
//     alert("NOT A MONTH");
//   }
// }

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function someName(num) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
