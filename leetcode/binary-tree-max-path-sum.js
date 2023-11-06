var maxPathSum = function (root) {
  let res = root.val;

  const dfs = (node) => {
    if (!node) return 0;

    // Rule out any negative path subtrees since, children don't have to be included
    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);

    // Compute max path sum WITH split
    res = Math.max(res, node.val + leftMax + rightMax);

    // Return the max path without splitting
    return node.val + Math.max(leftMax, rightMax);
  }
  dfs(root)
  return res;
};
