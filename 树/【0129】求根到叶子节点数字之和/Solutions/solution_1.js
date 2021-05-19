/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
 *
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (64.71%)
 * Likes:    196
 * Dislikes: 0
 * Total Accepted:    40.6K
 * Total Submissions: 62.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 *
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 *
 * 计算从根到叶子节点生成的所有数字之和。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * 输出: 25
 * 解释:
 * 从根到叶子节点路径 1->2 代表数字 12.
 * 从根到叶子节点路径 1->3 代表数字 13.
 * 因此，数字总和 = 12 + 13 = 25.
 *
 * 示例 2:
 *
 * 输入: [4,9,0,5,1]
 * ⁠   4
 * ⁠  / \
 * ⁠ 9   0
 * / \
 * 5   1
 * 输出: 1026
 * 解释:
 * 从根到叶子节点路径 4->9->5 代表数字 495.
 * 从根到叶子节点路径 4->9->1 代表数字 491.
 * 从根到叶子节点路径 4->0 代表数字 40.
 * 因此，数字总和 = 495 + 491 + 40 = 1026.
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
 *
 * @param {TreeNode} root 根结点
 * @param {number} sum 已经计算的全部路径的值
 * @param {number} path 当前路径中的值
 */
const getSum = (root, sum, path) => {
  // 如果当前结点为空，则路径为0
  if (root === null) return 0;
  // 计算当前路径的结点值
  path = 10 * path + root.val;
  // 如果当前结点是叶子结点，则表示该路径已经计算完了，把计算结果保存到全部路径的值中
  if (root.left === null && root.right === null) {
    sum.count += path;
  }
  // 如果不是叶子结点，则递归计算左子树和右子树的路径值
  getSum(root.left, sum, path);
  getSum(root.right, sum, path);
};

/**
 * @param {TreeNode} root
 * @return {number}
 * @description 这道题是 【0124】 / 【0129】 两题的变种，区别是这两题是指定计算路径总和为 nums，且打印路径，本题为遍历路径，打印路径总和
 */
var sumNumbers = function (root) {
  // 用一个 Object 类型存储路径总和，因为 Object 类型为引用类型，计算过程中不会丢失变量
  const sum = { count: 0 };
  getSum(root, sum, 0);
  return sum.count;
};
// @lc code=end
