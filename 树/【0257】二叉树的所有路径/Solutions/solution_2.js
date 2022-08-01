/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode.cn/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (69.95%)
 * Likes:    793
 * Dislikes: 0
 * Total Accepted:    234K
 * Total Submissions: 333.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,null,5]
 * 输出：["1->2->5","1->3"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1]
 * 输出：["1"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 *
 *
 */

// @lc code=start
const getPaths = function (root, currentPath, paths) {
  if (root) {
    // 路径先加上当前节点
    currentPath += root.val;
    // 如果当前节点是叶子节点，则直接追加到 paths 中
    // 否则，先加上箭头，然后依次递归左子树和右子树
    if (root.left === null && root.right === null) {
      paths.push(currentPath);
    } else {
      currentPath += "->";
      getPaths(root.left, currentPath, paths);
      getPaths(root.right, currentPath, paths);
    }
  }
};
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const results = [];
  getPaths(root, "", results);

  return results;
};
// @lc code=end
