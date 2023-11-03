var rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  // Perform level order traversal on tree
  while (queue.length > 0) {
    const n = queue.length;
    // Get the right-most node at current level
    const rightNode = queue.pop();
    res.push(rightNode.val);
    // Get the children of all the other nodes at current level and add them to queue
    for (let i = 0; i < n - 1; i++) {
      const node = queue.shift();
      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }
    // Add the right-most node's children to end of queue
    for (const child of [rightNode.left, rightNode.right]) {
      if (child) queue.push(child);
    };
  }
  return res;
};

// Cleaner solution

var rightSideView = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  // Perform level order traversal on tree
  while (queue.length > 0) {
    const n = queue.length;
    // Keep a variable to keep track of the right-most node.
    let rightNode = null;
    // Iterate through current level, updating the rightNode value and adding each node's children back to queue
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      // Check to see if each node is valid
      if (node) {
        rightNode = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    // rightNode initialized as null so, need to verify that it has a value
    if (rightNode) res.push(rightNode.val);
  }
  return res;
};
