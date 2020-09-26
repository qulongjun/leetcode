/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (64.24%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    67.8K
 * Total Submissions: 105.5K
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 *
 * 示例:
 *
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1, 3, 4]
 * 解释:
 *
 * ⁠  1            <---
 * ⁠/   \
 * 2     3         <---
 * ⁠\     \
 * ⁠ 5     4       <---
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
 * @return {number[]}
 * @description 类似于层次遍历，区别是层次遍历在最后返回时直接返回，本题只取最边上的结点
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const resultMap = [];
  const stack = [{ data: root, level: 0 }];

  while (stack.length) {
    const { level, data } = stack.pop();

    if (resultMap[level]) {
      resultMap[level].push(data.val);
    } else {
      resultMap[level] = [data.val];
    }

    if (data.left) stack.push({ level: level + 1, data: data.left });
    if (data.right) stack.push({ level: level + 1, data: data.right });
  }

  // 唯一的区别
  return resultMap.map((item) => item.shift());
};
// @lc code=end
