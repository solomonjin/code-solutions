function avoidObstacles(inputArray) {
  var largestNum = Math.max(...inputArray);
  var count = 2;
  var match = true;
  while (count < largestNum) {
    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % count === 0) {
        match = false;
        break;
      }
    }
    if (match === true) return count;
    match = true;
    count++;
  }
  return largestNum + 1;
}
