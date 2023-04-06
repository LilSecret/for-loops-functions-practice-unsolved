
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let totalDeposits = 0;
  let totalWithdrawals = 0;
  let accountsWithIncorrectBalance = [];
  
  //loop through all items
  for (let i = 0; i < array.length; i++) {
    // if account doesn't have property / set to zero
    if (array[i].hasOwnProperty('withdrawals') == false) array[i].withdrawals = [0];
    if (array[i].hasOwnProperty('deposits') == false) array[i].deposits = [0];
    
    //total all deposits
    if (array[i].hasOwnProperty('deposits')) {
      for (let j = 0; j < array[i].deposits.length; j++) {
        if (j == 0) {
          totalDeposits = array[i].deposits[0];
          array[i].totalDeposits = totalDeposits;
        }

        else if (array[i].deposits.length > 1) {
          totalDeposits = totalDeposits + array[i].deposits[j];
          array[i].totalDeposits = totalDeposits;
        }
      }
    }
    
    //total all withdrawals
    if (array[i].hasOwnProperty('withdrawals')) {
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        if (j == 0) {
          totalWithdrawals = array[i].withdrawals[0];
          array[i].totalWithdrawals = totalWithdrawals;
        }

        else if (array[i].withdrawals.length > 1) {
          totalWithdrawals = totalWithdrawals + array[i].withdrawals[j];
          array[i].totalWithdrawals = totalWithdrawals;
        }
      }
    }

    //check to see if account deposits and withdrawals add up to balance
    if (array[i].balance - array[i].totalWithdrawals == array[i].totalDeposits != true) {
      accountsWithIncorrectBalance.push(array[i]);
    }
  }

  return accountsWithIncorrectBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
