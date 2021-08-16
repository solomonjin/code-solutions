function allLongestStrings(inputArray) {
  var longStrings = [];
  var longestLength = Math.max(...inputArray.map(word => word.length));
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longestLength) longStrings.push(inputArray[i]);
  }
  return longStrings;
}
