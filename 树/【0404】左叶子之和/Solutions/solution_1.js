/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (57.30%)
 * Likes:    313
 * Dislikes: 0
 * Total Accepted:    81.8K
 * Total Submissions: 142.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 *
 * 示例：
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
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
var sumOfLeftLeaves = function (root) {
  // 边界条件
  if (root === null) return 0;
  // 定义一个结果集，存放左叶子节点值之和
  let result = 0;

  // 此处为符合条件的左叶子节点
  // 左子树不为空，且左子树的左子树和左子树的右子树都为空，即当前左子树为叶子节点
  if (root.left !== null && !root.left.left && !root.left.right)
    // 则保存一下节点值
    result += root.left.val;

  // 递归遍历当前节点的左子树 和 当前节点的右子树，计算总和
  return result + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};
// @lc code=end
