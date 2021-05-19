/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (73.64%)
 * Likes:    723
 * Dislikes: 0
 * Total Accepted:    271.8K
 * Total Submissions: 369.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @description 递归解法
 */
// var inorderTraversal = function (root) {
//   // 终止条件 / 边界条件
//   if (root === null) return [];

//   // 中序遍历：[左叶子节点，根节点，右叶子节点]
//   return [
//     // 递归遍历左叶子节点
//     ...inorderTraversal(root.left),
//     // 插入当前根节点
//     root.val,
//     // 递归遍历右叶子节点
//     ...inorderTraversal(root.right),
//   ];
// };

/**
 * @param {TreeNode} root
 * @return {number[]}
 * @description 迭代解法
 */
var inorderTraversal = function (root) {
  // 用于临时存放结点信息
  const stack = [];
  // 用于存放最终结果
  const result = [];

  while (root !== null || stack.length) {
    // 将左右左边结点放到临时 stack 里，根节点 root 第一个进入，左边叶子结点后续进入，因此出 stack 的顺序即为先左边结点，后根结点
    while (root !== null) {
      stack.push(root);
      // 计算左边结点
      root = root.left;
    }
    // 此时 stack 已经将全部左叶子结点存储了， root 此时为 null
    root = stack.pop();
    // 存储当前出栈的结点值
    result.push(root.val);
    // 计算右边结点
    root = root.right;
  }

  return result;
};
// @lc code=end
