/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode.cn/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (57.16%)
 * Likes:    1086
 * Dislikes: 0
 * Total Accepted:    392.8K
 * Total Submissions: 686.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,3,3,null,null,4,4]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数在范围 [0, 5000] 内
 * -10^4
 *
 *
 */

// @lc code=start

/**
 * 计算树的高度
 * @param {*} root
 * @returns
 */
const getDepth = function (root) {
  if (root === null) return 0;
  // 叶子节点，则计为 1
  if (root.left === null && root.right === null) return 1;

  // 计算左子树的高度 和 右子树高度的最大值，加1即为高度
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  /**
   * 判断逻辑：
   * 1. 左子树为平衡二叉树 isBalanced(root.left)
   * 2. 右子树为平衡二叉树 isBalanced(root.right)
   * 3. 当前为平衡二叉树 Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1
   */
  if (root === null) return true;

  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1
  );
};
// @lc code=end
