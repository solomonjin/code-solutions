/*
Create a queue to hold nodes in level-order that will initially hold the root node.
While there is a valid node remaining in the queue, go through the nodes in the queue,
adding the current level node's values to a currLevel array as well as each node's children into
the queue if the node is valid
Then push the currLevel array into the results array.

In order to keep track of which nodes in queue belong to a given level, in each iteration,
get the length of the queue and iterate up to that length, shifting out the nodes in queue.
*/
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    const currLevel = [];
    // Length of queue gives how many nodes are in current level
    // then iterate through only those nodes
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      currLevel.push(node.val);
      // Add any child nodes of current node back into the queue if valid
      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }
    res.push(currLevel);
  }
  return res;
};
