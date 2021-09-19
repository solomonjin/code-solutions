// Second solution
var spiralOrder = function (matrix) {
  const result = [];

  while (matrix.length) {
    const first = matrix.shift();
    result.push(...first)
    for (const m of matrix) {
      const val = m.pop();
      if (val) {
        result.push(val);
        m.reverse();
      }
    }
    matrix.reverse();
  }
  return result;
};

// First solution attempt; Only works on square matrices.
/*
let colStart = 0,
        rowStart = 0;
    let colEnd = matrix[0].length - 1,
        rowEnd = matrix.length - 1;
    const result = [];

    while (rowStart <= rowEnd && colStart <= colEnd ) {

        for (let i = colStart; i <= colEnd; i++) {
            if (!result.includes(matrix[rowStart][i])) {
                result.push(matrix[rowStart][i])
            }
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
           if (!result.includes(matrix[i][colEnd])) {
                result.push(matrix[i][colEnd])
            }
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            if (!result.includes(matrix[rowEnd][i])) {
                result.push(matrix[rowEnd][i])
            }
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            if (!result.includes(matrix[i][colStart])) {
                result.push(matrix[i][colStart])
            }
        }
        colStart++;
    }

    return result;
*/
