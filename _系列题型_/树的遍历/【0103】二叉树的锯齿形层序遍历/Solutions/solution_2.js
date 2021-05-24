/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (55.00%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    72.3K
 * Total Submissions: 131.4K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层次遍历如下：
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  // 与层次遍历类似，增加一个字段 type， 用来标示当前进入 resultMap 的方式
  // unshift：从头部插入，push：从尾部插入
  const queue = [{ level: 0, data: root, type: "unshift" }];
  // 存储层次遍历结果
  const resultMap = [];

  while (queue.length) {
    const { data, level, type } = queue.pop();

    if (resultMap[level]) {
      // 根据 type 类型进行操作
      resultMap[level][type](data.val);
    } else {
      resultMap[level] = [data.val];
    }

    if (data.left)
      queue.push({
        level: level + 1,
        data: data.left,
        type: type === "push" ? "unshift" : "push",
      });

    if (data.right)
      queue.push({
        level: level + 1,
        data: data.right,
        type: type === "push" ? "unshift" : "push",
      });
  }

  return resultMap;
};
// @lc code=end
