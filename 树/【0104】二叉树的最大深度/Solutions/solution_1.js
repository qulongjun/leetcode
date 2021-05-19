/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (75.77%)
 * Likes:    802
 * Dislikes: 0
 * Total Accepted:    352.3K
 * Total Submissions: 465K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
// 层次遍历二叉树方式BFS
var maxDepth = function (root) {
  // 如果根节点为 null，直接返回 0
  if (root === null) return 0;
  // 定义一个变量存放深度，层次就是深度
  let count = 0;
  // 定义一个队列存放每一层的树的节点，一层就是 1 个深度，将子节点从队尾插入，从队头取出
  let queue = [root];
  // 当队列没有空，就证明当前层次遍历还没进行完成
  while (queue.length !== 0) {
    // 每层会走一次 while，其中 size 表示该层总共的节点数
    count++;
    // 暂存一下该层的节点数
    let size = queue.length;
    // 遍历该层的节点数（为什么要暂存节点数，因为队列会实时追加子节点，数量动态变化的）
    for (let i = 0; i < size; i++) {
      // 当前节点出队列
      let tempNode = queue.shift();
      // 将左子树入队列
      if (tempNode.left !== null) queue.push(tempNode.left);
      // 将右子树入队列
      if (tempNode.right !== null) queue.push(tempNode.right);
    }
  }
  // 返回深度
  return count;
};
// @lc code=end

