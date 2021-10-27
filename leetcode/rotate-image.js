/*
Image rotates in a square
Have pointers for left/right (also top/bottom) in order to define the boundaries of the matrix
Picture matrix as a series of outer/inner rings
Rotate the outer rings and work inwards
For each ring:
    - Store the value at the top left position in a temporary variable
    - Take the value at bottom left and move it to top left
    - Take value at bottom right, move to bottom left
    - Take value at top right, move to bottom right
    - Set the top right position to the temporary variable (previous top left value)
*/
var rotate = function (matrix) {
  let l = 0,
    r = matrix.length - 1;

  while (l < r) {
    for (let i = 0; i < r - l; i++) {
      const top = l,
        bot = r;
      const topLeft = matrix[top][l + i];
      matrix[top][l + i] = matrix[bot - i][l];
      matrix[bot - i][l] = matrix[bot][r - i];
      matrix[bot][r - i] = matrix[top + i][r];
      matrix[top + i][r] = topLeft;
    }
    l += 1;
    r -= 1;
  }
};
