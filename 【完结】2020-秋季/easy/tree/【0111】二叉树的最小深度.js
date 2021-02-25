/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (44.38%)
 * Likes:    371
 * Dislikes: 0
 * Total Accepted:    137.8K
 * Total Submissions: 310.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  // 如果左子树不为空，右子树为空，则左子树 + 1
  if (root.left !== null && root.right === null) return minDepth(root.left) + 1;
  // 如果左子树为空，右子树不为空，则右子树 + 1
  if (root.left === null && root.right !== null) return minDepth(root.right) + 1;

  // 返回子树里的最短长度，加上根节点
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end
