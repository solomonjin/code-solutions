/*
Get each pair of lists in the sorted lists and merge them together (two at a time)
Use shift to get each pair of sorted lists in the main lists
Merge each pair of lists via mergeList algorithm then push the merged list into the main lists
Loop will end when there is only one merged list remaining in the main list
return the result

Time complexity: O(nlogk)
*/

var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  while (lists.length > 1) {
    const l1 = lists.shift();
    const l2 = lists.shift();
    const mergedList = mergeList(l1, l2);
    lists.push(mergedList)
  }
  return lists[0]
};

const mergeList = (list1, list2) => {
  const dummy = new ListNode(0, null);
  let sorted = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      sorted.next = list1;
      list1 = list1.next;
    } else {
      sorted.next = list2;
      list2 = list2.next;
    }
    sorted = sorted.next;
  }

  if (list1) {
    sorted.next = list1
  }
  if (list2) {
    sorted.next = list2;
  }

  return dummy.next;
}
