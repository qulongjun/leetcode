/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode-cn.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (61.00%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    78.5K
 * Total Submissions: 128.3K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \    / \
 * ⁠       7    2  5   1
 *
 *
 * 返回:
 *
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
 *
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
 * @param {number} sum 需要计算的总数
 * @param {number[][]} results 全量符合要求的路径集合
 * @param {number[]} pathList 当前计算中的路径集合
 */
const getPath = (root, sum, results, pathList) => {
  // 如果根结点为空，则直接没有路径
  if (root == null) {
    return [];
  }
  // 记录一下当前走到的路径，[...前序路径，当前结点值]
  pathList = [...pathList, root.val];
  // 如果当前结点是叶子结点，且当前结点的值 === 需要的总数，就直接将当前路径推送到全量路径中
  if (root.left === null && root.right === null && root.val === sum) {
    results.push(pathList);
  }
  // 如果当前结点不是叶子结点，就继续往下找，此时 sum 为去掉当前结点值之后的总数
  getPath(root.left, sum - root.val, results, pathList);
  getPath(root.right, sum - root.val, results, pathList);
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const results = [];
  getPath(root, sum, results, []);
  return results;
};
// @lc code=end
