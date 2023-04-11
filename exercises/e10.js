// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let arrayWithLetter = [];
  let newLetter = letter.toLowerCase();
  
  for (let account of array) {
    let letterInName = false;

    for (let char of account.name) {
      let newChar = char.toLowerCase();
      if (newChar === newLetter) {
        letterInName = true;
      }
    }

    if (letterInName) {
      arrayWithLetter.push(account.name);
    }
  }

  return arrayWithLetter;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
