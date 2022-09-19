//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvshows = [show1, show2, show3, show4];

tvshows.forEach((shows) => console.log(shows));
//Create and array of numbers
let arrNums = [1, 2, 3, 4, 5, 6, 7];
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvs = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEvs(arrNums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondLowHigh (arr) {
  let sorted = arr.sort(a,b) => a-b

  alert (sorted[1] + sorted[sorted.length - 2])
}



