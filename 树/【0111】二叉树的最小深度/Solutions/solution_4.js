/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (50.68%)
 * Likes:    807
 * Dislikes: 0
 * Total Accepted:    429.2K
 * Total Submissions: 845.1K
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
  /**
   * 本题坑点:
   * 本题计算的是从根节点到【叶子结点】 的最短路径
   * 左子树为 null，右子树不为null的情况，要从右子树中找答案
   * 反之也是
   */
  // 当前节点为 null，则没有路径，返回 0
  if (root === null) return 0;
  // 当前为叶子节点，路径为 1
  if (root.left === null && root.right === null) return 1;
  // 左子树为 null，则要计算右子树最短路径 + 1
  if (root.left === null) return 1 + minDepth(root.right);
  // 右子树为 null，则要计算左子树最短路径 + 1
  if (root.right === null) return 1 + minDepth(root.left);

  // 左右子树都不为 null，则要比较最短路径 + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// @lc code=end
