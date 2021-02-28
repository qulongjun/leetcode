/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (53.71%)
 * Likes:    1258
 * Dislikes: 0
 * Total Accepted:    271.3K
 * Total Submissions: 505.2K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 *
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 *
 *
 * 进阶：
 *
 * 你可以运用递归和迭代两种方法解决这个问题吗？
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
// 比较两个节点是否一样
var isEqual = function (leftNode, rightNode) {
  // 左子树和右子树都是 null，是对称的，返回 true
  if (leftNode === null && rightNode === null) return true;
  // 左子树和右子树只有一个为 null，说明不是对称的，返回 false
  if (leftNode === null || rightNode === null) return false;
  // 左子树的节点值和右子树节点值不一样，不是对称的，返回 false
  if (leftNode.val !== rightNode.val) return false;

  // 递归比较左子树的左节点和右子树的右节点是否一样 && 左子树的右节点和右子树的左节点是否一样
  return (
    isEqual(leftNode.left, rightNode.right) &&
    isEqual(leftNode.right, rightNode.left)
  );
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 如果根节点为null，则是对称的
  if (root === null) return true;
  
  return isEqual(root.left, root.right);
};
// @lc code=end
