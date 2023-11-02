var isSubtree = function (root, subRoot) {
  // If subtree is empty, always true
  if (!subRoot) return true;
  // If the main tree is empty, always false
  if (!root) return false;

  // If root node is sameTree, it's true
  // OR check if left subtree is same tree
  // OR check if right subtree is same tree
  return sameTree(root, subRoot)
    || isSubtree(root.left, subRoot)
    || isSubtree(root.right, subRoot);
};

const sameTree = (s, t) => {
  // if both trees empty
  if (!s && !t) return true;
  // If either tree is empty or if the values aren't the same
  if (!s || !t || s.val !== t.val) return false
  // Current node shows that they are same tree, so check subtrees
  return sameTree(s.left, t.left) && sameTree(s.right, t.right);
}
