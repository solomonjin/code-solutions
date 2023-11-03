var goodNodes = function (root) {
  const dfs = (node, max) => {
    if (!node) return 0;
    if (node.val >= max) {
      return dfs(node.left, node.val) + dfs(node.right, node.val) + 1;
    }
    return dfs(node.left, max) + dfs(node.right, max);
  }
  return dfs(root, root.val);
};
