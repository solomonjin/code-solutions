/*
Two pointer approach:
Create a fast and slow pointer at the head
Start the fast pointer n nodes ahead of slow
If the fast node is null, then return head.next (checks if n is greater than or equal to
length of the list)
Traverse through the linked list, incrementing both slow and fast nodes at the same pace
When the fast node reaches the end of the list, the slow pointer will be at the node n places
from the end of the list

remove the desired node and return the head
*/

var removeNthFromEnd = function (head, n) {
  let fast = slow = head;
  let count = 0;
  while (count < n) {
    fast = fast.next;
    count++;
  }

  if (!fast) return head.next;
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

/*
First, get the length of the LinkedList by passing through it once and keeping count

If the length of the list is 1, just return head.next

Otherwise, get the index of the node that must be removed (index = length - n)

If we want to remove the head node (index = 0), just return head.next

Create pointers for the current and previous nodes
Go down the List until you reach the index - 1 to get the previous node
Remove the desired node by linking the prev node to prev.next.next
return the head
*/

var removeNthFromEnd = function (head, n) {
  let length = 0,
    curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  const index = length - n;

  if (length === 1 || index === 0) {
    return head.next;
  }

  curr = head
  let count = 0,
    prev;
  while (count !== index - 1) {
    curr = curr.next;
    count++;
  }
  prev = curr;
  prev.next = prev.next.next;
  return head;
};
