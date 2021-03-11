/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (33.68%)
 * Likes:    945
 * Dislikes: 0
 * Total Accepted:    229.5K
 * Total Submissions: 681.3K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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

const isBST = function (root, lower, upper) {
  // 如果根节点为null，则返回true
  if (root === null) return true;
  // 如果当前节点小于最小值或者大于最大值，则返回 false
  if (root.val <= lower || root.val >= upper) return false;
  // 比较当前节点的左子树（最大值：根节点） 和 当前节点的右子树（最小值：根节点）
  return (
    isBST(root.left, lower, root.val) && isBST(root.right, root.val, upper)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // -Infinity / Infinity 定义极小值和极大值
  return isBST(root, -Infinity, Infinity);
};
// @lc code=end
