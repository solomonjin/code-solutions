/*
   Create a slow and a fast pointer both starting at head.
   The fast pointer will run 2 nodes at a time while the slow will run normally.
   If the fast pointer is ever equal to the slow pointer, that means we have found a cycle.
   If the fast pointer can reach the end of the linked list, then there is no cycle.
*/
var hasCycle = function (head) {
  // Edge case to check if given list exists
  if (!head) return false;
  let slow = fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
