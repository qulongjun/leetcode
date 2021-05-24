/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (66.91%)
 * Likes:    369
 * Dislikes: 0
 * Total Accepted:    174K
 * Total Submissions: 260K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,2,3]
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 */
// var preorderTraversal = function (root) {
//   if (root === null) return [];
//   return [
//     root.val,
//     ...preorderTraversal(root.left),
//     ...preorderTraversal(root.right),
//   ];
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // 存储栈信息
  const stack = [];
  // 存储输出的结果
  const result = [];

  // 根先入栈
  if (root) stack.push(root);

  // 前序遍历顺序是 根 -> 左 -> 右，因此 Stack 入栈顺序是 右 -> 左
  while (stack.length > 0) {
    // 从尾部出一个
    const node = stack.pop();
    // 先将根打出来
    result.push(node.val);
    // 右边先进栈，意味着后出
    if (node.right !== null) stack.push(node.right);
    // 左边后进栈，意味着先出
    if (node.left !== null) stack.push(node.left);
  }

  return result;
};

// @lc code=end
