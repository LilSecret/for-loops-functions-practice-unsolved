// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

// The the code is doing what the instructions say and follows the mdn code outputs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// I'm unable to figure out how to solve the last error

export function joinToString(array, separator) {
  let resStr = '';
  
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      resStr += array[i];
    } else {
      resStr += separator + array[i];
    }
  }
  
  return resStr;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
