/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 *
 * https://leetcode-cn.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (54.64%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    137.3K
 * Total Submissions: 251.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *
 *
 * 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 *
 *
 * 示例 1:
 *
 * 给定二叉树 [3,9,20,null,null,15,7]
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回 true 。
 *
 * 示例 2:
 *
 * 给定二叉树 [1,2,2,3,3,null,null,4,4]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   2
 * ⁠   / \
 * ⁠  3   3
 * ⁠ / \
 * ⁠4   4
 *
 *
 * 返回 false 。
 *
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
 * 通用获取高度方法
 * @param {TreeNode} root
 */
// const getMaxDepth = (root) => {
//   if (root === null) return 0;

//   return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
// };

/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 自顶向下的检查,缺点：多次计算子树的高度
 */
// var isBalanced = function (root) {
//   // 如果结点不存在，自然是平衡的
//   if (root === null) return true;

//   return (
//     // 比较当前结点的左右子树是否平衡
//     Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right)) <= 1 &&
//     // 递归比较左子树是否平衡
//     isBalanced(root.left) &&
//     // 递归比较右子树是否平衡
//     isBalanced(root.right)
//   );
// };

/**
 *
 * @param {TrreNode} root
 *
 * 用 -1 表示当前结点不是平衡二叉树
 */
const getHeight = (root) => {
  // 如果当前为空结点，则为平衡二叉树，返回 0
  if (root == null) return 0;
  // 递归到叶子结点
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  // leftHeight / rightHeight === -1 表示在它的底下已经不是平衡二叉树了，直接返回 -1
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  ) {
    return -1;
  }
  // 如果他们之间的高度 <= 1，则获取他们的实际高度，以备后续使用
  return Math.max(leftHeight, rightHeight) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * @description 自底向上的检查
 */
var isBalanced = function (root) {
  return getHeight(root) >= 0;
};

// @lc code=end
