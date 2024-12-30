function isSameTree(p, q) {
    // If both nodes are null, the trees are identical at this point
    if (!p && !q) {
        return true;
    }

    // If one of the nodes is null or their values don't match, the trees are not identical
    if (!p || !q || p.val !== q.val) {
        return false;
    }

    // Recursively check the left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example usage:
// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Create two identical trees
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2)); // Output: true

// Create two different trees
const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(tree3, tree4)); // Output: false