/*
  Hint: Think from the perspective of each individual node.
  DFS approach = start thinking from the bottom most node and resolving upwards.
  The base case of our dfs would be a dead-node in which the edge we calculate is 0.
  Keep track of our diameter by nesting our dfs function and using a global variable.
*/
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  const dfs = (node) => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return diameter;
};
