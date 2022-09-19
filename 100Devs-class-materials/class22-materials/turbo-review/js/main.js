// // *Variables*
// // Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
// let favDrink = " water ";
// favDrink = favDrink.trim();
// console.log(favDrink);

// //Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let str = "wordone please time rest yow apple";
// if (str.search("hey") !== -1) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// console.log(str.includes("apple"));
// console.log(str.search('apple'));

// let multipleWords = "This is one tasty apple. Do you want one?";
// let ourSubstring = "apple";
// if (multipleWords.includes(ourSubstring)) {
//   console.log("The word apple is in the string.");
// } else {
//   console.log("The word apple is not in the string.");
// }

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperSci() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scrissors";
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWins(playerChoiceChoice) {
  let botChoice = rockPaperSci();
  // let playerChoiceChoice = playerChoiceChoice.toLowerCase();
  if (
    (playerChoiceChoice === "rock" && botChoice === "scissors") ||
    (playerChoiceChoice === "paper" && botChoice === "rock") ||
    (playerChoiceChoice === "scissors" && botChoice === "paper")
  ) {
    console.log("YOU WINNNNN");
  } else if (playerChoiceChoice === botChoice) {
    console.log("YOU TIEEEE");
  } else {
    console.log("YOU LOOOOOSEEEE");
  }
}
checkWins("paper");
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console
function takesArrChoice(arr) {
  arr.forEach((choice) => checkWins(choice));
}
takesArrChoice(["rock", "paper", "scissors"]);
