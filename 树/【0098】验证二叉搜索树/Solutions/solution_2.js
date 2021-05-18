/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (32.45%)
 * Likes:    779
 * Dislikes: 0
 * Total Accepted:    174.5K
 * Total Submissions: 537.8K
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValid(root, null, null);
};

/**
 *
 * @param {TreeNode} root
 * @param {Number} lower
 * @param {Number} upper
 * @description 抽象成：只需要比较节点的左子树是否小于当前节点，节点的右子树是否大于当前节点
 */
const isValid = (root, lower, upper) => {
  // 如果当前节点为 null，则表示不存在节点，直接返回true
  if (root === null) return true;
  // 如果当前节点（在左子树上）不大于根节点，则返回 false
  if (lower !== null && root.val <= lower) return false;
  // 如果当前节点（在右子树上）不小于根节点，则返回 false
  if (upper !== null && root.val >= upper) return false;

  // 同时比较左子树和右子树是否符合要求
  return (
    isValid(root.left, lower, root.val) && isValid(root.right, root.val, upper)
  );
};
// @lc code=end
