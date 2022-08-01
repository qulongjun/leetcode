/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (57.96%)
 * Likes:    2033
 * Dislikes: 0
 * Total Accepted:    648.4K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start

const isEqual = function (leftLeaf, rightLeaf) {
  /**
   * 1. 左边节点和右边节点都是 null，返回 true
   * 2. 左边节点和右边节点有一个是 null，另一个不是 null， 返回 false
   * 3. 左右两个节点的 val 值不相等，返回 false
   * 4. 由于对称性，比较左子树的左结点和右子树的右节点 以及 左子树的右结点和右子树的左结点
   */
  if (leftLeaf === null && rightLeaf === null) return true;
  if (leftLeaf === null || rightLeaf === null) return false;
  if (leftLeaf.val !== rightLeaf.val) return false;

  return (
    isEqual(leftLeaf.left, rightLeaf.right) &&
    isEqual(leftLeaf.right, rightLeaf.left)
  );
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  /**
   * 定义一个比较子节点的 isEqual 方法
   */
  return isEqual(root.left, root.right);
};
// @lc code=end
