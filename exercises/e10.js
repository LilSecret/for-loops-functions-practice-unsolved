// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let arrayWithLetter = [];
  
  for (let account of array) {
    for (let char of account.name) {
      if (char.toLowerCase() === letter.toLowerCase()) {
        arrayWithLetter.push(account.name);
        break;
      }
    }
  }

  return arrayWithLetter;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
