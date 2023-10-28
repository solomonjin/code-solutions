/*
Get each pair of lists in the sorted lists and merge them together (two at a time)
Use shift to get each pair of sorted lists in the main lists
Merge each pair of lists via mergeList algorithm then push the merged list into the main lists
Loop will end when there is only one merged list remaining in the main list
return the result

Time complexity: O(nlogk)

In short, sort and merge the lists two at a time until there is only one left.
*/

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const l1 = lists.shift();
    const l2 = lists.shift();
    const merged = mergeLists(l1, l2);
    lists.push(merged);
  }

  return lists[0];
};

const mergeLists = (l1, l2) => {
  const dummy = new ListNode();
  let merged = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      merged.next = l1;
      l1 = l1.next;
    } else {
      merged.next = l2;
      l2 = l2.next;
    }
    merged = merged.next;
  }

  if (l1) merged.next = l1;
  if (l2) merged.next = l2;

  return dummy.next;
}
