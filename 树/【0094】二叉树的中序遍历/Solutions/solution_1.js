/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (74.89%)
 * Likes:    872
 * Dislikes: 0
 * Total Accepted:    354K
 * Total Submissions: 472.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[2,1]
 *
 *
 * 示例 5：
 *
 *
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [0, 100] 内
 * -100
 *
 *
 *
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
 */
var inorderTraversal = function (root) {
  // 模拟一个栈，push 、 pop 后进先出
  let stacks = [];
  // 定义一个结果集，用来存放中序遍历的结果
  let results = [];
  // 当 root 不为空或者栈没有清空的时候执行
  while (root !== null || stacks.length) {
    // 当 root 不为空，就将左子树源源不断的加到栈里，最后栈顶的就是最左子树的那个叶子节点
    while (root !== null) {
      stacks.push(root);
      root = root.left;
    }
    // 推出一个左子树节点
    root = stacks.pop();
    // 将节点值加入结果集
    results.push(root.val);
    // root 切换到右子树，再在右子树里找左子树 -> 根 -> 右子树
    root = root.right;
  }
  // 返回结果集
  return results;
};
// @lc code=end
