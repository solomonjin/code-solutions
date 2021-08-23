function minesweeper(matrix) {
  var minesweeper = []
  for (var i = 0; i < matrix.length; i++) {
    var arr = [];
    for (var j = 0; j < matrix[i].length; j++) {
      arr.push(0);
    }
    minesweeper.push(arr);
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (matrix[i - 1]) {
          minesweeper[i - 1][j - 1]++;
          minesweeper[i - 1][j]++;
          if (j !== matrix[i].length - 1) minesweeper[i - 1][j + 1]++;
        }
        minesweeper[i][j - 1]++;
        if (j !== matrix[i].length - 1) minesweeper[i][j + 1]++;
        if (matrix[i + 1]) {
          minesweeper[i + 1][j - 1]++;
          minesweeper[i + 1][j]++;
          if (j !== matrix[i].length - 1) minesweeper[i + 1][j + 1]++;
        }
      }
    }
  }
  return minesweeper;
}
