/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 *
 * https://leetcode-cn.com/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (78.83%)
 * Likes:    630
 * Dislikes: 0
 * Total Accepted:    125.8K
 * Total Submissions: 159.6K
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 *
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL
 * 的节点将直接作为新二叉树的节点。
 *
 * 示例 1:
 *
 *
 * 输入:
 * Tree 1                     Tree 2
 * ⁠         1                         2
 * ⁠        / \                       / \
 * ⁠       3   2                     1   3
 * ⁠      /                           \   \
 * ⁠     5                             4   7
 * 输出:
 * 合并后的树:
 * 3
 * / \
 * 4   5
 * / \   \
 * 5   4   7
 *
 *
 * 注意: 合并必须从两个树的根节点开始。
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

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 与上次相比，这次是不修改 root1 节点实现，直接构造TreeNode节点，并递归指定 left 和 right 的值
var mergeTrees = function (root1, root2) {
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  let root = new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left),
    mergeTrees(root1.right, root2.right)
  );
  return root;
};
// @lc code=end
