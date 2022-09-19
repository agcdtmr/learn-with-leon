// https://app.codesmith.io/apply?program=immersive&stage=challenge
// Challenge: fizzbuzz
// Create a function fizzbuzz that takes one number, n. fizzbuzz should loop through the numbers 1 through n and push each number into the results array using the following rules:
// 1. Push the string "fizz" in place of numbers divisible by 3.
// 2. Push the string "buzz" in place of numbers divisible by 5.
// 3. Push the string "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Run the test console.log to check your work.

const results = []

for (i = 1; i <= 16; i++) {
  let x = ''
  if(i % 3 === 0) {
      x += 'fizz'
  } else if(i % 5 ===0) {
      x += 'buzz'
  } else {
    x = i
  }
  results.push(x)
}

console.log(results)