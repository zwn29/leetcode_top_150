function invertTree(root) {
    // Base case: if the root is null, return null
    if (!root) {
        return null;
    }

    // Swap the left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example Usage
const tree = new TreeNode(
    4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(JSON.stringify(invertTree(tree), null, 2));
