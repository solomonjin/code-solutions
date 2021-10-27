/*
Have a variable to hold the max sum as well as the current sum
max sum should be initially set to first element
current sum should be initially set to zero
Go through each element in the array, add each value to the current sum;
If the current sum is negative, reset it to 0
add the current number to the current sum
Store the greater value between max sum and current sum in max sum variable

Return the maxSub variable at the end of the loop
*/
var maxSubArray = function (nums) {
  let maxSum = nums[0],
    currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum;
};
