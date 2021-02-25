/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (63.40%)
 * Likes:    648
 * Dislikes: 0
 * Total Accepted:    198.9K
 * Total Submissions: 313.7K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // 特殊Case： 如果 root 不存在，则返回空数组
  if (root === null) return [];
  // 定义一个 Queue，使用广度优先遍历（BFS）方式依次遍历根和左右子树
  const queue = [{ data: root, level: 0 }];
  // 存放最终的遍历结果
  const resultMap = [];
  // 只要 Queue 里还有数据，就取出来，放到 resultMap 里，并将左右子树压入队列
  // 使用一个 level 字段，用来标示当前的层级，则左右子树的层级为 level + 1
  while (queue.length) {
    // 获取节点数据和层级信息
    const { data, level } = queue.shift();
    // 如果 resultMap 里已经存在了这个层级，就直接追加到尾部
    if (resultMap[level]) resultMap[level].push(data.val);
    // 否则，标示这是一个新的层级，需要新建一个元素存放
    else resultMap[level] = [data.val];
    // 将左子树追加到队列里
    if (data.left) queue.push({ level: level + 1, data: data.left });
    // 将右子树追加到队列里
    if (data.right) queue.push({ level: level + 1, data: data.right });
  }

  return resultMap;
};
// @lc code=end
