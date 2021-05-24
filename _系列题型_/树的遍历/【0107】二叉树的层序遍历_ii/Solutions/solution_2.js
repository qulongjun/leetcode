/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Medium (68.88%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    142K
 * Total Submissions: 206.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层序遍历为：
 *
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // 边界处理
  if (root === null) return [];
  // 同层次遍历一样，同时记录当前节点 node 和 当前节点对应的层级 level。
  const levelOrderQueue = [{ node: root, level: 0 }];
  // 存放结果集
  const results = [];

  // 层次遍历
  while (levelOrderQueue.length) {
    const { node, level } = levelOrderQueue.shift();
    // 将当前节点放到合适的结果集中
    if (results[level]) results[level].push(node.val);
    else results[level] = [node.val];
    // 添加左子树
    if (node.left) levelOrderQueue.push({ node: node.left, level: level + 1 });
    // 添加右子树
    if (node.right) levelOrderQueue.push({ node: node.right, level: level + 1 });
  }

  // 翻转结果集
  return results.reverse();
};
// @lc code=end
