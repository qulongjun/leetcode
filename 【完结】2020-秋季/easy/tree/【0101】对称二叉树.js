/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (52.99%)
 * Likes:    1044
 * Dislikes: 0
 * Total Accepted:    211.3K
 * Total Submissions: 398.8K
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
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *
 * 用来进行节点比较的函数
 *
 * @param {*} leftLeaf 左子树
 * @param {*} rightLeaf 右子树
 */
const isEqual = (leftLeaf, rightLeaf) => {
  // 左子树为 null 且右子树为 null ，则返回 true
  if (leftLeaf === null && rightLeaf === null) return true;
  // 左子树或者右子树有一个为 null，另一个不为 null ，返回 false
  else if (leftLeaf === null || rightLeaf === null) return false;
  // 此时左子树和右子树都不为 null，左子树的值和右子树的值不同，返回 null
  if (leftLeaf.val !== rightLeaf.val) return false;

  return (
    // 镜像比较，节点的左子树和节点的右子树比较
    isEqual(leftLeaf.left, rightLeaf.right) &&
    // 反之一样
    isEqual(leftLeaf.right, rightLeaf.left)
  );
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 如果节点不存在，也是对称的二叉树
  if (!root) return true;
  return isEqual(root.left, root.right);
};
// @lc code=end
