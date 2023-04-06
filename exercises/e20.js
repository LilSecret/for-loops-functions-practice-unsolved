
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let namesWithA = [];
  let otherNames = [];
  let newArray = [];

  //loop through all names
  for ( let i = 0; i < array.length; i++ ) {
    //loop through all characters
    for ( let j = 0; j < array[i].length; j++ ) {
      //find the letter a once
      if ( array[i].charAt( j ) == 'a' && namesWithA.includes( array[i] ) == false ) {
        namesWithA.push( array[i] );
      }
    }
    
    //names without letter a once
    if ( namesWithA.includes( array[i] ) == false && otherNames.includes( array[i] ) == false ) {
      otherNames.push( array[i] );
    }
  }
  
  newArray.push( namesWithA );
  newArray.push( otherNames );

  return newArray
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
