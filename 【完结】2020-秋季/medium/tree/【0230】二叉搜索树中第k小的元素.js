/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 *
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/description/
 *
 * algorithms
 * Medium (72.90%)
 * Likes:    345
 * Dislikes: 0
 * Total Accepted:    89.4K
 * Total Submissions: 122.6K
 * Testcase Example:  '[3,1,4,null,2]\n1'
 *
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中的节点数为 n 。
 * 1
 * 0
 *
 *
 *
 *
 * 进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
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
 * @param {number} k
 * @return {number}
 */
// 这是一个中序遍历，二叉搜索树中序遍历的结果就是有序的，获取第 k-1 个元素就是第 k 个数字。
var inOrder = function (root, results) {
  // 遍历到叶子了
  if (root === null) {
    return null;
  }
  // 先遍历左子树
  inOrder(root.left, results);
  // 然后是根节点
  results.push(root.val);
  // 再遍历右子树
  inOrder(root.right, results);
};

var kthSmallest = function (root, k) {
  // 存放结果集（有序的结果）
  let results = [];
  // 中序遍历
  inOrder(root, results);
  // 第 k-1 个索引就是 k 个元素
  return results[k - 1];
};
// @lc code=end
