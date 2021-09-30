function arrayMaxConsecutiveSum(inputArray, k) {
  var bigSum = 0;
  for (var i = 0; i < inputArray.length - k + 1; i++) {
    var currentSum = 0;
    for (var j = 0; j < k; j++) {
      currentSum += inputArray[i + j];
    }
    if (currentSum > bigSum) bigSum = currentSum;
  }
  return bigSum
}
