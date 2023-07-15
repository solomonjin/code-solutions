var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];
  let result = Number.POSITIVE_INFINITY;
  const lastNum = nums[nums.length - 1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    result = Math.min(result, nums[mid])
    if (nums[mid] < lastNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
};
