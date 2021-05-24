/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (74.50%)
 * Likes:    591
 * Dislikes: 0
 * Total Accepted:    233.2K
 * Total Submissions: 313K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

// 后序遍历（左子树 -> 右子树 -> 根节点）
const postOrder = function (root, results) {
  if (root === null) return [];
  // 遍历左子树
  if (root.left) postOrder(root.left, results);
  // 遍历右子树
  if (root.right) postOrder(root.right, results);
  // 输出根节点
  results.push(root.val);
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 定义结果集
  const results = [];
  // 后序遍历
  postOrder(root, results);
  return results;
};
// @lc code=end
