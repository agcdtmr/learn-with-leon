//Create a conditonal that checks their age
// let age = 17;
let age = 30;
//If under 16, tell them they can not drive
if (age < 16) {
  alert("You can not drive");
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age < 18) {
  alert("You can't hate from outside the club, because you can't even get in");
}
//If under 21, tell them they can not drink
else if (age < 21) {
  alert("You can not drink");
}
//If under 25, tell them they can not rent cars affordably
else if (age < 25) {
  alert("You can not rent cars affordably");
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age < 30) {
  alert("You can not rent fancy cars affordably");
}
//If under over 30, tell them there is nothing left to look forward too
else if (age >= 30) {
  alert("There is nothing left to look forward to, which is a lie");
}

//--- Harder
let clickh1 = document.querySelector("h1");
//On click of the h1
clickh1.addEventListener("click", someName);
//Take the value from the input
someName = document.querySelector("danceDanceRevolution").value;
//Place the result of the conditional in the paragraph
