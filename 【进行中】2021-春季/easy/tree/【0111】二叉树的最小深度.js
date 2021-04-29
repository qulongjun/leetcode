/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (47.46%)
 * Likes:    498
 * Dislikes: 0
 * Total Accepted:    211.8K
 * Total Submissions: 446.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明：叶子节点是指没有子节点的节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数的范围在 [0, 10^5] 内
 * -1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    // 如果根节点为 null，则深度为 0
  if (root === null) return 0;

  // 计算左子树的最小深度
  let leftDepth = minDepth(root.left);
  // 计算右子树的最小深度
  let rightDepth = minDepth(root.right);

  // 如果左子树和右子树同时存在最小深度值（都不为0），则证明左子树和右子树都不为空，取两者的 更小值 + 1 即为最小深度
  // 否则，左子树和右子树至少有一个为 0，则证明至少左子树为空或者右子树为空。
  // 最小深度是从根节点到最近叶子节点的最短路径上的节点数量，也就是说除非是只有一个根节点，不然的话必须要有一个根节点跟叶子节点才能组成路径，根节点自己不能作为叶子节点。
  // 如果左子树最小深度为 0 ，则只能看右子树，如果右子树最小深度为 0，则只能看左子树
  return leftDepth && rightDepth
    ? 1 + Math.min(leftDepth, rightDepth)
    : 1 + (leftDepth || rightDepth);
};
// @lc code=end
