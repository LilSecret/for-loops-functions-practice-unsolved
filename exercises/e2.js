// EXERCISE 2
// for every number between 0 and max find all numbers that have square roots that are integers
// getNumbersWithSquareRoots(17) => [0, 1, 4, 9, 16]

export function getNumbersWithSquareRoots(max) {
  // Your code goes here...
  let squaredNumbers = [];
  let number = null;
  
  for(let i = 0; i <= max; i++) {
    number = Math.sqrt(i);
    
    if(number % 1 == 0) {
      squaredNumbers.push(i);
    }
    else {
      console.log(i + ' is not a squared number.')
    }
  }
  
  return squaredNumbers
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
