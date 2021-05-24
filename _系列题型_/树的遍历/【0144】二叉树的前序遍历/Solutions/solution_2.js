/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (69.75%)
 * Likes:    571
 * Dislikes: 0
 * Total Accepted:    321.7K
 * Total Submissions: 461.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
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
 * 输出：[1,2]
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
 * 进阶：递归算法很简单，你可以通过迭代算法完成吗？
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
// 递归进行先序遍历
const preOrder = function (root, results) {
    if (root === null) return;
    // 先序遍历（根 -> 左子树 -> 右子树）
    // 先让 根 入结果集
    results.push(root.val);
    // 递归查找左子树
    if (root.left) preOrder(root.left, results);
    // 最后递归查找右子树
    if (root.right) preOrder(root.right, results);
  };
  
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  var preorderTraversal = function (root) {
    // 定义结果集，引用类型可以带着结果返回
    const results = [];
    // 先序遍历
    preOrder(root, results);
    // 返回结果集
    return results;
  };
// @lc code=end

