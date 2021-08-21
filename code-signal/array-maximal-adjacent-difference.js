function arrayMaximalAdjacentDifference(inputArray) {
  var bigDiff = 0;
  for (var i = 1; i < inputArray.length; i++) {
    var newDiff = Math.abs(inputArray[i] - inputArray[i - 1])
    if (newDiff > bigDiff) bigDiff = newDiff;
  }
  return bigDiff;
}
