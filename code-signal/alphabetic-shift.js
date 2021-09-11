function alphabeticShift(inputString) {
  var newString = '';
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'z') newString += 'a';
    else {
      newString += String.fromCharCode(inputString[i].charCodeAt(0) + 1);
    }
  }
  return newString;
}
