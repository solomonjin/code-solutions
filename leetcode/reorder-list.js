/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/*
- Split the list in halves
- Reverse the second half
- Merge the two halves

*/
var reorderList = function (head) {
  // Get second half of list
  let [slow, fast] = [head, head.next];
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let [second, prev] = [slow.next, null];
  slow.next = null;
  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // Combine two lists
  let first = head;
  second = prev;
  while (second) {
    const [temp1, temp2] = [first.next, second.next];
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};
