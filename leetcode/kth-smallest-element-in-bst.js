var kthSmallest = function (root, k) {
  const values = [];
  const dfs = (node) => {
    if (values.length < k) {
      if (node.left) dfs(node.left);
      values.push(node.val);
      if (node.right) dfs(node.right);
    }
  }
  dfs(root);
  return values[k - 1];
};
