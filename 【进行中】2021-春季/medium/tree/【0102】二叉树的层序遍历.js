/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.17%)
 * Likes:    793
 * Dislikes: 0
 * Total Accepted:    259K
 * Total Submissions: 403.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层序遍历结果：
 *
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
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
var levelOrder = function (root) {
  // 边界条件
  if (root === null) return [];
  // 定义一个结果集
  let results = [];
  // 定义一个队列，数组尾部将节点塞入，数组头部出来，头部出来的是根节点，尾部进去的是叶子节点
  let queueStack = [{ node: root, level: 0 }];

  // 当队列没有被清空
  while (queueStack.length) {
    // 从队列头部拿一个节点出来
    let { node, level } = queueStack.shift();
    // 如果结果集中已经有了部分同层级节点，则追加到里面，否则新建一层存放
    if (results[level]) {
      results[level].push(node.val);
    } else results[level] = [node.val];
    // 将左子树存放进入
    if (node.left) {
      queueStack.push({ node: node.left, level: level + 1 });
    }
    // 将右子树存放进入
    if (node.right) {
      queueStack.push({ node: node.right, level: level + 1 });
    }
  }

  // 返回结果集
  return results;
};
// @lc code=end
