
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
    let total = 0;
    let average = null;
  
    for ( let i = 0; i < array.length; i++ ) {
      total = array[i] + total;
    }
  
    average = total / array.length;
  
    return average
}

/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(string) {
  // Your code goes here...
  let allNumbers = [];
  let numbersInString = string.match(/\d+/g);
  let total = 0;
  
  if (numbersInString != null) {
    for (let i = 0; i < numbersInString.length; i++) {
      for (let j = 0; j < numbersInString[i].length; j++) {
        allNumbers.push(parseInt(numbersInString[i].charAt(j)));
      }
    }
  }
  
  for (let i = 0; i < allNumbers.length; i++) {
    if (total == 0) total = allNumbers[i];

    else total = total + allNumbers[i];
  }
  
  return total;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
