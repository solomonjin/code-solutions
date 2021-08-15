function matrixElementsSum(matrix) {
  var sum = 0;
  var badIndex = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var n = 0; n < matrix[i].length; n++) {
      if (matrix[i][n] === 0) badIndex.push(n);
      else if (badIndex.indexOf(n) === -1) sum += matrix[i][n];
    }
  }
  return sum;
}
