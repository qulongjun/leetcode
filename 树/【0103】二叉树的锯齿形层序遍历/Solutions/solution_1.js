/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (57.10%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    117.4K
 * Total Submissions: 205.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层序遍历如下：
 *
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function (root) {
  // 边界条件
  if (root === null) return [];
  // 定义结果集
  let results = [];
  // node：保存当前节点， level：保存当前层级
  let queueList = [{ node: root, level: 0 }];
  // 当前队列没有清空，就走下去
  while (queueList.length) {
    // 从队伍头部出一个节点
    let { node, level } = queueList.shift();
    // 如果当前层级已经有节点了
    if (results[level]) {
      // 偶数 level 就从尾部推入，奇数 level 就从头部推入
      level % 2 !== 0
        ? results[level].unshift(node.val)
        : results[level].push(node.val);
    } else {
      // 如果是新层级，就新建一个数组
      results[level] = [node.val];
    }
    // 左子树
    if (node.left) queueList.push({ node: node.left, level: level + 1 });
    // 右子树
    if (node.right) queueList.push({ node: node.right, level: level + 1 });
  }

  return results;
};
// @lc code=end
