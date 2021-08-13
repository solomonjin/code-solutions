function adjacentElementsProduct(inputArray) {
  var biggestProduct = -10000;
  for (var i = 0; i < inputArray.length - 1; i++) {
    var product = (inputArray[i] * inputArray[i + 1])
    if (product >= biggestProduct) biggestProduct = product;
  }
  return biggestProduct;
}
