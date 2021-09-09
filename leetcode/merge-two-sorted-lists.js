var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  const values = [];
  let current = l1;
  while (current) {
    values.push(current);
    current = current.next;
  }
  current = l2;
  while (current) {
    values.push(current)
    current = current.next;
  }
  values.sort((a, b) => a.val - b.val);
  for (let i = 0; i < values.length - 1; i++) {
    values[i].next = values[i + 1];
  }
  values[values.length - 1].next = null;
  return values[0];
};
