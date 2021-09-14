var searchInsert = function (nums, target) {
  const result = nums.indexOf(target)
  if (result !== -1) return result;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return i;
  }
  return nums.length;
};
