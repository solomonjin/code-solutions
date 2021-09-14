// Improved solution with binary search
var searchRange = function (nums, target) {
  let i = 0,
    j = nums.length - 1,
    result = [-1, -1];

  while (i <= j) {
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] < target) {
      i = mid + 1;
    } else if (nums[mid] > target) {
      j = mid - 1;
    } else {
      let start = mid,
        end = mid;
      while (nums[start] === target && start >= 0) {
        start--;
      }
      result[0] = start + 1;
      while (nums[end] === target && end <= nums.length) {
        end++;
      }
      result[1] = end - 1;
      return result;
    }
  }
  return result;
};

// First solution
// var searchRange = function (nums, target) {
//   const index = nums.indexOf(target);
//   if (index === -1) return [-1, -1];

//   let end = index;
//   while (nums[end] === target) {
//     end++;
//   }
//   return [index, end - 1]
// };
