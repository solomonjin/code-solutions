var isBalanced = function (root) {
  if (!root) return true;
  if (dfs(root) === -1) return false;
  return true;
};

const dfs = (node) => {
  // Base case - returning "height" of tree
  if (!node) return 0;

  // Get subtree heights OR -1 if an imbalance is found
  const left = dfs(node.left);
  const right = dfs(node.right);

  // Return -1 if imbalance is found in a subtree or if subtree height diff is greater than 1
  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;

  // Otherwise, return the height of the tree at current node
  return Math.max(left, right) + 1;
}
