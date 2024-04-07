// O(1) space complexity solution (excludes output array);
/*
Create a result array filled with 1 and equal length to input array
Traverse through the input array and get the cumulative product at each index, storing it in result array
e.g) [1, 2, 3, 4] => [1, 1, 2, 6] for each step, taking the leftProduct starting at 1 and setting it equal to the new leftProduct at each index
Traverse through the input array again but in reverse, doing the same thing
   [1, 1, 2, 6]    => []
   i = 3, rightProd = 1 => res[i] *= rightProduct = 6 * 1 = 6 > res[3] = 6; rightProd *= nums[i] = 4
   i = 2, rightProd = 4 => 2 * 4 = 8; rightProd = 4 * 3 = 12
   i = 1, rightProd = 12 => 1 * 12 = 12; rightProd = 12 * 2 = 24
   i = 0, rightProd = 24 => 1 * 24 = 24; rightProd = 24
   [24, 12, 8, 6]
*/
var productExceptSelf = function (nums) {
  const res = new Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = res[i] * leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return res;
};
