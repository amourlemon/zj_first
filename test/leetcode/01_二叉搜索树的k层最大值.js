function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}

const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let i = 0;
    debugger
    const dfs = (root) => {
        if(i === k) return root.val
        i++;
        console.log(i)
        if(root.right)  return dfs(root.right)
        if(root.left)  return dfs(root.left)
    }
    return dfs(root)
};

kthLargest(root)