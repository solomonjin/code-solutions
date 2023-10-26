/*
   Constraints: Solution must be in O(1) space and can't modify original array.

   Linked list problem. Traverse the array with fast/slow pointers as if it
   were a linked list. The array is guaranteed to be a linked list cycle
   given the constraints.

   The start of the linked list cycle is the solution (multiple numbers/
   nodes pointing to a single number aka repeating).
   To find the start of linked list cycle, first use algo to find the first
   intersecting number in the cycle (fast/slow pointer). Then, using another
   slow pointer at the head, return the node that intersects with the
   original slow pointer.
*/
var findDuplicate = function (nums) {
  let slow = fast = 0;

  // Find first intersection point in cycle
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  let slow2 = 0;
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow === slow2) {
      return slow;
    }
  }
};
