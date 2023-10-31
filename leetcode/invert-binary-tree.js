var invertTree = function (root) {
  if (!root) return null;
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
};
