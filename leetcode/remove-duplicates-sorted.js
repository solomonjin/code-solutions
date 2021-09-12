var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index++] = nums[i]
    }
  }
  return index;
};

// var removeDuplicates = function (nums) {
//   const hash = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]]) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       hash[nums[i]] = 1;
//     }
//   }
//   return nums.length;
// };
