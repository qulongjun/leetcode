/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (74.17%)
 * Likes:    592
 * Dislikes: 0
 * Total Accepted:    116.1K
 * Total Submissions: 156.5K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
class TreeNode {
  constructor(val, left, right) {
    (this.val = val), (this.left = left || null), (this.right = right || null);
  }
}

/**
 *
 * @param {numbers[]}} nums
 * @param {number} start
 * @param {number} end
 *
 *     -10 -3 0 5 9
 *      s     m   e  -> 计算出中间位置的元素，即为根
 *      s  m-1 m+1 e -> 递归计算左子树 / 右子树范围
 *
 */
const getTree = (nums, start, end) => {
  // 结束条件
  if (end < start || end < 0 || start < 0) return null;
  // 计算中间的结点，平衡二叉树必须在中间位置，否则无法平衡
  const middle = start + parseInt((end - start) / 2);

  // 创建新结点
  const root = new TreeNode(
    // 结点值
    nums[middle],
    // 递归计算左子树
    middle === 0 ? null : getTree(nums, start, middle - 1),
    // 递归计算右子树
    middle === end ? null : getTree(nums, middle + 1, end)
  );

  return root;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return getTree(nums, 0, nums.length - 1);
};
// @lc code=end
