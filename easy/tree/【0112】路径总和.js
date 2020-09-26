/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (51.14%)
 * Likes:    434
 * Dislikes: 0
 * Total Accepted:    138.2K
 * Total Submissions: 270.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 *
 *
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  // 如果当前结点为空结点，则没有路径
  if (root === null) return false;
  // 如果当前结点是叶子结点，则判断当前结点的值是否等于 sum。
  if (root.left === null && root.right === null) return root.val === sum;

  // 否则查找左子树和右子树，判断是否存在路径
  // Tips：sum 必须是 sum - roo.val，因为当前结点非空，且当前结点是路径中的起始位置，因此需要被计算在路径中，只需要在剩下的路径中找到剩余的 sum 即可。
  return (
    // 查找左子树
    hasPathSum(root.left, sum - root.val) ||
    // 查找右子树
    hasPathSum(root.right, sum - root.val)
  );
};
// @lc code=end
