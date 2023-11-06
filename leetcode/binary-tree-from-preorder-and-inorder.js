/*
   First element in preorder array is ALWAYS root node.
   Find the "root" of current subtree by taking the first
   element in preorder array, then look for that value in inorder array
   The values to left in inorder belong to the left subtree while
   the values on the right belong to right subtree

   Get the length of the left subtree and partition the remaining
   elements in preorder array. Then recursively perform the same
   operation on the left and right subtrees.

   Base case would be if the partitioned array has only length 1 which
   means it does not have any children
*/
var buildTree = function (preorder, inorder) {
  if (preorder.length <= 0 || inorder.length <= 0) return null;

  // First element in preorder array is ALWAYS root
  const root = new TreeNode(preorder[0]);
  // Mid index gives us the lengths to partition our left and right subtrees
  const mid = inorder.indexOf(preorder[0]);

  // Recursively build left and right subtrees using partitioned arrays
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
