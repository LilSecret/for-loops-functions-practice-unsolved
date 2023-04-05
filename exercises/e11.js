// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  let total = 0;
  let sumOfWithdrawals = [];
  
  //loop through all items in array
  for ( let i = 0; i < array.length; i++ ) {
    //Check to see if item has property
    if ( array[i].hasOwnProperty( 'withdrawals' ) == true ) {
      //total all numbers 
      for ( let j = 0; j < array[i].withdrawals.length; j++ ) {
        if ( j == 0 ) {
          total = array[i].withdrawals[0];
        }
        
        else {
          total = total + array[i].withdrawals[j];
        }
      }
      
      sumOfWithdrawals.push( total );
    }

    else {
      total = 0;
      sumOfWithdrawals.push( total );
    }
  }
  
  return sumOfWithdrawals
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
