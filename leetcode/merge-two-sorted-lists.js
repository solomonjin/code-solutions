// Second solution. Seems to take about the same time.
var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(0, null);
  let sorted = dummy;
  let first = l1;
  let second = l2;

  while (first && second) {
    if (first.val <= second.val) {
      sorted.next = new ListNode(first.val, null);
      first = first.next;
    } else {
      sorted.next = new ListNode(second.val, null);
      second = second.next;
    }
    sorted = sorted.next;
  }
  while (first) {
    sorted.next = new ListNode(first.val, null);
    sorted = sorted.next;
    first = first.next;
  }
  while (second) {
    sorted.next = new ListNode(second.val, null);
    sorted = sorted.next;
    second = second.next;
  }
  return dummy.next;
};


// First solution
// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;
//   const values = [];
//   let current = l1;
//   while (current) {
//     values.push(current);
//     current = current.next;
//   }
//   current = l2;
//   while (current) {
//     values.push(current)
//     current = current.next;
//   }
//   values.sort((a, b) => a.val - b.val);
//   for (let i = 0; i < values.length - 1; i++) {
//     values[i].next = values[i + 1];
//   }
//   values[values.length - 1].next = null;
//   return values[0];
// };