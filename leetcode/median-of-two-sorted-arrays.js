/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const total = nums1.length + nums2.length;
  let [left, right] = [0, nums1.length];

  while (left <= right) {
    const mid1 = Math.floor((left + right) / 2);
    const mid2 = Math.floor((total + 1) / 2 - mid1);

    const aLeft = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    const aRight = mid1 === nums1.length ? Infinity : nums1[mid1];
    const bLeft = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    const bRight = mid2 === nums2.length ? Infinity : nums2[mid2];

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 === 1) {
        return Math.max(aLeft, bLeft);
      } else {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2.0;
      }
    }
    else if (aLeft > bRight) {
      right = mid1 - 1;
    } else {
      left = mid1 + 1;
    }
  }
};

/*
Binary Search:
- Goal is to separate both nums arrays into left/right partitions in order to simulate a single merged array to find the median
- Perform binary search to find the proper partition for the arrays
- Start by taking half of the shortest length array and partitioning the arrays given that half
- Partitions are correct, if the last element of each array's left partition is <= to the opposite array's right partitions
    - Ex) ALeft last element <= bRight first element && bLeft last el <= ARight first el
- If partitioned properly, and the length of all the elements is:
    - ODD: Means the median is in one of the 2 right partitions. So, return the min of ARight and BRight
    - EVEN: Have to take the average of the biggest number of left partitions with the smallest number in the right partitions
        - (Max(ALeft, BLeft) + min(ARight, BRight)) / 2
- If not partitioned correctly, update left/right pointers accordingly
*/
