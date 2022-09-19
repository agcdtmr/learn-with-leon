// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let strSent = "heyheyhey";
alert(strSent.includes("?"));

const someName = "is this the best week ever?";
alert(someName.endsWith("?"));
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const p = "jr. dev";
console.log(p.replace("software engineer"));

const someChange = " I am lloking for jr. dev positions";
console.log(someChange.replaceAll("jr. dev", "software engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function handgame() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(player) {
  let botChoice = handgame();
  if (
    (player === "rock" && botChoice === "scissors") ||
    (player === "paper" && botChoice === "rock") ||
    (player === "scissors" && botChoice === "paper")
  ) {
    console.log("Winnnnneeerrrr");
  } else if (player === botChoice) {
    console.log("tiiiiieeedddd");
  } else {
    console.log("loooosseeerrrr");
  }
}

checkWin("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function takesArr() {}
