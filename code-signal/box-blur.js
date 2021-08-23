function boxBlur(image) {
  var outerArr = [];
  for (var i = 1; i < image.length - 1; i++) {
    var innerArr = [];
    for (var j = 1; j < image[i].length - 1; j++) {
      var sum = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1] + image[i][j - 1] + image[i][j] + image[i][j + 1] + image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
      innerArr.push(Math.floor(sum / 9));
    }
    outerArr.push(innerArr)
  }
  return outerArr;
}

// Find the center of a 3x3 . Create a new empty outer array
// Loop through outer array, but at index of 1 and stop at image.length - 1
// Loop through inner array, but at index 1 and stop at image[i].length - 1; create a new inner array
// For each of those indexes, add up the sum of surrounding values and push it to inner array
// push inner array to outer array
// return outer array
