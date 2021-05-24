/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 *
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (64.90%)
 * Likes:    463
 * Dislikes: 0
 * Total Accepted:    108.4K
 * Total Submissions: 167.1K
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
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 边界问题
  if (root === null) return [];
  // 定义一个数据结构: { node: 当前节点, level: 当前层级 }，用来表示当前节点所属的层级为 level
  let levelOrder = [{ node: root, level: 0 }];
  // 定义一个结果集，存放遍历的结果，格式为：[[level 1], [level 2], [level 3]]
  const results = [];

  // 层次遍历
  while (levelOrder.length !== 0) {
    // 从头部取出需要遍历的数据
    const { node, level } = levelOrder.shift();
    // 将当前节点存放到遍历结果集中，如果当前节点是当前层级的第一个，则新建一个数组存放，否则就追加到当前结果集的后面
    if (results[level]) {
      results[level].push(node.val);
    } else results[level] = [node.val];
    // 将左子树追加到队列中
    if (node.left) levelOrder.push({ node: node.left, level: level + 1 });
    // 将右子树追加到队列中
    if (node.right) levelOrder.push({ node: node.right, level: level + 1 });
  }
  // 返回结果集中的最后一个元素
  return results.map((item) => item[item.length - 1]);
};
// @lc code=end
