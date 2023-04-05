// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  let accountsWithLetter = [];
  let newLetter = letter.toLowerCase();

  //Loop to get the names in array
  for ( let i = 0; i < array.length; i++ ) {
    //Loop to check the letters inside the array
    for ( let j = 0; j < array[i].name.length; j++ ) {
      let char = array[i].name.charAt( j ).toLowerCase();
      
      if ( char == newLetter && accountsWithLetter.includes(array[i].name) == false ) {
          accountsWithLetter.push( array[i].name );
      }
    }
  }
  
  return accountsWithLetter
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
