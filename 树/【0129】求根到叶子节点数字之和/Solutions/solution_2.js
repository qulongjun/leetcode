/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 *
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/
 *
 * algorithms
 * Medium (69.54%)
 * Likes:    556
 * Dislikes: 0
 * Total Accepted:    174.2K
 * Total Submissions: 250.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
 *
 *
 * 每条从根节点到叶节点的路径都代表一个数字：
 *
 *
 * 例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
 *
 *
 * 计算从根节点到叶节点生成的 所有数字之和 。
 *
 * 叶节点 是指没有子节点的节点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3]
 * 输出：25
 * 解释：
 * 从根到叶子节点路径 1->2 代表数字 12
 * 从根到叶子节点路径 1->3 代表数字 13
 * 因此，数字总和 = 12 + 13 = 25
 *
 * 示例 2：
 *
 *
 * 输入：root = [4,9,0,5,1]
 * 输出：1026
 * 解释：
 * 从根到叶子节点路径 4->9->5 代表数字 495
 * 从根到叶子节点路径 4->9->1 代表数字 491
 * 从根到叶子节点路径 4->0 代表数字 40
 * 因此，数字总和 = 495 + 491 + 40 = 1026
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [1, 1000] 内
 * 0
 * 树的深度不超过 10
 *
 *
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

const dfs = function (root, total) {
  // 如果当前节点为 null， 则表示为空，返回 0
  if (root === null) return 0;
  // 计算当前值
  const current = 10 * total + root.val;
  // 如果当前节点为叶子结点（left 、 right）都为0，则返回 当前的 total 值
  if (root.left === null && root.right === null) return current;

  // 如果当前节点不是叶子节点，则递归遍历到叶子结点，并每次带上之前计算出的 total 值
  return dfs(root.left, current) + dfs(root.right, current);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  /**
   * 思路：只需要按每个根到叶子节点路径遍历，并将其取整数拼接在一起相加即可
   * 如何拼接：10 * prev + current = total，即从根开始，所有节点之和的10倍 + 当前节点的值
   * 1. 如果当前节点为 null， 则表示为空，返回 0
   * 2. 如果当前节点为叶子结点（left 、 right）都为0，则返回 当前的 total 值
   * 3. 如果当前节点不是叶子节点，则递归遍历到叶子结点，并每次带上之前计算出的 total 值
   */

  return dfs(root, 0);
};
// @lc code=end
