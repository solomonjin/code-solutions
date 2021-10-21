/*
Create two pointers for the LinkedList (fast and slow)
Go down the List and check to see if it either reaches the end of the list (return false)
otherwise, if the fast and slow pointers are ever the same node, return true
*/
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head,
    fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
