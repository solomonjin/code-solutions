function arrayChange(inputArray) {
  var counter = 0;
  for (var i = 1; i < inputArray.length; i++) {
    while (inputArray[i - 1] >= inputArray[i]) {
      inputArray[i]++;
      counter++;
    }
  }
  return counter;
}
