/*
First, sort the input array and create a results array to hold our solutions
Go through each element in the array to get the first number (a)
After determining the a value, perform Two Sum on the rest of the array
Since the array is already sorted, can use left/right pointers instead of hash map
    - If the sum is greater than 0, move right pointer
    - If sum is less than 0, move left pointer
    - When moving a pointer, if the value of new pointer is same as previous, move it again (avoid duplicates)
If the next a value is the same as the previous one, skip it
*/

var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum > 0) {
        r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        result.push([nums[i], nums[l], nums[r]])
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return result;
};
