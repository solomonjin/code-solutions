var maxDepth = function (root) {
  if (!root) return null;
  const leftDepth = 1 + maxDepth(root.left);
  const rightDepth = 1 + maxDepth(root.right);
  return Math.max(leftDepth, rightDepth);
};
