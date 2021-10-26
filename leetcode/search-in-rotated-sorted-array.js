/*
Solution must be time complexity of O(log n).
Can't use linear search so implement binary search
Binary search with extra steps (don't need to find the pivot)

Base case: if middle value === target, return the mid index
Have to distinguish whether to check left/right portion.
First check to see if the value at middle index is >= to left number. This determines if the middle number is part of the left sorted or right sorted portions
If so, check to see if the target is greater than value at mid OR if it's less than the left value. If either of these are true, the target value must be in right portion
so update the left pointer accordingly aka search right side
otherwise, update the right pointer (aka search left side)

If the middle number is part of the right sorted: do the same, but check the opposites.
If target < the middle value or target > right value, search left
otherwise search left

If loop ends without finding the value, return -1;
*/
var search = function (nums, target) {
  let l = 0,
    mid,
    r = nums.length - 1;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) return mid;

    //left portion
    if (nums[mid] >= nums[l]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
      //right portion
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};
