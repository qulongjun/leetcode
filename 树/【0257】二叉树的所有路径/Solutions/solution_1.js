/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (67.38%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    115.6K
 * Total Submissions: 171.5K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 输入:
 *
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 *
 * 输出: ["1->2->5", "1->3"]
 *
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * 深度优先遍历
 * @param {*} root 当前 DFS 遍历的根节点
 * @param {*} path 当前路径
 * @param {*} paths 全局路径结果集
 */
const dfs = function (root, path, paths) {
  // 边界条件
  if (root === null) return path;

  // 将当前节点加入到 path
  // 然后去找子节点，如果存在子节点，就递归遍历子节点，否则就把结果加入到结果集中
  path = path + root.val;
  // 如果当前是叶子节点，把结果加入到结果集中
  if (!root.left && !root.right) paths.push(path);
  else {
    // 否则，递归遍历子节点
    path += "->";
    // 左子树
    root.left && dfs(root.left, path, paths);
    // 右子树
    root.right && dfs(root.right, path, paths);
  }
};

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // 定义结果集
  let paths = [];
  // DFS
  dfs(root, "", paths);
  return paths;
};
// @lc code=end
