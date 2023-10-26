/*
   Go through each of the given lists, adding the values together (if the node exists)
   and keeping track of any carry values.
*/
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;

  let carry = 0;
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Add numbers and get carry
    const val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    curr.next = new ListNode(val % 10);

    // Update pointers
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};
