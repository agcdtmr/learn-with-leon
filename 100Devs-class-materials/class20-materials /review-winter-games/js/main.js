//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function someFuncName(arr) {
  // const evens = [];

  // arr.forEach((n) => {
  //   if (n % 2 === 0) {
  //     evens.push(n);
  //   }
  // });

  // return evens;

  return arr.filter((num) => num % 2 === 0);
}

// console.log(someFuncName([1, 2, 3, 4, 5]));
