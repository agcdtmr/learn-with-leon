//create a function that adds two numbers and alerts the sum
function TwoNumbersAdds(numOne, numTwo) {
  alert(numOne + numTwo);

  TwoNumbersAdds(10, 1);
}
//create a function that multiplys three numbers and console logs the product
function MultiplyThree(one, two, three) {
  const product = one * two * three;
  console.log(product);
}
MultiplyThree(2, 3, 4);
//create a function that divides two numbers and returns the ???
function DivideTwo(one, two) {
  return one / two;
}
console.log(DivideTwo(50, 10));
