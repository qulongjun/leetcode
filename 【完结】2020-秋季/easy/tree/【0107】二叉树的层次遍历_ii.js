/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (67.58%)
 * Likes:    338
 * Dislikes: 0
 * Total Accepted:    101.4K
 * Total Submissions: 150.1K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * @description 本题类似于 【0120】二叉树的层次遍历，解析参考该题
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];
  const queue = [{ level: 0, data: root }];
  const resultMap = [];

  while (queue.length) {
    const { level, data } = queue.shift();
    if (resultMap[level]) resultMap[level].push(data.val);
    else resultMap[level] = [data.val];

    if (data.left) queue.push({ level: level + 1, data: data.left });
    if (data.right) queue.push({ level: level + 1, data: data.right });
  }

  // 唯一的不同，就是将结果反转之后输出
  return resultMap.reverse();
};
// @lc code=end
