var cloneGraph = function (node) {
  if (!node) return node;     // Edge case

  const oldToNew = {};        // Create hashmap that relates the original to the copy
  const dfs = (node) => {
    if (oldToNew[node.val]) return oldToNew[node.val];  // If we've already cloned a given node, return the cloned node
    // Otherwise, create a clone of the given node
    const copy = new Node(node.val);
    oldToNew[node.val] = copy;  // Update our map with the newly created clone
    for (const neighbor of node.neighbors) {    // For each neighbor of given node, recursively either connect or create clones for them
      copy.neighbors.push(dfs(neighbor));
    }
    return copy;
  }
  return dfs(node);
};
