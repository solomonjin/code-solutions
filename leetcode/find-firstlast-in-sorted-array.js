// First solution
var searchRange = function (nums, target) {
  const index = nums.indexOf(target);
  if (index === -1) return [-1, -1];

  let end = index;
  while (nums[end] === target) {
    end++;
  }
  return [index, end - 1]
};
