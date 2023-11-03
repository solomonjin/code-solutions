/*
If current node we're on is less than both p and q, then LCA will be on right subtree
If current node is greater than p and q, then LCA is in left subtree
If current node is in between p and q, it is the LCA.
*/

// Recursive Solution
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  return root;
};

// Cleaner solution
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;
  while (curr) {
    if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right;
    } else if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
};

var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
      continue;
    }
    if (root.val > p.val && root.val > q.val) {
      root = root.left;
      continue;
    }
    break;
  }
  return root;
};
