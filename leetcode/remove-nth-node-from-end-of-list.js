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
