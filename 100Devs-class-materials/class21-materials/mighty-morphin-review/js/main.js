// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Yoga retreat";
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let someVar = "Hello Tech World";
alert(someVar.slice(-4));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function take5nums(n1, n2, n3, n4, n5) {
  let diff = 100 - n1 - n2 - n3 - n4 - n5;
  alert(Math.abs(diff));
}
take5nums(1, 2, 3, 4, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
// function take3nums(num1, num2, num3) {
//   let min = Math.min(num1, num2, num3);
//   let max = Math.max(num1, num2, num3);
//   console.log(`My lowest num is ${min} and my highest num is ${max}`);
// }

// take3nums(100, 50, 25);

function takenums(n1, n2, n3) {
  let min = Math.min(n1, n2, n3);
  let max = Math.max(n1, n2, n3);
}
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headOrTails() {
//   let result = Math.random();
//   if (result < 0.5) {
//     return "heads";
//   } else {
//     return "tails";
//   }
// }

// console.log(headOrTails());

const headOrTails = () => (Math.random() < 0.5 ? "heads" : "tails");
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flip(n) {
  for (let i = 1; i <= n; i++) {
    let result = headOrTails();
    console.log(result);
  }
}
flip(10);
