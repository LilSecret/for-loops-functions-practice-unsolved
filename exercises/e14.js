
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let accountsWithIncorrectBalance = [];
  
  //loop through all items
  for (let account of array) {
    let totalDeposits = 0;
    let totalWithdrawals = 0;
    
    // if account has property ~ get the total
    if ('withdrawals' in account) {
      for (let withdrawal of account.withdrawals) {
        totalWithdrawals += withdrawal;
      }
    }

    if ('deposits' in account) {
      for (let deposit of account.deposits) {
        totalDeposits += deposit;
      }
    }

    if (totalDeposits - totalWithdrawals != account.balance) {
      accountsWithIncorrectBalance.push(account);
    }
  }

  return accountsWithIncorrectBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
