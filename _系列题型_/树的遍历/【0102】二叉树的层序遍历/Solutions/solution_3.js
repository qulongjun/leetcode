/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.91%)
 * Likes:    1402
 * Dislikes: 0
 * Total Accepted:    628.5K
 * Total Submissions: 967.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：[[3],[9,20],[15,7]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：[[1]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 2000] 内
 * -1000 <= Node.val <= 1000
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
  // 特殊： 如果root 为null，则直接返回空结果
  if (root === null) return [];
  // 定义一个队列，初始值为根节点
  // node - 当前节点，level - 当前层级
  const queue = [{ node: root, level: 0 }];
  // 保存结果集
  const maps = [];

  // 当队列中还有元素时，就要循环下去
  // 队列中根元素从头部出来，然后将左子树和右子树添加到队列中
  while (queue.length !== 0) {
    // 根节点先出来
    const { node, level } = queue.shift();
    // 将根元素添加到结果集中
    if (maps[level] !== undefined) maps[level].push(node.val);
    else maps[level] = [node.val];

    // 追加左子树
    if (node.left !== null) queue.push({ node: node.left, level: level + 1 });
    // 追加右子树
    if (node.right !== null) queue.push({ node: node.right, level: level + 1 });
  }
  // 返回结果集
  return maps;
};
// @lc code=end
