/*
   Hash Map + Linked List 2 pass approach:
   First pass will just create a deep copy of each node and store it in a hashmap so the original and copies can be related to one another
   Second pass will link the copied nodes together.
*/
var copyRandomList = function (head) {
  const oldToNew = new Map();

  // First pass-through. Set hashmap and create deep copy of each node.
  let curr = head;
  while (curr) {
    oldToNew.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  // Second pass. Link the newly created nodes together using the hash map to relate original to copied nodes.
  curr = head;
  while (curr) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
    curr = curr.next;
  };

  return oldToNew.get(head);
};
