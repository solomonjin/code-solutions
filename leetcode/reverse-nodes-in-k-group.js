var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    const kth = getKthNode(groupPrev, k);
    if (!kth) break;

    let groupNext = kth.next;
    // Reverse the group
    let [prev, curr] = [groupNext, groupPrev.next]
    while (curr !== groupNext) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // Update the group prev pointer to the reversed "head". Then set the groupPrev to the proper node for the next group
    const temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }

  return dummy.next;
};

const getKthNode = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
}
