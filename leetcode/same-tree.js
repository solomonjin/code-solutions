// SIMPLIFIED SOLUTION
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


// FIRST SOLUTION
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return dfs(p, q);
};

const dfs = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  const left = dfs(p.left, q.left);
  const right = dfs(p.right, q.right);
  return left && right;
}
