var searchMatrix = function (matrix, target) {
  const [m, n] = [matrix.length, matrix[0].length]
  if (matrix[0][0] > target || matrix[m - 1][n - 1] < target) {
    return false;
  }
  let [left, right] = [0, matrix.length - 1];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (matrix[mid][0] <= target && matrix[mid][n - 1] >= target) {
      return binarySearch(matrix[mid], target);
    }
    if (matrix[mid][n - 1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

const binarySearch = (nums, target) => {
  let [left, right] = [0, nums.length - 1];

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return true;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
