/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (47.61%)
 * Likes:    506
 * Dislikes: 0
 * Total Accepted:    218.6K
 * Total Submissions: 458.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明：叶子节点是指没有子节点的节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数的范围在 [0, 10^5] 内
 * -1000
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
 * @return {number}
 */
var minDepth = function (root) {
  // 定义边界条件
  if (root === null) return 0;
  // 定义一个队列，push - 入队操作， shift - 出队操作
  const stacks = [];
  // 定义初始深度（root 深度为 1）
  let depth = 1;
  // 将 root 入队
  stacks.push(root);

  // 一次 while 循环就是二叉树的“一层”，BFS 是以 “面” 来查找的
  while (stacks.length !== 0) {
    // 获取当前层节点的个数
    let size = stacks.length;
    // 遍历当前层中的每一个节点
    for (let i = 0; i < size; i++) {
      let node = stacks.shift();
      // 如果当前是叶子节点，则直接结束查找，返回深度，避免重复查找
      if (node.left === null && node.right === null) {
        return depth;
      }
      // 将左子树入队列，下一层 while 循环轮到它
      if (node.left !== null) {
        stacks.push(node.left);
      }
      // 将右子树入队列，下一层 while 循环轮到它
      if (node.right !== null) {
        stacks.push(node.right);
      }
    }
    // 如果当前层没有找到叶子节点，则去查找二叉树的下一层，此时深度需要+1
    depth++;
  }
  
  // 返回最小深度
  return depth;
};
// @lc code=end
