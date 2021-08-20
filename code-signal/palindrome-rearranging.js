function palindromeRearranging(inputString) {
  var stringObj = {};
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] in stringObj) stringObj[inputString[i]]++;
    else stringObj[inputString[i]] = 1;
  }
  var midLetter = 0;
  for (var letter in stringObj) {
    if (stringObj[letter] % 2 !== 0) {
      midLetter++;
      if (midLetter > 1) return false;
    }
  }
  return true;
}

// Take the string, loop through it and add each character to a new object
// If the letter already exists in the object, increment the value
// otherwise, create the property and set the value to 1'
// Loop through the keys in the new object to see if every letter has an even number value
// If not, return false
// return true after the end of the object loop
