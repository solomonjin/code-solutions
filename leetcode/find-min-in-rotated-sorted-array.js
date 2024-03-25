/*
Binary Search:
- Outside of the rotation, the array is sorted.
- When doing binary, we check the mid number and compare it to the last number in the array
- If the mid point is greater than the last number, then that means the rotation happens AFTER the midpoint (search right partition)
- If mid point is smaller than last number, happened BEFORE the midpoint (check left partition)
- At each new midpoint, we check to see if it's the smallest number we've run into and update our result.
- Return our result after binary searching through the entire array
*/
var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1];
  const lastNum = nums[right];
  let result = Number.POSITIVE_INFINITY;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    result = Math.min(result, nums[mid]);           // Update our result if midpoint is the smallest num we've come across
    if (nums[mid] > lastNum) {                      // If midpoint is greater than the last num, rotation happens AFTER midpoint (min is right of mid)
      left = mid + 1;
    } else {                                        // Otherwise, rotation happens BEFORE (min number is left of mid)
      right = mid - 1;
    }
  }
  return result;
};
